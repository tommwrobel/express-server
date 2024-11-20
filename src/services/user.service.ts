import { User } from "@models/user.model"
import { NotFoundError } from "../utils/errors"

let users: User[] = [
  {
    id: "1",
    name: "John Doe",
    email: "john.doe@gmail.com",
  },
  {
    id: "2",
    name: "Jane Kowalsky",
    email: "",
  },
]

export const getAllUsers = (): User[] => {
  return users
}

export const getUserById = (id: string): User | undefined => {
  const user = users.find((user) => user.id === id)
  if (!user) {
    throw new NotFoundError(`User with id ${id} not found`)
  }
  return users.find((user) => user.id === id)
}

export const createUser = (user: User): User => {
  users.push(user)
  return user
}

export const updateUser = (id: string, data: Partial<User>): User | null => {
  const userIndex = users.findIndex((user) => user.id === id)

  if (userIndex === -1) {
    return null
  }

  users[userIndex] = { ...users[userIndex], ...data }
  return users[userIndex]
}

export const deleteUser = (id: string): boolean => {
  const userIndex = users.findIndex((user) => user.id === id)

  if (userIndex === -1) {
    return false
  }

  users.splice(userIndex, 1)
  return true
}

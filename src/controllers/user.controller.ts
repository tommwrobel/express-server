import { NextFunction, Request, Response } from "express"
import { User } from "@models/user.model"
import * as userService from "@services/user.service"

export const getAllUsers = (req: Request, res: Response): void => {
  const users = userService.getAllUsers()
  res.json(users)
}

export const getUserById = (
  req: Request,
  res: Response,
  next: NextFunction
): void => {
  try {
    const { id } = req.params
    const user = userService.getUserById(id)
    res.json(user)
  } catch (error) {
    next(error)
  }
}

export const createUser = (
  req: Request,
  res: Response,
  next: NextFunction
): void => {
  try {
    const { id, name, email } = req.body

    if (!id || !name || !email) {
      res.status(400).json({ message: "All fields are required" })
      return
    }

    const newUser: User = { id, name, email }
    const createdUser = userService.createUser(newUser)
    res.status(201).json(createdUser)
  } catch (error) {
    next(error)
  }
}

export const updateUser = (req: Request, res: Response): void => {
  const { id } = req.params
  const { name, email } = req.body

  const updatedUser = userService.updateUser(id, { name, email })

  if (!updatedUser) {
    res.status(404).json({ message: "User not found" })
    return
  }

  res.json(updatedUser)
}

export const deleteUser = (req: Request, res: Response): void => {
  const { id } = req.params

  const isDeleted = userService.deleteUser(id)

  if (!isDeleted) {
    res.status(404).json({ message: "User not found" })
    return
  }

  res.status(204).send()
}

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteUser = exports.updateUser = exports.createUser = exports.getUserById = exports.getAllUsers = void 0;
const errors_1 = require("../utils/errors");
let users = [
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
];
const getAllUsers = () => {
    return users;
};
exports.getAllUsers = getAllUsers;
const getUserById = (id) => {
    const user = users.find((user) => user.id === id);
    if (!user) {
        throw new errors_1.NotFoundError(`User with id ${id} not found`);
    }
    return users.find((user) => user.id === id);
};
exports.getUserById = getUserById;
const createUser = (user) => {
    users.push(user);
    return user;
};
exports.createUser = createUser;
const updateUser = (id, data) => {
    const userIndex = users.findIndex((user) => user.id === id);
    if (userIndex === -1) {
        return null;
    }
    users[userIndex] = { ...users[userIndex], ...data };
    return users[userIndex];
};
exports.updateUser = updateUser;
const deleteUser = (id) => {
    const userIndex = users.findIndex((user) => user.id === id);
    if (userIndex === -1) {
        return false;
    }
    users.splice(userIndex, 1);
    return true;
};
exports.deleteUser = deleteUser;
//# sourceMappingURL=user.service.js.map
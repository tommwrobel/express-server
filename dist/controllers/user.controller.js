"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteUser = exports.updateUser = exports.createUser = exports.getUserById = exports.getAllUsers = void 0;
const userService = __importStar(require("@services/user.service"));
const getAllUsers = (req, res) => {
    const users = userService.getAllUsers();
    res.json(users);
};
exports.getAllUsers = getAllUsers;
const getUserById = (req, res, next) => {
    try {
        const { id } = req.params;
        const user = userService.getUserById(id);
        res.json(user);
    }
    catch (error) {
        next(error);
    }
};
exports.getUserById = getUserById;
const createUser = (req, res, next) => {
    try {
        const { id, name, email } = req.body;
        if (!id || !name || !email) {
            res.status(400).json({ message: "All fields are required" });
            return;
        }
        const newUser = { id, name, email };
        const createdUser = userService.createUser(newUser);
        res.status(201).json(createdUser);
    }
    catch (error) {
        next(error);
    }
};
exports.createUser = createUser;
const updateUser = (req, res) => {
    const { id } = req.params;
    const { name, email } = req.body;
    const updatedUser = userService.updateUser(id, { name, email });
    if (!updatedUser) {
        res.status(404).json({ message: "User not found" });
        return;
    }
    res.json(updatedUser);
};
exports.updateUser = updateUser;
const deleteUser = (req, res) => {
    const { id } = req.params;
    const isDeleted = userService.deleteUser(id);
    if (!isDeleted) {
        res.status(404).json({ message: "User not found" });
        return;
    }
    res.status(204).send();
};
exports.deleteUser = deleteUser;
//# sourceMappingURL=user.controller.js.map
import { deleteUser, getAllUsers, updateUser } from "../../controllers/user";
import express from "express";
import { isAuthenticated, isOwner } from "../../middlewares";

const routes = express.Router();

routes.get("/users", isAuthenticated, getAllUsers);
routes.delete("/users/:id", isAuthenticated, isOwner, deleteUser);
routes.patch("/users/:id", isAuthenticated, isOwner, updateUser);

export default routes;

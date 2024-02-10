import express from "express";

import { login, register } from "../../controllers/authentication";

const routes = express.Router();

routes.post("/auth/register", register);

routes.post("/auth/login", login);

export default routes;

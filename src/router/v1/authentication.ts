import express from "express";

import { register } from "../../controllers/authentication";

const routes = express.Router();

routes.post("/auth/register", register);

export default routes;

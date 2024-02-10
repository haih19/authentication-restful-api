import express from "express";
import authentication from "./authentication";
import users from "./users";

const router = express.Router();

router.use(authentication);
router.use(users);

export default router;

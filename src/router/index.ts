import express from "express";
import authentication from "./v1/authentication";
import authenticationV2 from "./v2/authentication";

const router = express.Router();

router.use("/v1", authentication);
router.use("/v2", authenticationV2);

export default router;

import express from "express";
import routerVersion1 from "./v1";
import routerVersion2 from "./v2/authentication";

const router = express.Router();

router.use("/v1", routerVersion1);

router.use("/v2", routerVersion2);

export default router;

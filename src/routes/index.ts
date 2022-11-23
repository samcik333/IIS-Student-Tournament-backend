import express from "express";
import { tournaments } from "../controllers/tournament";
import authRoute from "./auth";
import tournament from "./tournaments";
import user from "./user";
import team from "./teams";

const router = express.Router();

router.use(authRoute, user, team, tournament);

router.get("/", tournaments);

export default router;

import express from "express";
import authRoute from "./auth";
import user from "./user";
import team from "./teams";
import tournament from "./tournaments";
import { tournaments } from "../controllers/tournament";

const router = express.Router();

router.use(authRoute, user, team, tournament);

router.get("/", tournaments);

export default router;

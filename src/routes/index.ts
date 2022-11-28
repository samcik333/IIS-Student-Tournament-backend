import express from "express";
import authRoute from "./auth";
import user from "./user";
import team from "./teams";
import tournament from "./tournaments";
import { tournaments } from "../controllers/tournament";
import match  from "./match";

const router = express.Router();

router.use(authRoute, user, team, tournament, match);

router.get("/", tournaments);

export default router;

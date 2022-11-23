import express from "express";
import { showTeams, info } from "../controllers/team";
import { authorization } from "../middlewares/authorization";
const router = express.Router();

router.get("/teams", authorization, showTeams);

export default router;

import express from "express";
import {
	teamsAll,
	teamsOfUser,
	createTeam,
	updateTeam,
	deleteTeam,
} from "../controllers/team";
import { authorization } from "../middlewares/authorization";
import { validateTeam } from "../middlewares/validate";
const router = express.Router();

router.get("/teamsAll", teamsAll);
router.get("/teams", teamsOfUser);
router.post("/teams", authorization, validateTeam, createTeam);
router.put("/team/:id", authorization, validateTeam, updateTeam);
router.delete("/team/:id", authorization, deleteTeam);

export default router;

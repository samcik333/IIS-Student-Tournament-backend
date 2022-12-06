import express from "express";
import {
	teamsAll,
	teamsOfUser,
	createTeam,
	updateTeam,
	deleteTeam,
	teamInfo,
	teamPlayerList,
	teamAddPlayer,
	deletePlayer,
	playerInfo,
	teamOwner,
	ownedTeamsOfUser,
} from "../controllers/team";
import { authorization } from "../middlewares/authorization";
import { validateTeam } from "../middlewares/validate";
const router = express.Router();

router.get("/teamsAll", teamsAll);
router.get("/teams", authorization, teamsOfUser);
router.get("/ownedTeams/:id", ownedTeamsOfUser);
router.get("/team/:id", teamInfo);
router.get("/teamPlayer/:id", playerInfo);
router.get("/teamPlayerList/:id", teamPlayerList);
router.get("/teamOwner/:id", teamOwner);

router.post("/teams", authorization, validateTeam, createTeam);
router.post("/teamAddPlayer/:id", teamAddPlayer);

router.put("/team/:id", authorization, validateTeam, updateTeam);

router.delete("/teams", authorization, deleteTeam);
router.delete("/teamDelPlayer/:id", authorization, deletePlayer);

export default router;

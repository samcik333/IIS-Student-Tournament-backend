import express from "express";

import {authorization} from "../middlewares/authorization";
import {validateTournament} from "../middlewares/validate";
import {
	tournaments,
	info,
	participants,
	bracket,
	create,
	updateState,
	deleteTournament,
	deleteTournamentByAdmin,
	schedule,
	tournamentAddPlayer,
	tournamentAddTeam,
	deleteTeamFromTournament,
	deleteUserFromTournament,
} from "../controllers/tournament";
const router = express.Router();

router.get("/tournament/:id", info);

router.get("/participants", participants);

router.post("/tournaments", authorization, validateTournament, create);
router.post("/tournamentAddPlayer/:id", authorization, tournamentAddPlayer);
router.post("/tournamentAddTeam/:id", tournamentAddTeam);
router.delete("/tournamentDelTeam/:id", deleteTeamFromTournament);
router.delete("/tournamentDelUser/:id", deleteUserFromTournament);

router.put("/tournamentState/:id", updateState);

router.delete("/tournament/:id", deleteTournamentByAdmin);

router.get("/bracket", bracket);

router.post("/schedule", schedule);

export default router;

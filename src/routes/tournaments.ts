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
	tournamentAddPlayer,
	tournamentAddTeam,
} from "../controllers/tournament";
const router = express.Router();

router.get("/tournament/:id", info);
router.get("/participants", participants);

router.post("/tournaments", authorization, validateTournament, create);
router.post("/tournamentAddPlayer/:id", authorization, tournamentAddPlayer);
router.post("/tournamentAddTeam/:id", tournamentAddTeam);

router.put("/tournamentState/:id", updateState);

router.delete("/tournament/:id", deleteTournament);

router.get("/bracket", bracket);

export default router;

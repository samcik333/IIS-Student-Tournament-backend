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
} from "../controllers/tournament";
const router = express.Router();

router.get("/tournament/:id", info);

router.get("/participants", participants);

router.post("/tournaments", authorization, validateTournament, create);

router.put("/tournamentState/:id", updateState);

router.delete("/tournament/:id", deleteTournamentByAdmin);

router.get("/bracket", bracket);

export default router;

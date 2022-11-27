import express from "express";

import {authorization} from "../middlewares/authorization";
import {validateTournament} from "../middlewares/validate";
import {
	tournaments,
	info,
	participants,
	create,
} from "../controllers/tournament";
const router = express.Router();

router.get("/tournament/:id", info);
router.post("/tournaments", authorization, validateTournament, create);

router.get("/participants", participants);

export default router;

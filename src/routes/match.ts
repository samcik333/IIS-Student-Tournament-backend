import express from "express";
import { createMatch, match, matches, update } from "../controllers/match";
const router = express.Router();

router.get("/match/:id", match);

router.post("/match/create", createMatch);

router.get("/matches/:tournamentId", matches);

router.put("/match/update", update);

export default router;

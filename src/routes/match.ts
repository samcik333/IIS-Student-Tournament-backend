import express from "express";
import { createMatch, match } from "../controllers/match";
const router = express.Router();

router.get("/match/:id", match);

router.post("/match/create", createMatch);

export default router;

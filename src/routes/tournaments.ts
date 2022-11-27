import express from "express";
import { tournaments, info, participants, bracket } from "../controllers/tournament";
const router = express.Router();

router.get("/tournament/:id", info);

router.get("/participants", participants);

router.get("/bracket", bracket);

export default router;

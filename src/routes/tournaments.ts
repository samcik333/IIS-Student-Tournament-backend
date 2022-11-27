import express from "express";
import { tournaments, info, participants } from "../controllers/tournament";
const router = express.Router();

router.get("/tournament/:id", info);

router.get("/participants", participants);

export default router;

import express from "express";
import { tournaments, info } from "../controllers/tournament";
const router = express.Router();

router.get("/tournament/:id", info);

export default router;

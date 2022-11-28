import express from "express";
import { match } from "../controllers/match";
const router = express.Router();

router.get("/match/:id", match);

export default router;

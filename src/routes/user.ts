import express from "express";
import {deleteUser, getUserId, getUsers, updateUser} from "../controllers/user";
import {
	deleteTournament,
	ownerTournaments,
	update,
} from "../controllers/tournament";
import {authorization} from "../middlewares/authorization";
const router = express.Router();

router.get("/user", getUserId);
router.get("/user/profile", authorization, getUserId);
router.get("/users", getUsers);

router.get("/user/tournaments", authorization, ownerTournaments);
router.patch("/user/tournaments", update);
router.delete("/user/tournaments", deleteTournament);
router.patch("/user/profile", authorization, updateUser);

router.delete("/user", deleteUser);

export default router;

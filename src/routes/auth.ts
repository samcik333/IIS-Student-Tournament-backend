import express, { response } from "express";
import { loginUser, logOutUser, registerUser } from "../controllers/auth";
import { authorization } from "../middlewares/authorization";
import {
	validateLoginUser,
	validateRegisterUser,
} from "../middlewares/validate";
const router = express.Router();

router.post("/register", validateRegisterUser, registerUser);

router.post("/login", validateLoginUser, loginUser);

router.get("/logout", authorization, logOutUser);

export default router;

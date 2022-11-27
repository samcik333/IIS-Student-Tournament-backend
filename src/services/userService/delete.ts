import { Request } from "express";
import Team from "../../models/teamModel";
import User from "../../models/userModel";

export const deleteUserByUsername = async (req: Request) => {
	const { username } = req.body;
	await User.query().findOne("username", username).delete();
};

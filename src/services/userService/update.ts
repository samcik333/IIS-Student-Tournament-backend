import {Request} from "express";
import User from "../../models/userModel";
import encryptPassword from "../registerService/cryptPassword";

export const updateUserInfo = async (req: Request) => {
	let {password, photo} = req.body;

	if (password) {
		password = await encryptPassword(password);
	} else {
		delete req.body.password;
	}

	if (!photo) {
		delete req.body.photo;
	}
	await User.query().findById(req.body.id).update(req.body);
	return await User.query().findById(req.body.id);
};

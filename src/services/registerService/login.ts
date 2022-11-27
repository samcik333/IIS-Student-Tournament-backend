import User from "../../models/userModel";
import bcrypt from "bcrypt";

export const login = async (password: string, user: User) => {
	return await bcrypt.compare(password, user.password);
};

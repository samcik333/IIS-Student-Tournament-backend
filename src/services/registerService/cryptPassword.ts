import bcrypt from "bcrypt";

export default async function encryptPassword(password: string) {
	return await bcrypt.hash(password, 10);
}

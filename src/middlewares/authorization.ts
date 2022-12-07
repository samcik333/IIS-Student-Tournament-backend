import {Request, Response} from "express";
import jwt from "jsonwebtoken";

type MyToken = {
	id: string;
	username: string;
	iat: number;
	exp: number;
};

export const authorization = async (req: Request, res: Response, next: any) => {
	const token = req.cookies.access_token;
	console.log("auth",token)

	if (!token) {
		return res.status(403);
	}
	try {
		const data = jwt.verify(token, "SlUser") as MyToken;

		req.body.id = data.id;
		return await next();
	} catch {
		return res.status(403).send({message: " Token error"});
	}
};

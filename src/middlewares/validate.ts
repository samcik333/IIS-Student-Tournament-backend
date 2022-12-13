import Ajv from "ajv";
import addFormats from "ajv-formats";
import {fail, ok} from "assert";
import {Request, Response} from "express";

const ajv = new Ajv();
addFormats(ajv);

export const validateRegisterUser = async (
	req: Request,
	res: Response,
	next: any
) => {
	const registerSchema = {
		type: "object",
		properties: {
			name: {
				type: "string",
			},
			lastname: {
				type: "string",
			},
			username: {
				type: "string",
			},
			email: {
				type: "string",
				format: "email",
			},
			password: {
				type: "string",
				format: "password",
				minLength: 8,
			},
		},
		required: ["name", "lastname", "username", "email", "password"],
	};
	const valid = ajv.validate(registerSchema, req.body);
	if (!valid) {
		if (ajv.errors) {
			console.log(ajv.errors);
			return res.status(400).send({message: ajv.errors[0].instancePath});
		}
	}
	return await next();
};

export const validateLoginUser = async (
	req: Request,
	res: Response,
	next: any
) => {
	const loginSchema = {
		type: "object",
		properties: {
			username: {
				type: "string",
			},
			password: {
				type: "string",
				format: "password",
				minLength: 4,
			},
		},
		required: ["username", "password"],
	};
	const valid = ajv.validate(loginSchema, req.body);
	if (!valid) {
		return res.status(400).send(ajv.errors);
	}
	return await next();
};

export const validateTeam = async (req: Request, res: Response, next: any) => {
	const teamSchema = {
		type: "object",
		properties: {
			name: {
				type: "string",
			},
		},
		required: ["name"],
	};
	const valid = ajv.validate(teamSchema, req.body);
	if (!valid) {
		return res.status(400).send(ajv.errors);
	}
	return await next();
};

export const validateTournament = async (
	req: Request,
	res: Response,
	next: any
) => {
	const tournamentSchema = {
		type: "object",
		properties: {
			name: {
				type: "string",
			},
			place: {
				type: "string",
			},
			capacity: {
				type: "integer",
			},
			mode: {
				type: "integer",
			},
		},
		required: ["name", "place", "capacity", "mode"],
	};
	const valid = ajv.validate(tournamentSchema, req.body);
	console.log(ajv.errors);

	if (!valid) {
		return res.status(400).send(ajv.errors);
	}
	return await next();
};

import { Express, Response, Request } from "express";
import { findTeam, getTeamsById } from "../services/teamService/find";

export const showTeams = async (req: Request, res: Response) => {
	const teams = await getTeamsById(parseInt(req.body.id));
	if (teams) {
		return res.status(200).send(teams);
	} else {
		return res.status(200);
	}
};

export const info = async (req: Request, res: Response) => {
	const id = req.body.id;
	const result = await findTeam(id);
	if (result) {
		return res.status(200).send(result);
	} else {
		return res.status(409).json({ message: "Team does not exist" });
	}
};

import { Request } from "express";
import Team from "../../models/teamModel";

export const deleteTeamByName = async (req: Request) => {
	const { name } = req.body;
	return Team.query()
		.where("ownerId", req.body.id)
		.where("name", name)
		.delete();
};

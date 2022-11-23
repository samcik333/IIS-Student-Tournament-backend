import { Request } from "express";
import Team from "../../models/teamModel";

export const deleteTeamById = async (req: Request) => {
	return Team.query().where("ownerId", req.body.id).deleteById(req.params.id);
};

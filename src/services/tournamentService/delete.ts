import { Request } from "express";
import Tournament from "../../models/tournamentModel";

export const deleteTeamById = async (req: Request) => {
	return await Tournament.query().findById(req.params.id).delete();
};

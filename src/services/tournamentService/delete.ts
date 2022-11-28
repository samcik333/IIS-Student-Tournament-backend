import {Request} from "express";
import Tournament from "../../models/tournamentModel";

export const deleteTeamById = async (req: Request) => {
	return await Tournament.query().findById(req.params.id).delete();
};

export const deleteOneTournament = async (id: any) => {
	const value = parseInt(id);
	return await Tournament.query().deleteById(value);
};

import { Request } from "express";
import Tournament from "../../models/tournamentModel";

export const stateUpdateToOpen = async (req: Request) => {
	const state = "open";
	return await Tournament.query().findById(req.params.id).update({ state });
};

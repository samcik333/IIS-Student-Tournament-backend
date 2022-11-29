import {Request, response} from "express";
import Team from "../../models/teamModel";
import Tournament from "../../models/tournamentModel";

export const deleteTeamById = async (req: Request) => {
	return await Tournament.query().findById(req.params.id).delete();
};

export const deleteOneTournament = async (id: any) => {
	const value = parseInt(id);
	return await Tournament.query().deleteById(value);
};

export const deleteTeam = async (req: Request) => {
	const tournament = await Tournament.query().findById(req.params.id);
	if (!tournament) {
		return 0;
	}

	let numberOfPlayers = tournament?.numberOfPlayers;
	if (numberOfPlayers) {
		numberOfPlayers--;
	}
	await Tournament.query().findById(req.params.id).update({
		numberOfPlayers,
		state: tournament?.state,
		logo: tournament?.logo,
	});

	const updatedTeam = await Tournament.query().findById(req.params.id);

	if (updatedTeam?.capacity == updatedTeam?.numberOfPlayers) {
		await Tournament.query().findById(req.params.id).update({
			numberOfPlayers,
			state: "open",
			logo: tournament?.logo,
		});
	}

	return await Tournament.relatedQuery("teams")
		.for(req.params.id)
		.where("teamId", req.body.teamId)
		.unrelate();
};

export const deleteUser = async (req: Request) => {
	const tournament = await Tournament.query().findById(req.params.id);
	if (!tournament) {
		return 0;
	}

	let numberOfPlayers = tournament?.numberOfPlayers;
	if (numberOfPlayers) {
		numberOfPlayers--;
	}
	await Tournament.query().findById(req.params.id).update({
		numberOfPlayers,
		state: tournament?.state,
		logo: tournament?.logo,
	});

	const updatedTeam = await Tournament.query().findById(req.params.id);

	if (updatedTeam?.capacity == updatedTeam?.numberOfPlayers) {
		await Tournament.query().findById(req.params.id).update({
			numberOfPlayers,
			state: "open",
			logo: tournament?.logo,
		});
	}

	return await Tournament.relatedQuery("participants")
		.for(req.params.id)
		.where("userId", req.body.userId)
		.unrelate();
};

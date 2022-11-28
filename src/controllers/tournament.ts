import { Express, Response, Request } from "express";
import {
	checkAdminById,
	getParticipantById,
	getParticipatingTeamById,
} from "../services/teamService/read";
import {
	createTournament,
	saveParticipant,
	saveParticipatingTeam,
} from "../services/tournamentService/create";
import { deleteTeamById } from "../services/tournamentService/delete";
import {
	findTournament,
	findTournamentByName,
} from "../services/tournamentService/find";
import { getAll } from "../services/tournamentService/getAll";
import { getBracket } from "../services/tournamentService/getBracket";
import { getParticipants } from "../services/tournamentService/getParticipants";
import { stateUpdateToOpen } from "../services/tournamentService/stateChange";

export const tournaments = async (req: Request, res: Response) => {
	const result = await getAll(req.query);
	return res.status(200).send(result);
};

export const info = async (req: Request, res: Response) => {
	const id = req.params["id"];
	const result = await findTournament(id);
	if (!result) {
		return res.status(409).json({ message: "Tournament does not exist" });
	} else {
		return res.status(200).send(result);
	}
};

export const create = async (req: Request, res: Response) => {
	const tournamentToCreate = await findTournamentByName(req.body.name);

	if (tournamentToCreate) {
		return res
			.status(400)
			.json({ message: "Tournament with that name already exist" });
	}

	const newTournament = await createTournament(req);
	if (!newTournament) {
		return res.status(409).json({ message: "Tournament creation failed" });
	}
	return res.status(200).json({ message: "Tournament was created" });
};

export const participants = async (req: Request, res: Response) => {
	const result = await getParticipants(req.query.id);
	return res.status(200).json({ result });
};

export const updateState = async (req: Request, res: Response) => {
	await stateUpdateToOpen(req);
	return res.status(200).json({ message: "Team is in open state" });
};

export const deleteTournament = async (req: Request, res: Response) => {
	await deleteTeamById(req);
	return res.status(200).json({ message: "Team was deleted" });
};

export const bracket = async (req: Request, res: Response) => {
	const id = (req.query.id || "").toString();
	const result = await getBracket(id);
	return res.status(200).send(result);
};

/* ADD PLAYER TO TOURNAMENT*/
export const tournamentAddPlayer = async (req: Request, res: Response) => {
	const isAdmin = await checkAdminById(req);

	if (isAdmin) {
		return res.status(400).json({ message: "Unable to join as admin" });
	}

	const isParticipating = await getParticipantById(req);
	if (isParticipating) {
		return res
			.status(400)
			.json({ message: "You are already participating in tournament" });
	}

	const newParticipant = await saveParticipant(req);
	if (!newParticipant) {
		return res.status(409).json({ message: "User was not added" });
	}
	return res.status(200).json({ message: "Succesfully joined" });
};

/* ADD TEAM TO TOURNAMENT */
export const tournamentAddTeam = async (req: Request, res: Response) => {
	const isParticipating = await getParticipatingTeamById(req);
	if (isParticipating) {
		return res
			.status(400)
			.json({ message: "Team is already participating in tournament" });
	}

	const newParticipatingTeam = await saveParticipatingTeam(req);
	if (!newParticipatingTeam) {
		return res.status(409).json({ message: "Team was not added" });
	}
	return res.status(200).json({ message: "Team succesfully joined" });
};

import {Express, Response, Request} from "express";
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
import {
	deleteTeam,
	deleteTeamById,
	deleteUser,
} from "../services/tournamentService/delete";
import {deleteOneTournament} from "../services/tournamentService/delete";
import {
	findOwnerTournaments,
	findTournament,
	findTournamentByName,
} from "../services/tournamentService/find";
import {getAll} from "../services/tournamentService/getAll";
import {getBracket} from "../services/tournamentService/getBracket";
import {getParticipants} from "../services/tournamentService/getParticipants";
import { isparticipant } from "../services/tournamentService/isParticipant";
import {stateUpdateToOpen} from "../services/tournamentService/stateChange";
import {updateTournament} from "../services/tournamentService/udate";
import { updateBracket } from "../services/tournamentService/updBracket";

export const tournaments = async (req: Request, res: Response) => {
	const result = await getAll(req.query);
	return res.status(200).send(result);
};

export const info = async (req: Request, res: Response) => {
	const id = req.params["id"];
	const result = await findTournament(id);
	if (!result) {
		return res.status(409).send({message: "Tournament does not exist"});
	} else {
		return res.status(200).send(result);
	}
};

export const create = async (req: Request, res: Response) => {
	const tournamentToCreate = await findTournamentByName(req.body.name);

	if (tournamentToCreate) {
		return res
			.status(400)
			.send({message: "Tournament with that name already exist"});
	}

	const newTournament = await createTournament(req);
	if (!newTournament) {
		return res.status(409).send({message: "Tournament creation failed"});
	}
	return res.status(200).send({message: "Tournament was created"});
};

export const participants = async (req: Request, res: Response) => {
	const result = await getParticipants(req.query.id);
	return res.status(200).send({result});
};

export const updateState = async (req: Request, res: Response) => {
	await stateUpdateToOpen(req);
	return res.status(200).send({message: "Team is in open state"});
};

export const deleteTournamentByAdmin = async (req: Request, res: Response) => {
	await deleteTeamById(req);
	return res.status(200).send({message: "Tournament was deleted"});
};

export const deleteTeamFromTournament = async (req: Request, res: Response) => {
	const team = await deleteTeam(req);
	if (!team) {
		return res
			.status(400)
			.send({message: "Team was not deleted from Tournament"});
	}
	return res.status(200).json({message: "Team was deleted from Tournament"});
};
export const deleteUserFromTournament = async (req: Request, res: Response) => {
	const user = await deleteUser(req);
	if (!user) {
		return res
			.status(400)
			.send({message: "User was not deleted from Tournament"});
	}
	return res.status(200).json({message: "User was deleted from Tournament"});
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
		return res.status(400).send({message: "Unable to join as admin"});
	}

	const isParticipating = await getParticipantById(req);
	if (isParticipating) {
		return res
			.status(400)
			.send({message: "You are already participating in tournament"});
	}

	const newParticipant = await saveParticipant(req);
	if (!newParticipant) {
		return res.status(409).send({message: "User was not added"});
	}
	return res.status(200).send({message: "Succesfully joined"});
};

/* ADD TEAM TO TOURNAMENT */
export const tournamentAddTeam = async (req: Request, res: Response) => {
	const isParticipating = await getParticipatingTeamById(req);
	if (isParticipating) {
		return res
			.status(400)
			.send({message: "Team is already participating in tournament"});
	}

	const newParticipatingTeam = await saveParticipatingTeam(req);
	if (!newParticipatingTeam) {
		return res.status(409).send({message: "Team was not added"});
	}
	return res.status(200).send({message: "Team succesfully joined"});
};

export const update = async (req: Request, res: Response) => {
	const newTournament = await updateTournament(req);
	if (!newTournament) {
		return res.status(409).send({message: "Tournament update failed"});
	}
	return res.status(200).send({message: "Tournament was updated"});
};

export const ownerTournaments = async (req: Request, res: Response) => {
	const result = await findOwnerTournaments(req.body.id);
	return res.status(200).send(result);
};

export const deleteTournament = async (req: Request, res: Response) => {
	if (req.query.id) {
		await deleteOneTournament(req.query.id);
		return res
			.status(200)
			.send({message: "Tournament was successfully deleted"});
	}
	return res.status(400).send({message: "Error with deleting Tournament"});
};

export const bracketUpate = async (req: Request, res: Response) => {
	const newBracket = await updateBracket(req);
	if (!newBracket) {
		return res.status(409).send({message: "Tournament update failed"});
	}
	return res.status(200).send({message:"Bracket was updated!"});
};

export const isParticipant = async (req: Request, res: Response) => {
	const isParticipating = await isparticipant(req);
	if(isParticipating){
		return res.status(200).send(true);
	}else{
		return res.status(200).send(false);
	}
}
import console from "console";
import {Express, Response, Request} from "express";
import {saveMember, saveTeam} from "../services/teamService/create";
import {deleteMember, deleteTeamByName} from "../services/teamService/delete";
import {
	checkAdmin,
	getMemberByUsername,
	getOwnedTeamsByUserId,
	getOwnerByTeamId,
	getPlayersByTeamId,
	getTeamById,
	getTeamByName,
	getTeams,
	getTeamsByUserId,
	getUserById,
	getUserByUsername,
} from "../services/teamService/read";
import {updateTeamById} from "../services/teamService/update";

/* ALL TEAMS */
export const teamsAll = async (req: Request, res: Response) => {
	const teams = await getTeams();
	return res.status(200).send(teams);
};

/* USER TEAMS */
export const teamsOfUser = async (req: Request, res: Response) => {
	const teams = await getTeamsByUserId(req);
	if (teams) {
		return res.status(200).send(teams);
	} else {
		return res.status(200);
	}
};

/* USER OWNED TEAMS */
export const ownedTeamsOfUser = async (req: Request, res: Response) => {
	const teams = await getOwnedTeamsByUserId(req);
	if (teams) {
		return res.status(200).send(teams);
	} else {
		return res.status(200);
	}
};

/* TEAM INFO */
export const teamInfo = async (req: Request, res: Response) => {
	const team = await getTeamById(req);
	if (!team) {
		return res.status(409).json({message: "Team does not exist"});
	}
	return res.status(200).send(team);
};

/* TEAM PLAYER LIST */
export const teamPlayerList = async (req: Request, res: Response) => {
	const playerList = await getPlayersByTeamId(req);
	if (!playerList) {
		return res.status(409).json({message: "There are no players here"});
	}
	return res.status(200).send(playerList);
};

/* CREATE TEAM */
export const createTeam = async (req: Request, res: Response) => {
	const teamToCreate = await getTeamByName(req);
	if (teamToCreate) {
		return res
			.status(400)
			.json({message: "Team with that name already exist"});
	}

	const newTeam = await saveTeam(req);
	if (!newTeam) {
		return res.status(409).json({message: "Team creation failed"});
	}
	return res.status(200).json({message: "Team was created"});
};

/* UPDATE TEAM */
export const updateTeam = async (req: Request, res: Response) => {
	const teamToUpdate = await getTeamByName(req);
	if (teamToUpdate) {
		return res
			.status(400)
			.json({message: "Team with that name already exist"});
	}

	const team = await updateTeamById(req);
	if (!team) {
		return res
			.status(409)
			.json({message: "The team with given Id does not exist"});
	}
	return res
		.status(200)
		.json({message: "The team with Id " + req.params.id + " was updated"});
};

/* DELETE TEAM */
export const deleteTeam = async (req: Request, res: Response) => {
	const delTeam = await deleteTeamByName(req);
	if (!delTeam) {
		return res.status(409).json({
			message: "The team with that name does not exist",
		});
	}
	return res
		.status(200)
		.json({message: "The team " + req.body.name + " was deleted"});
};

/* ADD PLAYER */
export const teamAddPlayer = async (req: Request, res: Response) => {
	const userToAdd = await getUserByUsername(req);
	if (!userToAdd) {
		return res.status(400).json({message: "User was not found"});
	}

	const isAdmin = await checkAdmin(req);
	if (isAdmin) {
		return res.status(400).json({message: "Unable to add admin"});
	}

	const isMember = await getMemberByUsername(req);
	if (isMember) {
		return res
			.status(400)
			.json({message: "User is already member of team"});
	}

	const newMember = await saveMember(req);
	if (!newMember) {
		return res.status(409).json({message: "User was not added"});
	}
	return res.status(200).json({message: "User was added"});
};

/* DELETE PLAYER */
export const deletePlayer = async (req: Request, res: Response) => {
	const delPlayer = await deleteMember(req);
	if (!delPlayer) {
		return res.status(409).json({
			message: "User does not exist",
		});
	}
	return res
		.status(200)
		.json({message: "User " + req.body.username + " was deleted"});
};

/* PLAYER INFO */
export const playerInfo = async (req: Request, res: Response) => {
	const user = await getUserById(req);
	if (!user) {
		return res.status(409).json({message: "Player does not exist"});
	}
	return res.status(200).send(user);
};

/* TEAM OWNER */
export const teamOwner = async (req: Request, res: Response) => {
	const owner = await getOwnerByTeamId(req);
	if (!owner) {
		return res.status(409).json({message: "Owner does not exist"});
	}
	return res.status(200).send(owner);
};

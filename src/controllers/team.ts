import { Express, Response, Request } from "express";
import { saveTeam } from "../services/teamService/create";
import { deleteTeamById } from "../services/teamService/delete";
import {
	getTeamById,
	getTeamByName,
	getTeams,
	getTeamsByUserId,
} from "../services/teamService/read";
import { updateTeamById } from "../services/teamService/update";

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

/* TEAM INFO */
export const teamInfo = async (req: Request, res: Response) => {
	const team = await getTeamById(req);
	if (!team) {
		return res.status(409).json({ message: "Team does not exist" });
	}
	return res.status(200).send(team);
};

/* CREATE TEAM */
export const createTeam = async (req: Request, res: Response) => {
	const teamToCreate = await getTeamByName(req);
	if (teamToCreate) {
		return res
			.status(400)
			.json({ message: "Team with that name already exist" });
	}

	const newTeam = await saveTeam(req);
	if (!newTeam) {
		return res.status(409).json({ message: "Team creation failed" });
	}
	return res.status(200).json({ message: "Team was created" });
};

/* UPDATE TEAM */
export const updateTeam = async (req: Request, res: Response) => {
	const teamToUpdate = await getTeamByName(req);
	if (teamToUpdate) {
		return res
			.status(400)
			.json({ message: "Team with that name already exist" });
	}

	const team = await updateTeamById(req);
	if (!team) {
		return res
			.status(409)
			.json({ message: "The team with given Id does not exist" });
	}
	return res
		.status(200)
		.json({ message: "The team with Id " + req.params.id + " was updated" });
};

/* DELETE TEAM */
export const deleteTeam = async (req: Request, res: Response) => {
	const delTeam = await deleteTeamById(req);
	if (!delTeam) {
		return res.status(409).json({
			message: "The team with given Id does not exist",
		});
	}
	return res
		.status(200)
		.json({ message: "The team with Id " + req.params.id + " was deleted" });
};

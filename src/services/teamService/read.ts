import { Request } from "express";
import Team from "../../models/teamModel";
import Tournament from "../../models/tournamentModel";
import User from "../../models/userModel";

/* TEAM */
export const getTeams = async () => {
	return await Team.query();
};

export const getTeamsByUserId = async (req: Request) => {
	return await User.relatedQuery("teams").for(req.body.id);
};

export const getOwnedTeamsByUserId = async (req: Request) => {
	return await Team.query().where("ownerId", req.params.id);
};

export const getTeamById = async (req: Request) => {
	return await Team.query().findOne("id", req.params.id);
};

export const getTeamByName = async (req: Request) => {
	const { name } = req.body;
	return await Team.query().findOne("name", name);
};

export const getParticipatingTeamById = async (req: Request) => {
	return await Tournament.relatedQuery("teams")
		.for(req.params.id)
		.findOne("teamId", req.body.teamId);
};

/* PLAYER */
export const getUserById = async (req: Request) => {
	return await User.query().findOne("id", req.params.id);
};

export const getPlayersByTeamId = async (req: Request) => {
	// get players from team
	return await Team.relatedQuery("players").for(req.params.id);
};

export const getUserByUsername = async (req: Request) => {
	const { username } = req.body;

	return await User.query().findOne("username", username);
};

export const getMemberByUsername = async (req: Request) => {
	const { username } = req.body;

	return await Team.relatedQuery("players")
		.for(req.params.id)
		.findOne("username", username);
};

export const getParticipantById = async (req: Request) => {
	return await Tournament.relatedQuery("participants")
		.for(req.params.id)
		.findOne("userId", req.body.id);
};

export const getOwnerByTeamId = async (req: Request) => {
	const team = await Team.query().findById(req.params.id);
	if (!team) {
		return 0;
	}

	const owner = await User.query().findById(team.ownerId);
	if (!owner) {
		return 0;
	}
	return owner;
};

export const checkAdmin = async (req: Request) => {
	const { username } = req.body;
	if (username == "admin") {
		return 1;
	}
	return 0;
};

export const checkAdminById = async (req: Request) => {
	const admin = await User.query().findOne("username", "admin");

	if (req.body.id == admin?.id) {
		return 1;
	}
	return 0;
};

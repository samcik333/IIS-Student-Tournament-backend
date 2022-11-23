import { Request } from "express";
import Team from "../../models/teamModel";
import User from "../../models/userModel";

export const getTeams = async () => {
	return await Team.query();
};

export const getTeamsByUserId = async (req: Request) => {
	return await Team.query();
	//return await User.relatedQuery("teams").for(req.body.id);
};

export const getTeamById = async (req: Request) => {
	return await Team.query().findOne("id", req.body.id);
};

export const getTeamByName = async (req: Request) => {
	const { name } = req.body;
	return await Team.query().findOne("name", name);
};

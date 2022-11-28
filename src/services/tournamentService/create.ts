import { Request } from "express";
import Team from "../../models/teamModel";
import User from "../../models/userModel";

export const createTournament = async (req: Request) => {
	const { name, place, logo, capacity, players, date } = req.body;
	console.log(req.body);
	const userId = parseInt(req.body.id);
	const tour = await User.relatedQuery("tournamentsOwner").for(userId).insert({
		name,
		place,
		logo,
		date,
		capacity,
		players,
	});
	return tour;
};

export const saveParticipant = async (req: Request) => {
	// Connect user with tournament
	return await User.relatedQuery("tournaments")
		.for(req.body.id)
		.relate(req.params.id);
};

export const saveParticipatingTeam = async (req: Request) => {
	// Connect team with tournament
	return await Team.relatedQuery("tournaments")
		.for(req.body.teamId)
		.relate(req.params.id);
};

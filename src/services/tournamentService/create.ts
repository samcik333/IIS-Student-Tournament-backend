import { Request } from "express";
import Team from "../../models/teamModel";
import User from "../../models/userModel";

export const createTournament = async (req: Request) => {
	let { name, place, logo, capacity, mode, date } = req.body;
	if (!logo) {
		logo =
			"https://www.pngkey.com/png/detail/66-661551_white-blank-shield-logo-school-logo-template-free.png";
	}
	console.log(req.body);
	const userId = parseInt(req.body.id);
	const tour = await User.relatedQuery("tournamentsOwner").for(userId).insert({
		name,
		place,
		logo,
		date,
		capacity,
		mode,
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

import {Request} from "express";
import User from "../../models/userModel";

export const createTournament = async (req: Request) => {
	const {name, place, logo, capacity, players, date} = req.body;
	console.log(req.body);
	const userId = parseInt(req.body.id);
	const tour = await User.relatedQuery("tournamentsOwner")
		.for(userId)
		.insert({
			name,
			place,
			logo,
			date,
			capacity,
			players,
		});
	return tour;
};

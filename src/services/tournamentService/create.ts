import {Request} from "express";
import User from "../../models/userModel";

export const createTournament = async (req: Request) => {
	let {name, place, logo, capacity, mode, date} = req.body;
	if (!logo) {
		logo =
			"https://www.pngkey.com/png/detail/66-661551_white-blank-shield-logo-school-logo-template-free.png";
	}
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
			mode,
		});
	return tour;
};

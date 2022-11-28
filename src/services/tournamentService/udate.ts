import {Request} from "express";
import Tournament from "../../models/tournamentModel";
import User from "../../models/userModel";

export const updateTournament = async (req: Request) => {
	const tourId = Number(req.query.id);

	let {name, place, logo, capacity, mode, date, description} = req.body;
	if (!logo) {
		logo =
			"https://www.pngkey.com/png/detail/66-661551_white-blank-shield-logo-school-logo-template-free.png";
	}

	const tour = await Tournament.query().findById(tourId).update({
		name,
		place,
		logo,
		date,
		capacity,
		mode,
		description,
	});
	return tour;
};

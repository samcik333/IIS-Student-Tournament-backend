import {Request} from "express";
import Bracket from "../../models/bracketModel";
import Match from "../../models/matchModel";

export const updateMatch = async (req: Request) => {
	const braId = Number(req.body.id);
    console.log(req.body);
	let { firstScore, secondScore } = req.body;

	const match = await Match.query().findById(braId).update({
		firstScore, secondScore
	});
	return match;
};


import {Request} from "express";
import Bracket from "../../models/bracketModel";

export const updateBracket = async (req: Request) => {
	const braId = Number(req.body.id);
	let {final, bronze, semifinals, eightfinals, quarterfinals} = req.body;

	const bracket = await Bracket.query().findById(braId).update({
		final, bronze, semifinals, eightfinals, quarterfinals
	});
	return bracket;
};

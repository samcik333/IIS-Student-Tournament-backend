import {Request} from "express";
import Bracket from "../../models/bracketModel";

export const updateBracket = async (req: Request) => {
    console.log(req.body.bracket);
	const braId = Number(req.body.bracket.id);

	let {final, bronze, semifinals, eightfinals, quarterfinals} = req.body.bracket;

	const bracket = await Bracket.query().findById(braId).update({
		final, bronze, semifinals, eightfinals, quarterfinals
	});
	return bracket;
};

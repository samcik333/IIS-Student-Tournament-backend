import { Request } from "express";
import Bracket from "../../models/bracketModel";

export const updateBracket = async (req: Request) => {
	const {
        tournamentId,
        final,
        bronze,
        eightfinals,
        quarterfinals,
        semifinals,
	} = req.body;

	return await Bracket.query()
		.findById(req.body.id)
		.update({
            tournamentId,
            final,
            bronze,
            eightfinals,
            quarterfinals,
            semifinals,
		});
};

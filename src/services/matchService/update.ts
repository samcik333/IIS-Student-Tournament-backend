import { Request } from "express";
import Match from "../../models/matchModel";

export const updateMatch = async (req: Request) => {
	const {
        tournamentId,
		firstScore,
        secondScore,
        firstTeam,
        secondTeam,
        order   
	} = req.body;

	await Match.query()
		.findById(req.body.id)
		.update({
            tournamentId,
			firstScore,
            secondScore,
            firstTeam,
            secondTeam,
            order   
		});

    return await Match.query().findById(req.body.id);
};

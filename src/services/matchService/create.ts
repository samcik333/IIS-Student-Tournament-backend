import { Request } from "express";
import Match from "../../models/matchModel";

export const saveMatch = async (req: Request) => {
	const { tournamentId, firstTeam, secondTeam, date } = req.body;
    const match = await Match.query().insert({
        tournamentId,
        firstTeam,
        secondTeam,
        date
      });
	return match;
};

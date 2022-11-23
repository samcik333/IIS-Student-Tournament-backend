import { Request } from "express";
import Team from "../../models/teamModel";

export const updateTeamById = async (req: Request) => {
	const {
		name,
		logo,
		capacity,
		gold,
		silver,
		bronze,
		numberOfGames,
		numberOfWins,
	} = req.body;

	return await Team.query()
		.where("ownerId", req.body.id)
		.findById(req.params.id)
		.update({
			name,
			logo,
			capacity,
			gold,
			silver,
			bronze,
			numberOfGames,
			numberOfWins,
		});
};

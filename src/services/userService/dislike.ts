import {ParsedQs} from "qs";
import User from "../../models/userModel";

export const dislikeTournament = async (req: any) => {
	const userID = req.body.userID;
	const tournamentID = req.body.tournamentID;
	return await User.relatedQuery("liked")
		.for(userID)
		.where("tournamentId", tournamentID)
		.unrelate();
};

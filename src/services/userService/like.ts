import {ParsedQs} from "qs";
import User from "../../models/userModel";

export const likeTournament = async (req: any) => {
	const userID = req.body.userID;
	const tournamentID = req.body.tournamentID;
	const like = await User.relatedQuery("liked")
		.for(userID)
		.relate(tournamentID);
	return like;
};

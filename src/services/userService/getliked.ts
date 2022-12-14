import Tournament from "../../models/tournamentModel";
import User from "../../models/userModel";
import {likeTournament} from "./like";

export const getLiked = async (req: any) => {
	const userID = req.params.id;
	
	const liked = await User.relatedQuery("liked").for(userID);

	return liked;
};

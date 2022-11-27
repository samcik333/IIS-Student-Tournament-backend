import { Request } from "express";
import Team from "../../models/teamModel";
import User from "../../models/userModel";

export const deleteTeamByName = async (req: Request) => {
	const { name } = req.body;
	return Team.query()
		.where("ownerId", req.body.id)
		.where("name", name)
		.delete();
};

export const deleteMember = async (req: Request) => {
	const { username } = req.body;

	const user = await User.query().findOne("username", username);
	if (!user?.id) {
		return 0;
	}

	// Remove user from team
	await Team.relatedQuery("players")
		.for(req.params.id)
		.where("userId", user.id)
		.unrelate();

	return 1;
};

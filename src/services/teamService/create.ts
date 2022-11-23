import { Request } from "express";
import Team from "../../models/teamModel";
import User from "../../models/userModel";

export const saveTeam = async (req: Request) => {
	const { name, logo } = req.body;

	await User.relatedQuery("teamsOwner").for(req.body.id).insert({ name, logo });

	// Find id of team by name
	const team = await Team.query().findOne("name", name).select("id");
	if (!team?.id) {
		return 0;
	}

	// Connect user with team
	await User.relatedQuery("teams").for(req.body.id).relate(team.id);

	return 1;
};

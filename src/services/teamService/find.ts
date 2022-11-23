import Team from "../../models/teamModel";
import User from "../../models/userModel";

export const getTeamsById = async (id: number) => {
	return await User.relatedQuery("teams").for(id);
};

export const findTeam = async (id: string) => {
	return await Team.query().findOne("id", id);
};

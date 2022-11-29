import {Request} from "express";
import Team from "../../models/teamModel";
import User from "../../models/userModel";

export const saveTeam = async (req: Request) => {
	const {name, logo} = req.body;

	// Create team with ownerId and check if logo was provided
	if (logo == "") {
		await User.relatedQuery("teamsOwner").for(req.body.id).insert({name});
	} else {
		await User.relatedQuery("teamsOwner")
			.for(req.body.id)
			.insert({name, logo});
	}

	// Find id of team by name
	const team = await Team.query().findOne("name", name);
	if (!team?.id) {
		return 0;
	}

	// Connect user with team
	await User.relatedQuery("teams").for(req.body.id).relate(team.id);

	return 1;
};

export const saveMember = async (req: Request) => {
	const {username} = req.body;

	// Find userId by username
	const user = await User.query().findOne("username", username);
	if (!user?.id) {
		return 0;
	}
	const team = await Team.query().findById(req.params.id);
	if (team?.capacity === team?.numberOfPlayers) {
		return 0;
	}
	let numberOfPlayers = team?.numberOfPlayers;
	if (numberOfPlayers) {
		numberOfPlayers++;
	}
	await Team.query().findById(req.params.id).update({
		numberOfPlayers,
		gold: team?.gold,
		silver: team?.silver,
		bronze: team?.bronze,
		logo: team?.logo,
		numberOfGames: team?.numberOfGames,
		numberOfWins: team?.numberOfWins,
	});

	// Connect user with team
	await User.relatedQuery("teams").for(user.id).relate(req.params.id);

	return 1;
};

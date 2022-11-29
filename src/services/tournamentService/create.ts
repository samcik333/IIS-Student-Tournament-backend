import {Request} from "express";
import Bracket from "../../models/bracketModel";
import Tournament from "../../models/tournamentModel";
import Team from "../../models/teamModel";
import User from "../../models/userModel";

export const createTournament = async (req: Request) => {
	let {name, place, logo, capacity, mode, date} = req.body;
	if (!logo) {
		logo =
			"https://www.pngkey.com/png/detail/66-661551_white-blank-shield-logo-school-logo-template-free.png";
	}
	const userId = parseInt(req.body.id);
	const tour = await User.relatedQuery("tournamentsOwner")
		.for(userId)
		.insert({
			name,
			place,
			logo,
			date,
			capacity,
			mode,
		});
	console.log(tour);
	if (tour) {
		await Bracket.query().insert({tournamentId: tour.$id()});
	}
	return tour;
};

export const saveParticipant = async (req: Request) => {
	// Connect user with tournament
	const tournament = await Tournament.query().findById(req.params.id);
	if (tournament?.capacity == tournament?.numberOfPlayers) {
		await Tournament.query().findById(req.params.id).update({
			numberOfPlayers: tournament?.numberOfPlayers,
			state: "closed",
			logo: tournament?.logo,
		});
		return 0;
	}
	let numberOfPlayers = tournament?.numberOfPlayers;
	if (numberOfPlayers) {
		numberOfPlayers++;
	}

	await Tournament.query().findById(req.params.id).update({
		numberOfPlayers,
		state: tournament?.state,
		logo: tournament?.logo,
	});

	const updatedTeam = await Tournament.query().findById(req.params.id);

	if (updatedTeam?.capacity == updatedTeam?.numberOfPlayers) {
		await Tournament.query().findById(req.params.id).update({
			numberOfPlayers,
			state: "closed",
			logo: tournament?.logo,
		});
	}

	return await User.relatedQuery("tournaments")
		.for(req.body.id)
		.relate(req.params.id);
};

export const saveParticipatingTeam = async (req: Request) => {
	const tournament = await Tournament.query().findById(req.params.id);
	if (tournament?.capacity == tournament?.numberOfPlayers) {
		return 0;
	}
	let numberOfPlayers = tournament?.numberOfPlayers;
	if (numberOfPlayers) {
		numberOfPlayers++;
	}
	console.log(await Tournament.query().findById(req.params.id));
	await Tournament.query().findById(req.params.id).update({
		numberOfPlayers,
		state: tournament?.state,
		logo: tournament?.logo,
	});
	const updatedTeam = await Tournament.query().findById(req.params.id);

	if (updatedTeam?.capacity == updatedTeam?.numberOfPlayers) {
		await Tournament.query().findById(req.params.id).update({
			numberOfPlayers,
			state: "closed",
			logo: tournament?.logo,
		});
	}

	// Connect team with tournament
	return await Team.relatedQuery("tournaments")
		.for(req.body.teamId)
		.relate(req.params.id);
};

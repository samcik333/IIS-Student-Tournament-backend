import { Express, Response, Request } from "express";
import { saveMatch } from "../services/matchService/create";
import { getMacth } from "../services/matchService/getMatch";
import { getAll } from "../services/matchService/getAll";
import console from "console";


export const match = async (req: Request, res: Response) => {
    const match = await getMacth(req.params['id']);
    if (!match) {
      return res.status(409).json({ message: "Match does not exist" });
    } else {
      return res.status(200).send(match);
    }
};

export const createMatch = async (req: Request, res: Response) => {;
	const newMatch = await saveMatch(req);
	if (!newMatch) {
		return res.status(409).json({ message: "Match creation failed" });
	}
	return res.status(200).json(newMatch);
};

export const matches = async (req: Request, res: Response) => {
  const matches = await getAll(req.params.tournamentId);
  if (!matches) {
    return res.status(409).json({ message: "No matches found" });
  } else {
    console.log(matches);
    return res.status(200).send(matches);
  }
};

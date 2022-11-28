import { Express, Response, Request } from "express";
import { getMacth } from "../services/matchService/getMatch";


export const match = async (req: Request, res: Response) => {
    const user = await getMacth(req.params['id']);
    if (!user) {
      return res.status(409).json({ message: "user does not exist" });
    } else {
      return res.status(200).send(user);
    }
};

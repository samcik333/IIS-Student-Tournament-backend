import { Request, Response } from "express";
import jwt from "jsonwebtoken";

type MyToken = {
  id: string;
  username: string;
  iat: number;
  exp: number;
};

export const authorization = async (req: Request, res: Response, next: any) => {
  const token = req.cookies.access_token;
  if (!token) {
    return res.sendStatus(403);
  }
  try {
    const data = jwt.verify(token, "SlUser") as MyToken;
    req.body.id = data.id;
    return next();
  } catch {
    return res.sendStatus(403);
  }
};

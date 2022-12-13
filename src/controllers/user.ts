import { Request, Response } from "express";
import { deleteUserByUsername } from "../services/userService/delete";
import { dislikeTournament } from "../services/userService/dislike";
import {
	findUserById,
	findUserByUsername,
	getUserList,
} from "../services/userService/find";
import { getLiked } from "../services/userService/getliked";
import { likeTournament } from "../services/userService/like";
import { updateUserInfo } from "../services/userService/update";

export const getUserId = async (req: Request, res: Response) => {
	const user = await findUserById(parseInt(req.body.id));
	return res.status(200).send(user);
};

export const userById = async (req: Request, res: Response) => {
	const user = await findUserById(parseInt(req.params.id));
	return res.status(200).send(user);
};

export const updateUser = async (req: Request, res: Response) => {
	const user = await updateUserInfo(req);
	return res.status(200).send(user);
};

export const getUsers = async (req: Request, res: Response) => {
	const userList = await getUserList(req.query);
	return res.status(200).send(userList);
};

export const getUserByUsername = async (req: Request, res: Response) => {
	const user = await findUserByUsername((req.query.username || "").toString());
	return res.status(200).send(user);
};

export const deleteUser = async (req: Request, res: Response) => {
	await deleteUserByUsername(req);
	return res
		.status(200)
		.send({ message: "User " + req.body.username + " was deleted" });
};

export const like = async (req: Request, res: Response) => {
	const user = await likeTournament(req);
	return res.status(200).send({ user, message: "Tournament liked" });
}

export const dislike = async (req: Request, res: Response) => {
	const user = await dislikeTournament(req);
	return res.status(200).send({ user, message: "Tournament disliked" });
}

export const getliked = async (req: Request, res: Response) => {
	const liked = await getLiked(req);
	return res.status(200).send(liked);
}
import { deleteUserById, getUserById, getUsers } from "../db/users";
import express from "express";

export const getAllUsers = async (
  req: express.Request,
  res: express.Response
) => {
  try {
    const users = await getUsers();

    return res.status(200).json(users);
  } catch (error) {
    console.log(error);
    res.sendStatus(400);
  }
};

export const deleteUser = async (
  req: express.Request,
  res: express.Response
) => {
  try {
    const id = req.params?.id;

    if (!id) {
      return res.sendStatus(400);
    }
    await deleteUserById(id);

    return res.status(200).json({ message: "Delete successfully" });
  } catch (error) {
    console.log(error);
    res.sendStatus(400);
  }
};

export const updateUser = async (
  req: express.Request,
  res: express.Response
) => {
  try {
    const { username } = req.body;
    const { id } = req.params;

    if (!username || !id) {
      return res.sendStatus(400);
    }

    const user = await getUserById(id);

    user.username = username;

    await user.save();

    return res.status(200).json(user).end();
  } catch (error) {
    console.log(error);
    res.sendStatus(400);
  }
};

import User from "../models/user.model";

export const save = async (user: {
  email: string;
  username: string;
  password: string;
}) => await User.build({ ...user }).save();

export const itemByUsername = async (username: string) =>
  await User.findOne({ where: { username } });

export const list = async () =>
  await User.findAll({
    attributes: ["id", "email", "username", "createdAt"],
  });

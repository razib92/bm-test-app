import bcrypt from "bcrypt";

export const cryptPassword = (password: string) => {
  const saltRounds = 10;
  const salt = bcrypt.genSaltSync(saltRounds);
  return bcrypt.hashSync(password, salt);
};

export const verifyPassword = (password: string, hash: string) =>
  bcrypt.compareSync(password, hash);

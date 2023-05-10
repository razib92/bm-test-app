import { validationResult, checkSchema } from "express-validator";
import { list, save } from "../services/user.service";
import { cryptPassword } from "../utils/crypt.utils";

export const saveUser = async (req: any, res: any) => {
  await checkSchema({
    email: {
      isEmail: true,
      trim: true,
      escape: true,
      normalizeEmail: true,
      errorMessage: "Email is invalid!",
    },
    username: {
      notEmpty: true,
      trim: true,
      escape: true,
      errorMessage: "Username is invalid!",
    },
    password: {
      isLength: { options: { min: 8 } },
      trim: true,
      escape: true,
      errorMessage: "The password must be at least 8 characters!",
    },
  }).run(req);

  const errors = validationResult(req);

  if (!errors.isEmpty()) {
    return res.status(422).json({ errors: errors.array() });
  }

  try {
    await save({
      email: req.body.email,
      username: req.body.username,
      password: cryptPassword(req.body.password),
    });

    res.status(200).json({ success: true });
  } catch (error: any) {
    res.status(500).json({ success: false, error: error?.message });
  }
};

export const getUsers = async (_req: any, res: any) => {
  try {
    const data = await list();
    res.status(200).json(data);
  } catch (error: any) {
    res.status(500).json({ error: error?.message });
  }
};

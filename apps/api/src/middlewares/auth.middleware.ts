import { verifyPassword } from "../utils/crypt.utils";
import { itemByUsername } from "../services/user.service";

export const authMiddleware = async (req: any, res: any, next: any) => {
  const base64Credentials = req.headers.authorization?.split(" ")?.[1];
  if (!base64Credentials) {
    return res.status(401).json({ error: "Authorization not found!" });
  }

  const credentials = Buffer.from(base64Credentials, "base64").toString(
    "ascii"
  );
  const [username, password] = credentials.split(":");

  const user = await itemByUsername(username);
  if (!user) {
    return res.status(401).json({ error: "User not found!" });
  }

  if (verifyPassword(password, user?.getDataValue("password"))) {
    next();
  } else {
    return res.status(401).json({ error: "Unauthorized!" });
  }
};

import dotenv from "dotenv";
dotenv.config();

import express from "express";
import cors from "cors";
import userRoute from "./routes/user.route";
import { connect } from "./config/db";
import { authMiddleware } from "./middlewares/auth.middleware";

const app = express();

const port = process.env.PORT;

app.use(express.json());
app.use(
  express.urlencoded({
    extended: true,
  })
);

app.use(cors({ origin: process.env.APP_HOST, optionsSuccessStatus: 200 }));

app.use(authMiddleware);
app.use("/api", userRoute);

app.listen(port, async () => {
  console.log(`⚡️[server]: Server is running at http://localhost:${port}`);
  await connect();
});

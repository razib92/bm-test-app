import express from "express";
import { getUsers, saveUser } from "../controllers/user.controller";

const router = express.Router();

router.post("/user", saveUser);

router.get("/users", getUsers);

export default router;

import express from "express";
const router = express.Router();

import { loginUser, registerUser } from "../Controller/Authclt.js";

//Auth
router.post("/register", registerUser);
router.get("/login", loginUser);

export default router;

import express from "express";
<<<<<<< HEAD
=======
import bcrypt from "bcryptjs"; // Import bcryptjs
import User from "../Models/User.js";
import jwt from "jsonwebtoken";
>>>>>>> 193be970fd39efc2631f8b4c9f6bca5182e36c8f
const router = express.Router();

import { loginUser, registerUser } from "../Controller/Authclt.js";

//Auth
router.post("/register", registerUser);
router.get("/login", loginUser);

export default router;

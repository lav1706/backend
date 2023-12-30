import express from "express";
import User from "../Models/User.js";
const router = express.Router();

// REGISTER
router.post("/register", async (req, res) => {
  const newUser = new User({
    username: req.body.username,
    email: req.body.email,
    password: req.body.password,
  });

  try {
    const savedUser = await newUser.save();
    res.status(201).json(savedUser);
  } catch (err) {
    console.error(err);
    res.status(500).json(err);
  }
});
router.get("/login", async (req, res) => {
  try {
    const user = await User.findOne({ username: req.body.username });
    !user && res.status(401).json("wrong credentials!");
  } catch (error) {
    res.status(500).json(error);
    console.log(error);
  }
});

export default router;

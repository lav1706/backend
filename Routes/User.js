import express from "express";
import bcrypt from "bcryptjs";
import User from "../Models/User";
import { verifyTokenAndAuthorization } from "../Routes/verifyToken";

const router = express.Router();
const salt = bcrypt.genSaltSync(10);

// UPDATE
router.put("/:id", verifyTokenAndAuthorization, async (req, res) => {
  const { password } = req.body;

  if (!password) {
    return res.status(400).json({ message: "Password is required" });
  }

  const hashPassword = bcrypt.hashSync(password, salt);

  try {
    const updatedUser = await User.findByIdAndUpdate(
      req.params.id,
      { $set: { ...req.body, password: hashPassword } },
      { new: true }
    );
    if (!updatedUser) {
      return res.status(404).json({ message: "User not found" });
    }
    res.status(200).json(updatedUser);
  } catch (err) {
    res.status(500).json(err);
  }
});

// ... (other routes)

module.exports = router;

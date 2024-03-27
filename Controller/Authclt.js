import User from "../Models/UserModel/User.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
const salt = bcrypt.genSaltSync(10);

export const registerUser = async (req, res) => {
  const { username, email, password } = req.body;

  try {
    const userDoc = await User.create({
      username,
      email,
      password: bcrypt.hashSync(password, salt),
    });

    res.json(userDoc);
  } catch (error) {
    res.status(400).json(error);
  }
};
export const loginUser = async (req, res) => {
  const { username, password } = req.body;

  try {
    const user = await User.findOne({ username });

    if (!user) {
      return res.status(401).json({ error: "Wrong credentials!" });
    }
    // Compare the hashed password
    const isPasswordValid = await bcrypt.compareSync(password, user.password);

    if (!isPasswordValid) {
      return res.status(401).json({ error: "Wrong credentials!" });
    }
    const accessToken = jwt.sign(
      {
        id: user._id,
        isAdmin: user.isAdmin,
      },
      process.env.JWT_SEC,
      { expiresIn: "3d" }
    );

    res.status(200).json({ message: "Login successful!", accessToken });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

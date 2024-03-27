import express from "express";
import bcrypt from "bcryptjs";
import {
  verifyTokenAndAuthorization,
  verifyTokenAndAdmin,
} from "../Controller/verifyToken.js";
import {
  deleteUser,
  getAllUser,
  getUser,
  updateUser,
} from "../Controller/UserClt.js";

const router = express.Router();

// UPDATE
router.put("/update/:id", verifyTokenAndAuthorization, updateUser);
//(delete)
router.delete("/delete/:id", verifyTokenAndAuthorization, deleteUser);
//GET USER
router.get("/find/:id", verifyTokenAndAdmin, getUser);

//GET ALL USER
router.get("/find", verifyTokenAndAdmin, getAllUser);

//GET USER STATS

// router.get("/stats", verifyTokenAndAdmin, async (req, res) => {
//   const date = new Date();
//   const lastYear = new Date(date.setFullYear(date.getFullYear() - 1));

//   try {
//     const data = await User.aggregate([
//       { $match: { createdAt: { $gte: lastYear } } },
//       {
//         $project: {
//           month: { $month: "$createdAt" },
//         },
//       },
//       {
//         $group: {
//           _id: "$month",
//           total: { $sum: 1 },
//         },
//       },
//     ]);
//     res.status(200).json(data);
//   } catch (err) {
//     res.status(500).json(err);
//   }
// });

export default router;

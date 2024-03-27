import express from "express";

import {
  verifyTokenAndAdmin,
  verifyTokenAndAuthorization,
  verifyToken,
} from "../Controller/verifyToken.js";
import {
  createOrder,
  deleteOrder,
  getAllUserOrder,
  getIncome,
  getOrder,
  updateOrder,
} from "../Controller/OrderClt.js";

const router = express.Router();

//CREATE
router.post("/", verifyToken, createOrder);

// UPDATE
router.put("/:id", verifyTokenAndAdmin, updateOrder);

// (delete)
router.delete("/:id", verifyTokenAndAdmin, deleteOrder);

//GET USER ORDERS
router.get("/find/:userId", verifyTokenAndAuthorization, getAllUserOrder);

// //GET ALL

router.get("/", verifyTokenAndAdmin, getOrder);

// GET MONTHLY INCOME

router.get("/income", verifyTokenAndAdmin, getIncome);

export default router;

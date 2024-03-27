import express from "express";
import { verifyTokenAndAdmin } from "../Controller/verifyToken.js";
import {
  createProduct,
  deleteProduct,
  getAllProduct,
  getProduct,
  updateProduct,
} from "../Controller/ProductClt.js";

const router = express.Router();

//CREATE
router.post("/create", verifyTokenAndAdmin, createProduct);

// UPDATE
router.put("/:id", verifyTokenAndAdmin, updateProduct);

// Delete
router.delete("/:id", verifyTokenAndAdmin, deleteProduct);

//GET PRODUCT
router.get("/find/:id", getProduct);

//GET ALL PRODUCTS
router.get("/", getAllProduct);

export default router;

import express from "express";
import { verifyTokenAndAuthorization } from "../Controller/verifyToken.js";
import {
  checkout,
  paymentVerification,
} from "../Controller/paymentController.js";

const router = express.Router();

router.post("/checkout", checkout);

router.post("/verify", paymentVerification);

export default router;

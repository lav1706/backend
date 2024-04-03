import express from "express";
import dotenv from "dotenv";
import dbconnect from "./Config/DB.js";
import userRouter from "./Routes/User.js";

import productrouter from "./Routes/product.js";
import orderrouter from "./Routes/order.js";
import payrouter from "./Routes/payment.js";
import cookieParser from "cookie-parser";
import Razorpay from "razorpay";
import cors from "cors";
const app = express();

dotenv.config();

//Database;
dbconnect();

//Middleware
app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*"); // update to match the domain you will make the request from
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(
  cors({
    origin: "http://localhost:5173", // your frontend application's domain
  })
);

//ROUTER

app.use("/api/v1/user", userRouter);
app.use("/api/v1/product", productrouter);
app.use("/api/v1/order", orderrouter);
app.use("/api/v1/", payrouter);

app.listen(process.env.PORT || 3000, () => {
  console.log(`Backend server is running on ${process.env.PORT}!`);
});

export const instance = new Razorpay({
  key_id: process.env.YOUR_KEY_ID,
  key_secret: process.env.YOUR_KEY_SECRET,
});

app.get("/api/v1/getkey", (req, res) => {
  return res.status(200).json({ key: process.env.YOUR_KEY_ID });
});

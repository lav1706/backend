import express from "express";
import dotenv from "dotenv";
import dbconnect from "./Config/DB.js";
import userRouter from "./Routes/User.js";
import authRouter from "./Routes/auth.js";
import productrouter from "./Routes/product.js";
import orderrouter from "./Routes/order.js";
import cookieParser from "cookie-parser";
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

//ROUTER
app.use("/api/v1/", authRouter);
app.use("/api/v1/user", userRouter);
app.use("/api/v1/product", productrouter);
app.use("/api/v1/order", orderrouter);

app.listen(process.env.PORT || 3000, () => {
  console.log(`Backend server is running on ${process.env.PORT}!`);
});

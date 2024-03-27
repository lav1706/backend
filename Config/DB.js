import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();

const dbconnect = () => {
  mongoose
    .connect(process.env.mongoDBURL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then(() => console.log(`DB connected`))
    .catch((err) => {
      console.log(err);
      process.exit(1);
    });
};
export default dbconnect;

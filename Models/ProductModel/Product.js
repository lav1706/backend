import mongoose from "mongoose";
const ProductSchema = new mongoose.Schema(
  {
    title: { type: String, required: true, unique: true },
    desc: {
      type: String,
      required: true,
    },
    img: {
      type: String,
      required: true,
    },
    categories: {
      type: String,
    },
    size: {
      type: Array,
    },
    color: {
      type: Array,
    },
    price: {
      type: Number,
      required: true,
    },
    Instock: {
      type: Boolean,
      default: true,
    },
    countInstock: {
      type: Number,
      require: true,
      default: 0,
    },
  },
  { timestamps: true }
);
export default mongoose.model("Product", ProductSchema);

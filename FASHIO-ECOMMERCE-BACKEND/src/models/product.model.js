const mongoose = require("mongoose");

const ProductsSchema = new mongoose.Schema(
  {
    id: { type: Number, required: true },
    image: { type: String, required: true },
    title: { type: String, required: true },
    gender: { type: String, required: true },
    price: { type: Number, required: true },
    color: { type: String, required: true },
  },
  {
    versionKey: false,
    timestamps: true,
  }
);

module.exports = mongoose.model("products", ProductsSchema);

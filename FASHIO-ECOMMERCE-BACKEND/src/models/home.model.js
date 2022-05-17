const mongoose = require("mongoose");

const DealBrandSchema = new mongoose.Schema(
  {
    image: { type: String, required: true },
  },
  {
    versionKey: false,
    timestamps: true,
  }
);

module.exports = mongoose.model("brands", DealBrandSchema);

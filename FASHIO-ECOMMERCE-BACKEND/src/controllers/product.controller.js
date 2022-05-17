const express = require("express");
const Product = require("../models/product.model");
const router = express.Router();

router.post("", async (req, res) => {
  try {
    const product = await Product.create(req.body);
    // console.log(req.body);
    return res.status(201).send(product);
  } catch (e) {
    return res.status(500).json({ message: e.message, status: "Failed" });
  }
});

router.get("", async (req, res) => {
  try {
    const products = await Product.find().lean().exec();
    return res.send(products);
  } catch (err) {
    return res.status(500).send(err.message);
  }
});

router.get("/:id", async (req, res) => {
  try {
    const product = await Product.findById(req.params.id);
    return res.status(200).send(product);
  } catch (err) {
    return res.status(500).json({ status: "Failed", message: err.message });
  }
});

module.exports = router;

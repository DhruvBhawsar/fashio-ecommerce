const express = require("express");
const BrandDeals = require("../models/home.model");
const router = express.Router();

router.post("", async (req, res) => {
  try {
    const brand = await BrandDeals.create(req.body);
    return res.status(201).send(brand);
  } catch (e) {
    return res.status(500).json({ message: e.message });
  }
});

router.get("", async (req, res) => {
  try {
    const brands = await BrandDeals.find().lean().exec();
    return res.send(brands);
  } catch (err) {
    return res.status(500).send(err.message);
  }
});

module.exports = router;

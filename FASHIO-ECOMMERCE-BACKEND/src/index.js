const express = require("express");
const connect = require("./configs/db");
const port = process.env.PORT || 8080;
const productControler = require("./controllers/product.controller");
const brandControler = require("./controllers/home.controller");

var cors = require("cors");
const app = express();
app.use(cors());
app.use(express.json());

app.use("/products", productControler);
app.use("/brands", brandControler);

const { register, login } = require("./controllers/auth.controller");
app.post("/register", register);
app.post("/login", login);

app.listen(port, async () => {
  try {
    await connect();
    console.log(`listening in ${port}`);
  } catch (err) {
    console.log(err.message);
  }
});

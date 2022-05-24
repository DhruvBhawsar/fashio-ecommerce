import "./productDetails.css";
// import * as React from "react";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import Button from "@mui/material/Button";

import React, { useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  selectedProducts,
  removeSelectedProducts,
  addToCart,
} from "../Redux/actions/productActions";

export const ProductDetails = () => {
  const [age, setAge] = React.useState("");
  const handleChange = (event) => {
    setAge(event.target.value);
  };

  const { productId } = useParams();
  const product = useSelector((state) => state.product);
  console.log(productId);

  const dispatch = useDispatch();
  useEffect(() => {
    if (productId && productId !== "") {
      fetchProductDetail();
      return () => {
        dispatch(removeSelectedProducts());
      };
    }
  }, [productId]);

  const handleAddtoCart = () => {
    dispatch(addToCart(product.id));
  };

  const fetchProductDetail = async () => {
    await axios
      .get(`https://fashio-ecommerce.herokuapp.com/products/${productId}`)
      .then((res) => {
        dispatch(selectedProducts(res.data));
        console.log(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <div>
      <div id="product_container">
        <div id="product_img_container">
          <img id="product_image" src={product.image} alt="" />
        </div>
        <div id="product_des_container">
          <h5 id="title">{product.title}</h5>
          <h4 id="price"> ₹ {product.price} </h4>
          <p id="description">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit.
            Blanditiis, eum molestiae explicabo eos quasi minus, beatae sint
            laudantium accusamus cupiditate cum quod corrupti nihil. Impedit
            exercitationem eum cumque labore? Repudiandae.
          </p>
          <div id="Sizediv">
            <FormControl sx={{ m: 1, minWidth: 120 }} size="small">
              <InputLabel id="demo-select-small">Size</InputLabel>
              <Select
                labelId="demo-select-small"
                id="demo-select-small"
                value={age}
                label="Size"
                onChange={handleChange}
              >
                <MenuItem value="">
                  <em>None</em>
                </MenuItem>
                <MenuItem value={"XS"}>XS</MenuItem>
                <MenuItem value={"S"}>S</MenuItem>
                <MenuItem value={"M"}>M</MenuItem>
                <MenuItem value={"L"}>L</MenuItem>
                <MenuItem value={"XL"}>XL</MenuItem>
              </Select>
            </FormControl>
          </div>
          <div id="add_btn_div">
            <Button onClick={handleAddtoCart} id="add-btn">
              ADD TO CART
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

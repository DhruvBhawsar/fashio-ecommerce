import "./cart.css";
import * as React from "react";
import Button from "@mui/material/Button";
import {
  AddCircleOutlineOutlined,
  Delete,
  RemoveCircleOutlineOutlined,
} from "@mui/icons-material";
import { useDispatch, useSelector } from "react-redux";
import { useState, useEffect } from "react";
import { imageListItemClasses } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import { removeFromCart } from "../Redux/actions/productActions";
import { Link } from "react-router-dom";

export const Cart = () => {
  const cart = useSelector((state) => state.allProducts.cart);
  console.log(cart);

  const [totalprice, setTotalPrice] = useState(0);
  const [totalitem, setTotalItem] = useState(0);
  const [login_status, setLogin_status] = useState("");

  useEffect(() => {
    let items = 0;
    let price = 0;

    cart.map((item) => {
      items += item.qty;
      price += item.qty * item.price;
    });
    console.log(price, items);
    setTotalPrice(price);
    setTotalItem(items);
    localStorage.setItem("totalPrice", JSON.stringify(totalprice));
    setLogin_status(JSON.parse(localStorage.getItem("login_token")));
  }, [totalitem, cart]);

  const dispatch = useDispatch();

  return (
    <div>
      <div id="your_bag">
        <h2>Your Bag</h2>
      </div>
      <div id="top_div_btn">
        <div>
          <Link to="/product">
            <Button id="btn_style">CONTINUE SHOPPING</Button>
          </Link>
        </div>
        <div>
          {login_status ? (
            <div>
              <Link to="/payment">
                <Button id="btn_style">CHECKOUT NOW</Button>
              </Link>
            </div>
          ) : (
            <div>
              <Link to="/login">
                <Button id="btn_style">CHECKOUT NOW</Button>
              </Link>
            </div>
          )}
        </div>
      </div>
      <div id="bottom_div">
        <div id="Info">
          {cart.map((e) => (
            <div id="product" key={e.id}>
              <div id="product_detail">
                <img id="product_img" src={e.image} alt="" />
                <div id="details">
                  <span>
                    <b>Product:</b> {e.title}
                  </span>
                  <span>
                    <b>ID:</b>{" "}
                    {Math.floor(Math.random() * (12545562225 - 155562360)) +
                      155562360}
                  </span>
                  <div id="colordiv">
                    <div style={{ backgroundColor: `${e.color}` }}></div>
                  </div>
                  <div>
                    <span>
                      {" "}
                      <b> Size: </b>X
                    </span>
                  </div>
                </div>
              </div>
              <div id="price_detail">
                <div id="amountContainer">
                  <RemoveCircleOutlineOutlined />
                  <b>{e.qty}</b>

                  <AddCircleOutlineOutlined />
                </div>
                <div id="product_price">₹ {e.price}/-</div>
              </div>
              <div id="delete">
                <Delete
                  onClick={() => {
                    dispatch(removeFromCart(e.id));
                  }}
                  id="delete_icon"
                />
              </div>
            </div>
          ))}
          {/*  */}
          <hr id="hrline" />
        </div>
        <div id="summary">
          <h4 id="summary_title">ORDER SUMMARY</h4>
          <div id="summary_item">
            <div>
              <p>
                <b> Item:</b>
              </p>
              <p>{totalitem}</p>
            </div>
            <div>
              <p>
                <b> Total Price: </b>
              </p>
              <p>{totalprice}</p>
            </div>
          </div>
          <div id="sum_check_div">
            <button id="summary_checkout">CHECK OUT</button>
          </div>
        </div>
      </div>
    </div>
  );
};

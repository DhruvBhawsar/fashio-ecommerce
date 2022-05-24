import "./Products.css";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import { setProducts } from "../Redux/actions/productActions";
import { Link } from "react-router-dom";

export const Product = () => {
  let products = useSelector((state) => state.allProducts.products);
  const dispatch = useDispatch();

  const [filters, setFilters] = useState("");
  const handleGenderFilter = (e) => {
    let { value } = e.target;
    setFilters(value);
  };

  const handleSort = (e) => {
    console.log(e.target.value);

    axios.get("https://fashio-ecommerce.herokuapp.com/products").then((res) => {
      if (e.target.value == "desc") {
        products = res.data.sort((a, b) => {
          return b.price - a.price;
        });
        dispatch(setProducts(products));
      } else if (e.target.value == "asc") {
        products = res.data.sort((a, b) => {
          return a.price - b.price;
        });
        dispatch(setProducts(products));
      } else {
        dispatch(setProducts(res.data));
      }
    });
  };

  const fetchProducts = async () => {
    await axios
      .get("https://fashio-ecommerce.herokuapp.com/products")
      .then((res) => {
        dispatch(setProducts(res.data));
      })
      .catch((err) => {
        console.log(err);
      });
  };
  useEffect(() => {
    fetchProducts();
  }, []);
  // console.log(products);
  return (
    <div>
      <div id="filter_container">
        <div>
          <h5>Filter Products:</h5>
          <select name="" onChange={handleGenderFilter} id="">
            <option value="">Gender</option>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
          </select>
        </div>
        <div>
          <h5>Sort Products:</h5>
          <select onChange={handleSort} name="" id="">
            <option value="">Sort</option>
            <option value="asc">Price: L to H</option>
            <option value="desc">Price: H to L</option>
          </select>
        </div>
      </div>
      <div id="main_block">
        {/* <div id="left126"></div> */}

        <div id="right126">
          {products ? (
            products
              .filter((element) => {
                if (filters) {
                  return element.gender === filters;
                } else {
                  return products;
                }
              })
              .map((e) => (
                <Link to={`/product/${e._id}`}>
                  <div id="block_divs" key={e._id}>
                    <div id="img_block">
                      <img id="img126" src={e.image} alt="" />
                    </div>
                    <div id="productInfo">
                      <p>
                        <b id="producttitle"> {e.title}</b>
                      </p>
                      ₹<b>{e.price}/- </b>
                      <p id="sizearray">
                        <span>XXS </span>
                        <span>XS </span>
                        <span>S </span>
                        <span>L </span>
                        <span>M </span>
                      </p>
                    </div>
                  </div>
                </Link>
              ))
          ) : (
            <div></div>
          )}
        </div>
      </div>
    </div>
  );
};

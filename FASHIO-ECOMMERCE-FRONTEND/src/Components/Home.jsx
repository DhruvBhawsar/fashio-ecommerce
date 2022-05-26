import axios from "axios";
import { useEffect, useState } from "react";
import { Link, Navigate } from "react-router-dom";
import "./home.css";
import { useNavigate } from "react-router-dom";

export const Home = () => {
  const navigate = useNavigate();

  useEffect(() => {
    getCategories();
    getBranddeals();
    console.log(categories);
  }, []);

  const [categories, setCategories] = useState([]);
  const [brandDeals, setBrandDeals] = useState([]);

  const getBranddeals = () => {
    axios
      .get("https://fashio-json-home.herokuapp.com/deal_brand")
      .then((res) => {
        setBrandDeals(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const getCategories = () => {
    axios
      .get("https://fashio-json-home.herokuapp.com/categories")
      .then((res) => {
        console.log(res);
        setCategories(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <div>
      <div id="slider">
        <div
          id="carouselExampleFade"
          className="carousel slide carousel-fade"
          data-bs-ride="carousel"
        >
          {/* <Link to="/product"> */}
          <div className="carousel-inner">
            <div className="carousel-item active">
              {/* <img src="..." class="d-block w-100" alt="..."> */}
              <img
                onClick={() => {
                  navigate("/product");
                }}
                className="d-block w-100"
                src="https://images-static.nykaa.com/uploads/tr:w-2698,/5db40311-9c67-4213-bc67-1cebff8a3642.jpg"
                alt=""
              />
            </div>
            <div className="carousel-item">
              {/* <img src="..." class="d-block w-100" alt="..."> */}
              <img
                onClick={() => {
                  navigate("/product");
                }}
                className="d-block w-100"
                src="https://images-static.nykaa.com/uploads/tr:w-2698,/a812f4a7-41e4-4781-91b1-27d79908edbf.jpg"
                alt=""
              />
            </div>
            <div className="carousel-item">
              {/* <img src="..." class="d-block w-100" alt="..."> */}
              <img
                onClick={() => {
                  navigate("/product");
                }}
                className="d-block w-100"
                src="https://images-static.nykaa.com/uploads/tr:w-2698,/f7d854f0-4a9e-4de0-b106-0cc66e82ca0d.jpg"
                alt=""
              />
            </div>
          </div>
          {/* </Link> */}
          <button
            className="carousel-control-prev"
            type="button"
            data-bs-target="#carouselExampleFade"
            data-bs-slide="prev"
          >
            <span
              className="carousel-control-prev-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button
            className="carousel-control-next"
            type="button"
            data-bs-target="#carouselExampleFade"
            data-bs-slide="next"
          >
            <span
              className="carousel-control-next-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
      </div>

      <div id="categories_div">
        {categories.map((e) => (
          <div id="category_div" key={e.id}>
            <img id="category_img" src={e.images} alt="" />
            <div id="category_info">
              <h3>{e.title}</h3>
              {/* <button> */}
              <Link to="/product">
                <button id="shop_now_btn">SHOP NOW</button>
              </Link>
              {/* </button> */}
            </div>
          </div>
        ))}
      </div>

      <div id="Deal_brand">
        <div>
          <h1>Deals On Top Brand</h1>
        </div>
        <div id="brand_div">
          {brandDeals.map((e) => (
            <div id="brand" key={e.id}>
              <Link to="/product">
                <img src={e.images} alt="" />
              </Link>
            </div>
          ))}
        </div>
      </div>
      <div id="trending">
        <h1>What's Trending In</h1>
        <div id="trend_img_div">
          <div
            id="carouselExampleControls"
            className="carousel slide"
            data-bs-ride="carousel"
          >
            <div className="carousel-inner">
              <div className="carousel-item active">
                {/* <img src="https://sslimages.shoppersstop.com/sys-master/root/h59/h44/27545312231454/Wedding-Banner-web--size-600_new-revised-hp-page-2022-05-07.jpg" className="d-block w-100" alt="..."> */}
                <img
                  className="d-block w-100"
                  src="https://sslimages.shoppersstop.com/sys-master/root/h59/h44/27545312231454/Wedding-Banner-web--size-600_new-revised-hp-page-2022-05-07.jpg"
                  alt=""
                />
              </div>
              <div className="carousel-item">
                {/* <img src="..." className="d-block w-100" alt="..."> */}
                <img
                  className="d-block w-100"
                  src="https://sslimages.shoppersstop.com/sys-master/root/hac/h58/27557262557214/Vacation-Ready-Banner-Web.gif"
                  alt=""
                />
              </div>
              <div className="carousel-item">
                {/* <img src="..." class="d-block w-100" alt="..."> */}
                <img
                  className="d-block w-100"
                  src="https://sslimages.shoppersstop.com/sys-master/root/h21/h73/27553234812958/lingerie-fest2_Web--hp-pgage-background-black-20220905may.jpg"
                  alt=""
                />
              </div>
            </div>
            <button
              className="carousel-control-prev"
              type="button"
              data-bs-target="#carouselExampleControls"
              data-bs-slide="prev"
            >
              <span
                className="carousel-control-prev-icon"
                aria-hidden="true"
              ></span>
              <span className="visually-hidden">Previous</span>
            </button>
            <button
              className="carousel-control-next"
              type="button"
              data-bs-target="#carouselExampleControls"
              data-bs-slide="next"
            >
              <span
                className="carousel-control-next-icon"
                aria-hidden="true"
              ></span>
              <span className="visually-hidden">Next</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

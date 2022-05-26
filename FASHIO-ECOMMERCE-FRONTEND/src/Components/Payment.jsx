import * as React from "react";
import "./Payment.css";
import Button from "@mui/material/Button";
import { useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

export const Payment = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    address: "",
    city: "",
    zipcode: "",
    state: "",
  });

  const handleChange = (e) => {
    // console.log(e.target);
    const { id, value } = e.target;
    setFormData({ ...formData, [id]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    // axios.post("http://localhost:3001/users", formData).then(() => {
    //   alert("user created succesfully");
    //   setFormData({
    //     username: "",
    //     age: "",
    //     email: "",
    //   });
    // });
    alert("Address added successfully!");
    localStorage.setItem("payment details", JSON.stringify(formData));
  };

  const totalPrice = JSON.parse(localStorage.getItem("totalPrice"));
  return (
    <div>
      <div id="payment_heading">
        <h1>Payament</h1>
      </div>
      <div id="main126">
        <div id="left">
          <h3>BILLING ADDRESS</h3>
          <form onSubmit={handleSubmit} id="billingform">
            Full Name <br />
            <input
              onChange={handleChange}
              value={formData.name}
              id="name"
              required
              type="text"
              placeholder="Enter Name"
            />
            <br />
            Email <br />
            <input
              onChange={handleChange}
              required
              value={formData.email}
              id="email"
              type="text"
              placeholder="Enter Email"
            />{" "}
            <br />
            Address <br />
            <input
              onChange={handleChange}
              id="address"
              value={formData.address}
              required
              type="text"
              placeholder="Enter Address"
            />{" "}
            <br />
            City <br />
            <input
              onChange={handleChange}
              id="city"
              value={formData.city}
              required
              type="text"
              placeholder="Enter City"
            />
            <br />
            {/* Zip code <br />
            <input
              onChange={handleChange}
              required
              type="number"
              placeholder="Zip code"
            /> */}
            <div id="zip">
              <label htmlFor="">
                State <br />
                <select
                  onChange={handleChange}
                  id="state"
                  value={formData.state}
                >
                  <option value="Rajasthan">Rajasthan</option>
                  <option value="Maharastra">Maharastra</option>
                  <option value="Gujrat">Gujrat</option>
                  <option value="Uttar Pradesh">Uttar Pradesh</option>
                  <option value="HARYANA">Haryana</option>
                </select>
              </label>
              <label htmlFor="">
                Zip Code <br />
                <input
                  onChange={handleChange}
                  id="zipcode"
                  value={formData.zipcode}
                  required
                  type="number"
                  placeholder="Zip Code"
                />
              </label>
            </div>
            <input id="confirmbtn" type="submit" value="CONFIRM" />
          </form>
        </div>

        <div id="right">
          <h3>PAYMENT</h3>
          <form
            onSubmit={() => {
              navigate("/orderpage");
            }}
            id="billingform"
          >
            ACCEPTED CARD <br />
            <img src="https://i.ibb.co/Qfvn4z6/payment.png" alt="" />
            {/* <img
              id="card_icn"
              src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAARkAAAC0CAMAAACXO6ihAAAAdVBMVEX///8AAACmpqawsLDFxcXh4eH7+/saGhoJCQlTU1PW1tZeXl7IyMgNDQ34+Pja2tpERETPz8+urq7x8fE8PDwzMzOenp6YmJhWVlYTExO9vb0pKSlJSUliYmLm5uZ7e3uFhYWOjo4nJydwcHCZmZmBgYFoaGgHomQGAAAFGklEQVR4nO2d6XaqMBRGI4LW1kLROlGHcju8/yNebZUxH4MJhcC3f+FaEZMtHgLnYIRIcPTH1nAZ256Q4p9GZGvnvby23amOsJqnxfB4iTklvLgvbfemU7y6kZlV233pGKvJVcy27Z50jtmvmHXb/egg1kXMsu1edJJLqHlPvJ5txsPFekqYCM9m4ld7Rz4HHAzHWSxDCDvafmq7Yx0gPhn5Irxt7truVRdwH246NiI6gKy2e9UJohP1t5jeNpdtd6oTHG86ViI6fNzytw0ANw4ut63ppPxtA8B9vvp4oJk0NIOgGQTNIGgGQTMImkHQDIJmEDSDoBkEzSBoBkEzCJpByMy03aduMJGY8RziOF7eDElDMwiaQdAMgmYQNIOgGQTNIGgGQTMImkHQDIJmEDSDoBkEzSBoBkEzCJpB0AyCZhA0g6AZBM0gaAZBMwiaQdAMgmYQNIOgGQTNIGgGQTMImkHQDIJmEDSDoBkEzSBoBkEzCJpB0AwiNrOzyYVdzgyf4vllmjfDJ78uTGgGQDMImkHQDIJmEDSDoBkEzSBoBkEzCJpB0AyCZhA0g6AZBM0gaAZBMwiaQdAMgmYQNIPokxnXmwfW2rK9oqUsHH+xthZBYZsfemPmuEgsn/MWPkrbWPu4zesGLDp5pSdm7ISW68DH2Tb+U7bNalGwy16YkS+hOQ2Sbbx9eZsUfTDzLhvzhYNb3maLAo75ZpYFa64+e+VtRnP5fuuacR41omM5pMeCMZ/5+bU4xW1yEekOM8Ez2PmdHJQXRPLKPiJIrMSEkKqpZWasIEHOP0UxFRaK9NzyrzO/LnI9My7YrwobNTMV1nXeVVmY9ahmZn7f4AtZKYn50tWNFzUzga5+JFERUxJ965Cf89UxUxrt7mCrYkbnkte5QdeKwA0svg0mE5XQ+uv+VDKz1L789lpBjMhdBymhZEaIxWGmj+1X8dVuCZqXds6euQ2+OljoNfOR2b3BZr71mnnO7N5gM3rF5GZ75prRvoJ8JtCYa8bXbSazRLS5ZmwwwLt5T++fZiIyJyeaoZlSvtL7N9eM9gicuVVkrhntZ+1MgsVcM9pnepmLOIPNaL46yF5sG2zG0ivmO7P7mmasw1N9PnCKVAXNgSbbyXp3rt7u/NTXRg7DKkmB6mT3XsuMNGleiVkTZrTe7QxVzKjcIXeaUKPzvnQuk/xXWZVGQo3GZEb+hnQdMyqzzmaCMKz9qIskIfhX2duGZgJVkhlVoqPkx14rAt9/T1peiKFOaZnDaDSv8IXKuvcnVSI7Wa2BHkoTuIvS8pnc3bx7zJw/ZV6fRs5LN0qisFW1TQ6Drw6uHP8VDPoa+AuTq+DkYL4ZMTmhMe+P5W1eJKUzv28x38x5OiG/aklVfvjywwZXBPfCjBDj3LinVnYYdn7KvC6oE+yJmXOU3STlfPmyNk6YOLim79I2Eb0xc2bpB9YmDAO/oJp24gefYbheFLW5tuyRGb3QDIJmEDSDoBkEzSBoBkEzCJpB0AyCZhA0g6AZBM0gaAaRMPNwU6P8QGwviNJUu+i/2vPJ70ESJfne4nIUef5laEQlXQcR3jYf+HNKJvE3iUIdpcc+e0Jc0OUny0j3jSZcDcBJFFCcX4bxq9HsczxcwmRm6lJarr0quxf8BF3NFba94Fpao/cJ6D4Q1U9X+G+OQbGPYrLbwB8cGExq+vLRdm86RKZ6GhSaDI9ZflJn6y3oN5OT9F8chfACa8CM/dTh8h/WBp8sZ5eTVwAAAABJRU5ErkJggg=="
              alt=""
            />{" "} */}
            <br />
            Credit Card Number <br />
            <input
              required
              type="number"
              pattern="/^-?\d+\.?\d*$/"
              onKeyPress={"if(input.value.length==4) return false"}
              // min={12}
              // max={12}
              placeholder="Credit Card Number"
            />
            <br />
            Exp Month <br />
            <input required type="text" placeholder="Enter Exp Month : MM/YY" />
            <br />
            <div id="zip">
              <label htmlFor="">
                Exp Year <br />
                <select required name="" id="">
                  <option value="">Choose year</option>
                  <option value="">2022</option>
                  <option value="">2023</option>
                  <option value="">2024</option>
                  <option value="">2025 </option>
                  <option value="">2026</option>
                </select>
              </label>
              <label htmlFor="">
                CVV <br />
                <input required type="password" placeholder="CVV Number" />
              </label>
            </div>
            {/* <Link to="/orderpage"> */}
            <Button type="submit" id="pay_btn">
              PAY NOW ₹{totalPrice}/-
            </Button>
            {/* </Link> */}
          </form>
        </div>
      </div>
    </div>
  );
};

import "./footer.css";
import { Link } from "react-router-dom";

import {
  FacebookOutlined,
  Instagram,
  LocationOn,
  Mail,
  MailOutline,
  Phone,
  Twitter,
} from "@mui/icons-material";

export const Footer = () => {
  return (
    <div id="footer_container">
      <div id="leftfooter">
        <h3 id="flogo">FASHIO</h3>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Optio iste,
          repellat ducimus consequatur ipsa beatae laudantium odit praesentium
          molestiae tempore eum ea cum perspiciatis minima velit harum adipisci
          rem quaerat.
        </p>
        <div id="social_icon_container">
          <div>
            <FacebookOutlined />
          </div>
          <div>
            <Instagram />
          </div>
          <div>
            <Twitter />
          </div>
          <div>
            <Mail />
          </div>
        </div>
      </div>
      <div id="center">
        <h5 id="link_title">Useful links</h5>
        <ul id="list">
          <li>Home</li>
          <li>Cart</li>
          <li>Man Fashion</li>
          <li>Women Fashion</li>
          <li>Accessories</li>
          <li>My Account</li>
          <li>Order Tracking</li>
        </ul>
      </div>
      <div id="rightfooter">
        <h5 id="contacttitle">Contact</h5>
        <div>
          <LocationOn style={{ marginRight: "10px" }} /> 622 Suraj Nagar, South
          tobinchester 99833
        </div>
        <div>
          <Phone style={{ marginRight: "10px" }} /> +91 9001791823
        </div>
        <div>
          <p>
            <MailOutline style={{ marginRight: "10px" }} />
            contact@logo.com
          </p>
        </div>
        <div>
          Developed By{" "}
          <b>
            <a href="https://www.linkedin.com/in/dhruv-bhawsar-376659177?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3BkS7ZJnt4SBaPOf6NCBIzKA%3D%3D">
              Dhruv Bhawsar
            </a>{" "}
          </b>
        </div>
        <img
          id="payment_img"
          src="https://i.ibb.co/Qfvn4z6/payment.png"
          alt=""
        />
      </div>
    </div>
  );
};

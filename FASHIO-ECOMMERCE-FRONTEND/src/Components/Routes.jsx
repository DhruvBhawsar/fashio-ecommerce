import { Routes, Route } from "react-router-dom";
import { Home } from "./Home";
import { Navbar } from "./Navbar";
import { Cart } from "./Cart";
import { Product } from "./Products";
import { ProductDetails } from "./ProductDetails";
import { Payment } from "./Payment";
import { Error } from "./Error";
import { Footer } from "./Footer";
import { OrderPage } from "./OrderPage";
import { Space } from "./marginbtnavbar";
import { Login } from "./loginReg/Login";
import { Register } from "./loginReg/Register";
export const AllRoutess = () => {
  return (
    <div>
      <Navbar />
      <Space />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="product" element={<Product />} />
        <Route path="product/:productId" element={<ProductDetails />} />
        <Route path="cart" element={<Cart />} />
        <Route path="payment" element={<Payment />} />
        <Route path="*" element={<Error />} />
        <Route path="orderpage" element={<OrderPage />} />
        <Route path="login" element={<Login />} />
        <Route path="register" element={<Register />} />
      </Routes>
      <hr style={{ width: "95%", margin: "auto", marginTop: "50px" }} />
      <Footer />
    </div>
  );
};

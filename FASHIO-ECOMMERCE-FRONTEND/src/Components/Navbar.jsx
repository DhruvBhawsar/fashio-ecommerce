import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
import AdbIcon from "@mui/icons-material/Adb";
import { Announcement } from "./Announcement";
import Badge from "@mui/material/Badge";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import { ShoppingCartOutlined } from "@mui/icons-material";
import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import "./Nav.css";

const pages = ["Products", "Pricing", "Blog"];
const settings = ["Profile", "Account", "Dashboard", "Logout"];

export const Navbar = () => {
  const cart = useSelector((state) => state.allProducts.cart);
  const [login_status, setLogin_status] = useState("");

  const [cartCount, setCartCount] = useState(0);
  useEffect(() => {
    let count = 0;
    cart.map((item) => {
      count += item.qty;
    });
    console.log(count);
    setCartCount(count);
    setLogin_status(JSON.parse(localStorage.getItem("login_token")));
  }, [cart, cartCount]);

  const [anchorElNav, setAnchorElNav] = React.useState(null);
  // const [anchorElUser, setAnchorElUser] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  // const handleCloseUserMenu = () => {
  //   setAnchorElUser(null);
  // };
  const handlelogout = () => {
    localStorage.removeItem("login_token");
    window.location.href = "/";
  };

  return (
    <div>
      <Announcement />
      <AppBar id="barmainContainer" position="fixed">
        <Container maxWidth="xl">
          <Toolbar id="check" disableGutters>
            {/* <AdbIcon sx={{ display: { xs: "none", md: "flex" }, mr: 1 }} /> */}
            <Typography
              variant="h6"
              noWrap
              component="a"
              href="/"
              sx={{
                mr: 2,
                display: { xs: "none", md: "flex" },
                fontFamily: "monospace",
                fontWeight: 700,
                letterSpacing: ".3rem",
                color: "inherit",
                textDecoration: "none",
              }}
            >
              <img
                src="https://cdn4.vectorstock.com/i/thumb-large/55/98/fashion-symbol-logo-vector-22375598.jpg"
                alt=""
                height="45px"
                width="50px
                "
              />
            </Typography>

            <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
              <IconButton
                size="large"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleOpenNavMenu}
                color="inherit"
              >
                <MenuIcon />
              </IconButton>
              <Menu
                id="menu-appbar"
                anchorEl={anchorElNav}
                anchorOrigin={{
                  vertical: "bottom",
                  horizontal: "left",
                }}
                keepMounted
                transformOrigin={{
                  vertical: "top",
                  horizontal: "left",
                }}
                open={Boolean(anchorElNav)}
                onClose={handleCloseNavMenu}
                sx={{
                  display: { xs: "block", md: "none" },
                }}
              >
                {pages.map((page) => (
                  <MenuItem key={page} onClick={handleCloseNavMenu}>
                    <Typography textAlign="center">{page}</Typography>
                  </MenuItem>
                ))}
              </Menu>
            </Box>

            <AdbIcon sx={{ display: { xs: "flex", md: "none" }, mr: 1 }} />
            <Typography
              variant="h5"
              noWrap
              component="a"
              href=""
              sx={{
                mr: 2,
                display: { xs: "flex", md: "none" },
                flexGrow: 1,
                fontFamily: "monospace",
                fontWeight: 700,
                letterSpacing: ".3rem",
                color: "inherit",
                textDecoration: "none",
              }}
            >
              FASHIO
            </Typography>

            <div id="centernavdiv">FASHIO</div>
            <div id="cartIcon">
              <Link to="/cart">
                <Badge badgeContent={cartCount} color="primary">
                  <ShoppingCartOutlined color="action" />
                </Badge>
              </Link>
            </div>
            {login_status ? (
              <div>
                <Button onClick={handlelogout}>Logout</Button>
              </div>
            ) : (
              <div style={{ display: "flex" }}>
                <div>
                  <Link to="/login">
                    <Button style={{ color: "black" }}>Login</Button>
                  </Link>
                </div>
                <div>
                  <Link to="/register">
                    <Button style={{ color: "black" }}>Register</Button>{" "}
                  </Link>
                </div>
              </div>
            )}
          </Toolbar>
        </Container>
      </AppBar>
    </div>
  );
};

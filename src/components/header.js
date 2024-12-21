import React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import { useNavigate } from "react-router-dom";
import HandleSearch from "./utils/handleSearch.js";
import logo from "../assets/logo3.webp";
import PositionedMenu from "./utils/menuSign.js";// Asegúrate de tener este componente
import "../styles/HeaderStyles.css";
import Cart from "./utils/Cart.js";

const Header = () => {
  const navigate = useNavigate();

  const handleNavigation = (route) => {
    navigate(route);
  };

  return (
    <Box className="header-container">
      <AppBar position="static">
        <Toolbar className="header-toolbar">
          {/* Logo and Title */}
          <a
            href="#!"
            onClick={(e) => {
              e.preventDefault();
              handleNavigation("/tabs");
            }}
            className="header-logo-link"
          >
            <img src={logo} alt="logo" className="header-logo" />
            <h2 className="header-title">Yane, beauty store</h2>
          </a>

          {/* Search Bar */}
          <div className="header-search">
            <HandleSearch />
          </div>

          {/* Links, Menu, and Cart */}
          <div style={{ display: "flex", flexDirection: "row", alignItems: "center" }}>
            <div className="header-links">
              <a
                href="#!"
                onClick={(e) => {
                  e.preventDefault();
                  handleNavigation("/signIn");
                }}
                className="header-link"
              >
                Iniciar Sesión
              </a>
              <a
                href="#!"
                onClick={(e) => {
                  e.preventDefault();
                  handleNavigation("/signUp");
                }}
                className="header-link"
              >
                Registrarse
              </a>
            </div>

            {/* Positioned Menu */}
            <div className="header-menu">
              <PositionedMenu onNavigate={handleNavigation} />
            </div>

            {/* Cart Component */}
            <Cart />
          </div>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default Header;

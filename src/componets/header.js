import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import HandleSearch from './utils/handleSearch';
import logo from '../assets/logo.png';
import '../styles/HeaderStyles.css';
import Cart from "./utils/Cart.js";
import PositionedMenu from "./utils/menu-sign.js";

function Header({ onNavigate }) {
  return (
    <Box className="header-container">
      <AppBar position="static">
        <Toolbar className="header-toolbar">
          <a
            href="#!"
            onClick={(e) => {
              e.preventDefault();
              onNavigate('tabs');
            }}
            className="header-logo-link"
          >
            <img src={logo} alt="logo" className="header-logo" />
            <h2 className="header-title">Yane, beauty store</h2>
          </a>
          <div className="header-search">
            <HandleSearch />
          </div>
            <div style={{ display:"flex", flexDirection:"row"}}>
            <div className="header-links">
            <a
              href="#!"
              onClick={(e) => {
                e.preventDefault();
                onNavigate('signIn');
              }}
              className="header-link"
            >
              Iniciar Sesión
            </a>
            <a
              href="#!"
              onClick={(e) => {
                e.preventDefault();
                onNavigate('signUp');
              }}
              className="header-link"
            >
              Registrarse
            </a>
            </div>
            <div className="header-menu">
              <PositionedMenu onNavigate={onNavigate} />
            </div>
            <Cart />
            </div>
        </Toolbar>
      </AppBar>
    </Box>
  );
}

export default Header;

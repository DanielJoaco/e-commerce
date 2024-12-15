import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import HandleSearch from './utils/handleSearch';
import logo from '../assets/logo.png';

function Header() {
  return (
    <Box sx={{ flexGrow: 1, maxWidth: "100%" }} >
      <AppBar position="static">
        <Toolbar  className='header'>
            <a href='#' style={{display:"flex", alignItems:"center"}}>
            <img src={logo} alt='logo' style={{padding:"0.1rem 1rem 0.1rem", width:"6rem"}} />
              <h2>Yane, beauty store</h2>            
            </a>
          <div className='header' style={{display:"flex"}} id='search'>
              <HandleSearch />         
          </div>
          <div className='header' style={{display:"flex"}}>
            <a href='#'>Iniciar Sesión</a>
            <a href='#'>Registrarse</a>
          </div>

        </Toolbar>
      </AppBar>
    </Box>
  );
}

export default Header;
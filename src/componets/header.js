import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';

function Header() {
  return (
    <Box sx={{ flexGrow: 1 }} >
      <AppBar position="static">
        <Toolbar  className='header'>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }} display={"flex"} flexDirection={"flex-start"}>
            Mi Tienda de Tecnología
          </Typography>
          <div className='header' display={"flex"}>
            <div>
                <input type="text" placeholder="Buscar productos" />
                <button>Buscar</button>
            </div>
            <button>Iniciar sesión</button>
            <button>Crear cuenta</button>
          </div>
        </Toolbar>
      </AppBar>
      <Toolbar>
        <Box sx={{ flexGrow: 1 }}>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Categorías
          </Typography>
        </Box>
        <Box sx={{ flexGrow: 1 }}> 
            <button>Celulares</button>
            <button>Computadoras</button>
            <button>Accesorios</button> 
        </Box>
      </Toolbar>
    </Box>
  );
}

export default Header;
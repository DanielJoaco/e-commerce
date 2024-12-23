import * as React from 'react';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';

export default function PositionedMenu({ onNavigate }) {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
      <Button
        id="demo-positioned-button"
        aria-controls={open ? 'demo-positioned-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        onClick={handleClick}
        className='menu-button'
      >
        Ingresar
      </Button>
      <Menu
        id="demo-positioned-menu"
        aria-labelledby="demo-positioned-button"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'left',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'left',
        }}
      >
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
      </Menu>
    </div>
  );
}

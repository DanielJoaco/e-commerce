import React, { useEffect, useState } from "react";
import {
  IconButton,
  Badge,
  Drawer,
  Button,
  Typography,
} from "@mui/material";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import "../../styles/CartStyles.css";

const Cart = () => {
  const [cartItems, setCartItems] = useState([]);
  const [isOpen, setIsOpen] = useState(false);

  // Función para cargar el carrito desde localStorage
  const loadCart = () => {
    const storedCart = JSON.parse(localStorage.getItem("ecommerce_cart")) || [];
    const adjustedCart = storedCart.map((item) => ({
      ...item,
      quantity: Math.min(item.quantity, item.maxQuantity),
    }));
    setCartItems(adjustedCart);
    localStorage.setItem("ecommerce_cart", JSON.stringify(adjustedCart));
  };

  useEffect(() => {
    loadCart();
    const handleStorageChange = () => loadCart();
    window.addEventListener("storage", handleStorageChange);
    return () => {
      window.removeEventListener("storage", handleStorageChange);
    };
  }, []);

  const totalItems = cartItems.reduce((total, item) => total + item.quantity, 0);

  const handleQuantityChange = (id, value) => {
    const updatedCart = cartItems.map((item) => {
      if (item.id === id) {
        const newQuantity = Math.max(1, Math.min(value, item.maxQuantity));
        return { ...item, quantity: newQuantity };
      }
      return item;
    });
    setCartItems(updatedCart);
    localStorage.setItem("ecommerce_cart", JSON.stringify(updatedCart));
  };

  const handleRemoveItem = (id) => {
    const updatedCart = cartItems.filter((item) => item.id !== id);
    setCartItems(updatedCart);
    localStorage.setItem("ecommerce_cart", JSON.stringify(updatedCart));
  };

  // Función para enviar el mensaje de WhatsApp
  const handleCheckout = () => {
    if (cartItems.length === 0) {
      alert("El carrito está vacío");
      return;
    }

    const total = cartItems.reduce((sum, item) => sum + item.quantity * item.price, 0);
    let message = "Hola, quisiera comprar estos productos:\n\n";

    cartItems.forEach((item) => {
      message += `${item.name} - ${item.quantity} unidades: $${(item.quantity * item.price).toFixed(0)}\n`;
    });

    message += `\nTotal de la compra: $${total.toFixed(0)}`;

    // Codificar el mensaje para URL
    const encodedMessage = encodeURIComponent(message);
    const whatsappURL = `https://api.whatsapp.com/send?phone=+573023559672&text=${encodedMessage}`;

    // Abrir WhatsApp
    window.open(whatsappURL, "_blank");
  };

  return (
    <>
      <IconButton
        color="inherit"
        onClick={() => setIsOpen(true)}
        className="cart-icon-button"
      >
        <Badge badgeContent={totalItems} color="secondary">
          <ShoppingCartIcon />
        </Badge>
      </IconButton>
      <Drawer
        anchor="right"
        open={isOpen}
        onClose={() => setIsOpen(false)}
        classes={{ paper: "cart-drawer" }}
        disableScrollLock
      >
        <div className="cart-container">
          <Typography variant="h6" className="cart-title">
            Carrito de Compras
          </Typography>
          {cartItems.length > 0 ? (
            <div className="cart-items-container">
              {cartItems.map((item) => (
                <div key={item.id} className="cart-item">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="cart-item-image"
                  />
                  <div className="cart-item-details">
                    <Typography className="cart-item-name">{item.name}</Typography>
                    <Typography className="cart-item-quantity">
                      {item.quantity} x ${item.price.toFixed(2)}
                    </Typography>
                    <div className="cart-item-quantity">
                      <Button
                        variant="outlined"
                        size="small"
                        onClick={() => handleQuantityChange(item.id, item.quantity - 1)}
                        disabled={item.quantity <= 1}
                        className="cart-quantity-button"
                      >
                        -
                      </Button>
                      <Typography className="cart-item-quantity-text">
                        {item.quantity}
                      </Typography>
                      <Button
                        variant="outlined"
                        size="small"
                        onClick={() => handleQuantityChange(item.id, item.quantity + 1)}
                        disabled={item.quantity >= item.maxQuantity}
                        className="cart-quantity-button"
                      >
                        +
                      </Button>
                    </div>
                  </div>
                  <div className="cart-item-total">
                    <Typography className="cart-item-quantity">
                      ${(item.quantity * item.price).toFixed(2)}
                    </Typography>
                    <Button
                      variant="text"
                      color="error"
                      onClick={() => handleRemoveItem(item.id)}
                      className="cart-remove-button"
                    >
                      Eliminar
                    </Button>
                  </div>
                </div>
              ))}
              <Typography variant="h6" className="cart-total">
                Total: $
                {cartItems
                  .reduce((total, item) => total + item.quantity * item.price, 0)
                  .toFixed(2)}
              </Typography>
              <Button
                variant="contained"
                color="primary"
                fullWidth
                className="cart-checkout-button"
                onClick={handleCheckout}
              >
                Comprar Ahora
              </Button>
            </div>
          ) : (
            <Typography className="cart-empty-message">
              No hay productos en el carrito.
            </Typography>
          )}
        </div>
      </Drawer>
    </>
  );
};

export default Cart;

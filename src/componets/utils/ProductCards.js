import React, { useState, useEffect } from "react";
import { Box, Card, CardContent, CardMedia, Typography, Button, Grid, Stack, Alert } from "@mui/material";
import { Star, StarHalf, StarOutline } from "@mui/icons-material";

const ProductCards = ({ data }) => {
  const [quantities, setQuantities] = useState({});
  const [alert, setAlert] = useState({ message: "", severity: "", show: false }); // Estado para manejar las alertas

  useEffect(() => {
    const initialQuantities = data.reduce((acc, product) => {
      acc[product.id] = 1; // Cantidad predeterminada es 1
      return acc;
    }, {});
    setQuantities(initialQuantities);
  }, [data]);

  const handleQuantityChange = (id, value, max) => {
    const sanitizedValue = Math.max(0, Math.min(value, max));
    setQuantities((prev) => ({ ...prev, [id]: sanitizedValue }));
  };

  const updateCartInLocalStorage = (cart) => {
    localStorage.setItem("ecommerce_cart", JSON.stringify(cart));
    const storageEvent = new Event("storage");
    window.dispatchEvent(storageEvent);
  };

  const handleAddToCart = (product) => {
    const existingCart = JSON.parse(localStorage.getItem("ecommerce_cart")) || [];
    const cartProductIndex = existingCart.findIndex((item) => item.name === product.name);
  
    let alertMessage = "";
    let alertSeverity = "success"; // Por defecto, éxito
  
    if (cartProductIndex > -1) {
      const cartProduct = existingCart[cartProductIndex];
  
      // Validar cantidad máxima antes de agregar
      if (cartProduct.quantity + quantities[product.id] > product.quantity) {
        cartProduct.quantity = product.quantity; // Ajustar a la cantidad máxima
        alertMessage = "Ya han sido agregados la cantidad máxima de productos";
        alertSeverity = "warning"; // Cambiar a warning para esta condición
      } else {
        cartProduct.quantity += quantities[product.id];
        alertMessage = "Producto agregado al carrito";
      }
    } else {
      const quantityToAdd = Math.min(quantities[product.id], product.quantity);
      existingCart.push({
        id: product.id,
        name: product.name,
        image: product.image,
        price: product.price,
        quantity: quantityToAdd,
        maxQuantity: product.quantity,
      });
      alertMessage = quantityToAdd === product.quantity
        ? "Ya han sido agregados la cantidad máxima de productos"
        : "Producto agregado al carrito";
  
      if (quantityToAdd === product.quantity) {
        alertSeverity = "warning"; // Cambiar a warning si se alcanza el máximo
      }
    }
  
    // Actualizar el carrito en localStorage
    localStorage.setItem("ecommerce_cart", JSON.stringify(existingCart));
  
    // Mostrar alerta
    if (alertMessage) {
      setAlert({ show: true, message: alertMessage, severity: alertSeverity });
      setTimeout(() => setAlert({ show: false, message: "", severity: "" }), 3000);
    }
  };
  

  const renderStars = (stars) => {
    const fullStars = Math.floor(stars);
    const halfStar = stars % 1 >= 0.5 ? 1 : 0;
    const emptyStars = 5 - fullStars - halfStar;

    return (
      <>
        {[...Array(fullStars)].map((_, index) => (
          <Star key={`full-${index}`} sx={styles.starIcon} />
        ))}
        {halfStar === 1 && <StarHalf sx={styles.starIcon} />}
        {[...Array(emptyStars)].map((_, index) => (
          <StarOutline key={`empty-${index}`} sx={styles.starIcon} />
        ))}
      </>
    );
  };

  return (
    <Box sx={styles.gridContainer}>
      {alert.show && (
        <Stack sx={styles.alertContainer} spacing={2}>
          <Alert severity={alert.severity} sx={styles.alertMessagge}>{alert.message}</Alert>
        </Stack>
      )}
      <Grid container spacing={4}>
        {data.map((product) => (
          <Grid item xs={6} sm={6} md={4} key={product.id}>
            <Box sx={styles.cardWrapper}>
              {product.quantity < 1 && (
                <Button disabled sx={styles.outOfStock} className="out-of-stock">
                  ¡Agotado!
                </Button>
              )}
              <Card sx={styles.card}>
                <CardMedia
                  component="img"
                  sx={styles.cardMedia}
                  image={product.image}
                  alt={product.name}
                />
                <CardContent sx={styles.cardContent}>
                  <Box sx={styles.starsContainer}>
                    {renderStars(product.stars)}
                    <Typography variant="body2" color="white" sx={styles.reviewsText}>
                      | {product.reviews} opiniones
                    </Typography>
                  </Box>
                  <Typography
                    gutterBottom
                    variant="h5"
                    component="div"
                    sx={styles.productName}
                  >
                    {product.name}
                  </Typography>
                  <Typography variant="h4" color="#F9CA7F" sx={styles.productPrice}>
                    ${product.price.toFixed(0)}
                  </Typography>
                  <Box sx={styles.quantityContainer}>
                    <Button
                      variant="outlined"
                      onClick={() =>
                        handleQuantityChange(product.id, quantities[product.id] - 1, product.quantity)
                      }
                      disabled={quantities[product.id] <= 0 || product.quantity < 1}
                      sx={styles.quantityButton}
                    >
                      -
                    </Button>
                    <Box sx={styles.quantityBox}>{quantities[product.id] || 0}</Box>
                    <Button
                      variant="outlined"
                      onClick={() =>
                        handleQuantityChange(product.id, quantities[product.id] + 1, product.quantity)
                      }
                      disabled={quantities[product.id] >= product.quantity || product.quantity < 1}
                      sx={styles.quantityButton}
                    >
                      +
                    </Button>
                  </Box>
                  <Button
                    variant="contained"
                    color="success"
                    sx={styles.addToCartButton}
                    disabled={product.quantity < 1}
                    onClick={() => handleAddToCart(product)}
                  >
                    Agregar al carrito
                  </Button>
                </CardContent>
              </Card>
            </Box>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

const styles = {
  alertContainer: {
    position: 'fixed',
    top: 0,
    left: '50%',
    transform: 'translateX(-50%)',
    zIndex: 9999, 
    padding: '1rem',
    width: 'auto',
    height: 'auto',

  },
  alertMessagge: {
    fontFamily: "'Lobster', sans-serif", 
    fontSize: '1.4rem',
    background: 'rgba(255, 255, 255, 0.05)',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    textShadow: "0.1rem 0.1rem 0.5rem #561290",
    color: 'black',
    backdropFilter: 'blur(10px)',
    borderRadius: '1rem',
    alignItems: 'center',
  },
  gridContainer: {
    p: 4,
  },
  cardWrapper: {
    position: "relative",
  },
  outOfStock: {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%) rotate(-45deg)",
    fontWeight: "bold",
    pointerEvents: "none",
    zIndex: 1,
    boxShadow: "0.4rem 0.4rem 4rem #0000004d",
    borderRadius: "2rem",
  },
  card: {
    width: "32rem",
    height: "55rem",
    background: "rgba(177, 177, 177, 0.1)",
    borderRadius: "2rem",
    color: "white",
    boxShadow: "0.4rem 0.4rem 1.0rem #0000004d",
    margin: "auto",
    textShadow: "0.1rem 0.1rem 0.5rem #561290",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  cardContent: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  cardMedia: {
    height: "15rem",
    width: "60%",
    maxWidth: "100%",
    margin: "2rem auto",
    objectFit: "contain",
    backgroundColor: "rgba(218, 218, 218, 0.3)",
    borderRadius: "10000rem",
    filter: "drop-shadow(0 0 10px white)",
  },
  starsContainer: {
    display: "flex",
    alignItems: "center",
    mb: 2,
  },
  starIcon: {
    color: "#FFD700",
    fontSize: "2rem",
  },
  reviewsText: {
    ml: 1,
    fontSize: "1.4rem",
    fontFamily: "'Lobster', sans-serif",
    fontWeight: 400,
  },
  productName: {
    fontSize: "2.4rem",
    fontFamily: "'Lobster', sans-serif",
    fontWeight: 600,
  },
  productPrice: {
    mt: 2,
    fontSize: "2.8rem",
    fontFamily: "'Lobster', sans-serif",
    fontWeight: 600,
  },
  quantityContainer: {
    display: "flex",
    alignItems: "center",
    padding: "1rem 0",
  },
  quantityButton: {
    fontFamily: "Lobster, sans-serif",
    borderRadius: "10rem",
    fontSize: "2rem",
    backgroundColor: " rgba(115, 104, 214, 0.6)",
    boxShadow: "0.4rem 0.4rem 1.0rem #0000004d",
    textShadow: "0.1rem 0.1rem 0.5rem #561290",
    color: "white",
    padding: "0",
    minWidth: "4rem",
    "&:hover": {
      backgroundColor: "#561290",
    },
  },
  quantityBox: {
    mx: 2,
    width: "6rem",
    height: "3rem",
    fontSize: "1.6rem",
    fontWeight: 600,
    color: "#000",
    textAlign: "center",
    lineHeight: "3rem",
    border: "1px solid #ccc",
    borderRadius: "2rem",
    backgroundColor: "#fff",
  },
  addToCartButton: {
    ml: 2,
    fontSize: "1.6rem",
    borderRadius: "2rem",
    fontFamily: "'Lobster', sans-serif",
    fontWeight: 400,
    textShadow: "0.1rem 0.1rem 0.5rem #561290",
    textTransform: "none",
    backgroundColor: "rgb(212, 65, 200)",
  },
};

export default ProductCards;

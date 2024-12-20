import React, { useState, useEffect } from "react";
import { Card, CardContent, CardMedia, Typography, Button, Stack, Alert } from "@mui/material";
import { Star, StarHalf, StarOutline } from "@mui/icons-material";
import '../styles/ViewProductStyles.css';

const ViewProduct = ({ product }) => {
    const [quantity, setQuantity] = useState(1);
    const [alert, setAlert] = useState({ message: "", severity: "", show: false });

    useEffect(() => {
        setQuantity(1);
    }, [product]);

    const handleQuantityChange = (value, max) => {
        const sanitizedValue = Math.max(0, Math.min(value, max));
        setQuantity(sanitizedValue);
    };

    const updateCartInLocalStorage = (cart) => {
        localStorage.setItem("ecommerce_cart", JSON.stringify(cart));
        const storageEvent = new Event("storage");
        window.dispatchEvent(storageEvent);
    };

    const handleAddToCart = () => {
        const existingCart = JSON.parse(localStorage.getItem("ecommerce_cart")) || [];
        const cartProductIndex = existingCart.findIndex((item) => item.name === product.name);

        let alertMessage = "";
        let alertSeverity = "success";

        if (cartProductIndex > -1) {
            const cartProduct = existingCart[cartProductIndex];
            if (cartProduct.quantity + quantity > product.quantity) {
                cartProduct.quantity = product.quantity;
                alertMessage = "Ya han sido agregados la cantidad máxima de productos";
                alertSeverity = "warning";
            } else {
                cartProduct.quantity += quantity;
                alertMessage = "Producto agregado al carrito";
            }
        } else {
            const quantityToAdd = Math.min(quantity, product.quantity);
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
                alertSeverity = "warning";
            }
        }

        updateCartInLocalStorage(existingCart);

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
                    <Star key={`full-${index}`} className="star-icon" />
                ))}
                {halfStar === 1 && <StarHalf className="star-icon" />}
                {[...Array(emptyStars)].map((_, index) => (
                    <StarOutline key={`empty-${index}`} className="star-icon" />
                ))}
            </>
        );
    };

    return (
        <div className="view-product-container">
            {alert.show && (
                <Stack className="alert-container" spacing={2}>
                    <Alert severity={alert.severity} className="alert-message">{alert.message}</Alert>
                </Stack>
            )}
            <Card className="view-product-card">
                <CardMedia
                    component="img"
                    className="view-product-card-media"
                    image={product.image}
                    alt={product.name}
                />
                <CardContent className="view-product-card-content">
                    <Typography gutterBottom variant="h5" component="div" className="product-name">
                        {product.name}
                    </Typography>
                    <Typography variant="body1" color="textSecondary" className="product-description">
                        {product.description}
                    </Typography>
                    <div className="stars-container">
                        {renderStars(product.stars)}
                        <Typography variant="body2" color="white" className="reviews-text">
                            | {product.reviews} opiniones
                        </Typography>
                    </div>
                    <div className="quantity-container">
                    <Typography variant="h4" color="#F9CA7F" className="product-price">
                        ${product.price.toFixed(0)}
                    </Typography>
                        <div className="quantity-buttons">
                            <Button
                                variant="outlined"
                                onClick={() => handleQuantityChange(quantity - 1, product.quantity)}
                                disabled={quantity <= 0 || product.quantity < 1}
                                className="quantity-button"
                            >
                                -
                            </Button>
                            <div className="quantity-box">{quantity || 0}</div>
                            <Button
                                variant="outlined"
                                onClick={() => handleQuantityChange(quantity + 1, product.quantity)}
                                disabled={quantity >= product.quantity || product.quantity < 1}
                                className="quantity-button"
                            >
                                +
                            </Button>
                        </div>                        
                    </div>
                    <Button
                        variant="contained"
                        color="success"
                        className="add-to-cart-button"
                        disabled={product.quantity < 1}
                        onClick={handleAddToCart}
                    >
                        Agregar al carrito
                    </Button>
                </CardContent>
            </Card>
        </div>
    );
};

export default ViewProduct;

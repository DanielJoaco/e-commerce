import React, { useState, useEffect } from "react";
import { Box, Card, CardContent, CardMedia, Typography, Button, Grid } from "@mui/material";
import { Star, StarHalf, StarOutline } from "@mui/icons-material";
import data from "../../data.json";

// Interfaces
interface Product {
  id: number;
  table: string;
  name: string;
  description: string;
  price: number;
  image: string;
  stars: number;
  reviews: number;
  quantity: number;
}

interface ProductCardsProps {
  table?: string;
  data?: Product[];
}

// Component
const ProductCards: React.FC<ProductCardsProps> = ({ table, data }) => {
  const [filteredProducts, setFilteredProducts] = useState<Product[]>([]);
  const [quantities, setQuantities] = useState<{ [key: number]: number }>({});

  useEffect(() => {
    let productsToFilter: Product[] = [];

    if (data) {
      productsToFilter = data;
    } else if (table) {
      const allProducts: Product[] = data as unknown as Product[];
      productsToFilter =
        table === "all" ? allProducts : allProducts.filter((item) => item.table === table);
    }

    setFilteredProducts(productsToFilter);

    // Initialize quantities
    const initialQuantities = productsToFilter.reduce((acc, product) => {
      acc[product.id] = 1; // Default quantity is 1
      return acc;
    }, {} as { [key: number]: number });

    setQuantities(initialQuantities);
  }, [table, data]);

  const handleQuantityChange = (id: number, value: number, max: number) => {
    const sanitizedValue = Math.max(0, Math.min(value, max));
    setQuantities((prev) => ({ ...prev, [id]: sanitizedValue }));
  };

  const renderStars = (stars: number) => {
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
      <Grid container spacing={4}>
        {filteredProducts.map((product) => (
          <Grid item xs={12} sm={6} md={4} key={product.id}>
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
                  <Typography gutterBottom variant="h5" component="div" sx={styles.productName}>
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

// Styles
const styles = {
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

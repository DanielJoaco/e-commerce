import React, { useState, useEffect } from "react";
import { Box, Card, CardContent, CardMedia, Typography, Button, Grid } from "@mui/material";
import { Star, StarHalf, StarOutline } from "@mui/icons-material";
import data from "../../data.json";

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

const ProductCards: React.FC<ProductCardsProps> = ({ table, data }) => {
  const [filteredProducts, setFilteredProducts] = useState<Product[]>([]);
  const [quantities, setQuantities] = useState<{ [key: number]: number }>({}); // Cantidades seleccionadas

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

    // Inicializar cantidades a 0 para cada producto filtrado
    const initialQuantities = productsToFilter.reduce((acc, product) => {
      acc[product.id] = 1; // Inicializa con 0
      return acc;
    }, {} as { [key: number]: number });

    setQuantities(initialQuantities);
  }, [table, data]);

  const renderStars = (stars: number) => {
    const fullStars = Math.floor(stars);
    const halfStar = stars % 1 >= 0.5 ? 1 : 0;
    const emptyStars = 5 - fullStars - halfStar;

    return (
      <>
        {[...Array(fullStars)].map((_, index) => (
          <Star key={`full-${index}`} sx={{ color: "#FFD700", fontSize: "2rem" }} />
        ))}
        {halfStar === 1 && <StarHalf sx={{ color: "#FFD700", fontSize: "2rem" }} />}
        {[...Array(emptyStars)].map((_, index) => (
          <StarOutline key={`empty-${index}`} sx={{ color: "#FFD700", fontSize: "2rem" }} />
        ))}
      </>
    );
  };

  const handleQuantityChange = (id: number, value: number, max: number) => {
    const sanitizedValue = Math.max(0, Math.min(value, max)); // Asegura que esté entre 0 y max
    setQuantities((prev) => ({ ...prev, [id]: sanitizedValue }));
  };

  return (
    <Box sx={{ p: 4 }}>
      <Grid container spacing={4}>
        {filteredProducts.map((product) => (
          <Grid item xs={12} sm={6} md={4} key={product.id}>
            <Box sx={{ position: "relative" }}>
              {product.quantity < 1 && (
                <Button
                  disabled
                  sx={{
                    position: "absolute",
                    top: "50%",
                    left: "50%",
                    transform: "translate(-50%, -50%) rotate(-45deg)",
                    fontSize: "2.6rem",
                    backgroundColor: "#F9CA7F",
                    color: "red",
                    fontWeight: "bold",
                    textTransform: "uppercase",
                    pointerEvents: "none",
                    zIndex: 1,
                    boxShadow: "0.4rem 0.4rem 2rem #0000004d",
                    borderRadius: "1rem",
                  }}
                >
                  ¡Agotado!
                </Button>
              )}
              <Card
                sx={{
                  width: "32rem",
                  height: "55rem",
                  background: "linear-gradient(135deg, rgba(250, 155, 255, 1), rgba(196, 189, 255, 0.56), rgba(172, 151, 184, 1))",
                  borderRadius: "2rem",
                  color: "white",
                  boxShadow: "0.4rem 0.4rem 1.0rem #0000004d",
                  margin: "auto",
                  textShadow: "0.1rem 0.1rem 0.5rem #561290",
                }}
              >
                <CardMedia
                  component="img"
                  sx={{
                    height: "20rem",
                    width: "70%",
                    maxWidth: "100%",
                    margin: "2rem auto",
                    objectFit: "contain",
                    backgroundColor: "rgba(252, 185, 255, 0.3)",
                    borderRadius: "120rem",
                    filter: "drop-shadow(0 0 10px white)",
                  }}
                  image={product.image}
                  alt={product.name}
                />
                <CardContent>
                  <Box sx={{ display: "flex", alignItems: "center", mb: 2 }}>
                    {renderStars(product.stars)}
                    <Typography
                      variant="body2"
                      color="white"
                      sx={{
                        ml: 1,
                        fontSize: "1.4rem",
                        fontFamily: "'Lobster', sans-serif",
                        fontWeight: 400,
                      }}
                    >
                      | {product.reviews} opiniones
                    </Typography>
                  </Box>
                  <Typography
                    gutterBottom
                    variant="h5"
                    component="div"
                    sx={{
                      fontSize: "2.4rem",
                      fontFamily: "'Lobster', sans-serif",
                      fontWeight: 600,
                    }}
                  >
                    {product.name}
                  </Typography>
                  <Typography
                    variant="h4"
                    color="#F9CA7F"
                    sx={{
                      mt: 2,
                      fontSize: "2.8rem",
                      fontFamily: "'Lobster', sans-serif",
                      fontWeight: 600,
                    }}
                  >
                    ${product.price.toFixed(0)}
                  </Typography>
                  <Box sx={{ mt: 2, display: "flex", alignItems: "center", flexDirection: "column" }}>
                    <Box sx={{ display: "flex", alignItems: "center", padding:"0 0 1rem 0" }}>
                      <Button
                        variant="outlined"
                        onClick={() =>
                          handleQuantityChange(product.id, quantities[product.id] - 1, product.quantity)
                        }
                        disabled={quantities[product.id] <= 0 || product.quantity < 1}
                        sx={{
                          fontFamily: "Lobster, sans-serif",
                          borderRadius: "10rem",
                          fontSize: "2rem",
                          backgroundColor: "rgba(255, 126, 197, 0.8)",
                          boxShadow: "0.4rem 0.4rem 1.0rem #0000004d",
                          textShadow: '0.1rem 0.1rem 0.5rem #561290',
                          color: "white",
                          padding: "0",
                          minWidth: "4rem",
                          "&:hover": {
                            backgroundColor: "#561290",
                            },
                        }}
                      >
                        -
                      </Button>
                      <Box
                        sx={{
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
                          backgroundColor: product.quantity < 1 ? "#f9f9f9" : "#fff",
                        }}
                      >
                        {quantities[product.id] || 0}
                      </Box>
                      <Button
                        variant="outlined"
                        onClick={() =>
                          handleQuantityChange(product.id, quantities[product.id] + 1, product.quantity)
                        }
                        disabled={quantities[product.id] >= product.quantity || product.quantity < 1}
                        sx={{
                          fontFamily: "Lobster, sans-serif",
                          borderRadius: "10rem",
                          fontSize: "2rem",
                          backgroundColor: "rgba(255, 126, 197, 0.8)",
                          boxShadow: "0.4rem 0.4rem 1.0rem #0000004d",
                          textShadow: '0.1rem 0.1rem 0.5rem #561290',
                          color: "white",
                          padding: "0",
                          minWidth: "4rem",
                          "&:hover": {
                            backgroundColor: "#561290",
                            },
                        }}
                      >
                        +
                      </Button>
                    </Box>
                    <Button
                      variant="contained"
                      color="success"
                      sx={{
                        ml: 2,
                        fontSize: "1.6rem",
                        borderRadius: "2rem",
                        fontFamily: "'Lobster', sans-serif",
                        fontWeight: 400,
                        textShadow: "0.1rem 0.1rem 0.5rem #561290",
                        textTransform: "none",
                        backgroundColor: "#e136c6",
                      }}
                      disabled={product.quantity < 1}
                    >
                      Agregar al carrito
                    </Button>
                  </Box>
                </CardContent>
              </Card>
            </Box>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default ProductCards;

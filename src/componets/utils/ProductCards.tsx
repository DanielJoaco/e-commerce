import React, { useState, useEffect } from "react";
import { Box, Card, CardContent, CardMedia, Typography, Button, Grid } from "@mui/material";
import { Star, StarHalf, StarOutline } from "@mui/icons-material";
import data from "../../data.json";

// Define el tipo de un producto
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
  table?: string; // Nombre de la tabla seleccionada
  data?: Product[]; // Datos de productos a mostrar (para paginación)
}

const ProductCards: React.FC<ProductCardsProps> = ({ table, data }) => {
  const [filteredProducts, setFilteredProducts] = useState<Product[]>([]);

  useEffect(() => {
    if (data) {
      // Si se pasa el prop `data`, úsalo directamente
      setFilteredProducts(data);
    } else if (table) {
      // Filtrar los productos según la tabla seleccionada
      const products: Product[] = data as unknown as Product[];
      const filtered = table === "all" ? products : products.filter((item) => item.table === table);
      setFilteredProducts(filtered);
    }
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
                  maxWidth: "35rem",
                  backgroundColor: "rgba(255, 126, 197, 0.8)",
                  borderRadius: "2rem",
                  color: "white",
                  boxShadow: "0.4rem 0.4rem 1.0rem #0000004d",
                  margin: "auto",
                  textShadow: '0.1rem 0.1rem 0.5rem #561290',
                }}
              >
                <CardMedia
                  component="img"
                  sx={{
                    height: "20rem",
                    width: "auto",
                    maxWidth: "100%",
                    margin: "2rem auto",
                    objectFit: "contain",
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
                    variant="body2"
                    color="white"
                    sx={{
                      fontSize: "1.8rem",
                      fontFamily: "'Lobster', sans-serif",
                      fontWeight: 400,
                    }}
                  >
                    {product.description}
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
                  <Button
                    variant="contained"
                    color="success"
                    sx={{
                      mt: 2,
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

import React, { useState, useEffect } from "react";
import { Box, Card, CardContent, CardMedia, Typography, Button, Grid } from "@mui/material";
import { Star, StarHalf, StarOutline } from "@mui/icons-material";
import data from "../../data.json"; // Importar el JSON

// Define el tipo de un producto
interface Product {
  id: number;
  table: string;
  name: string;
  description: string;
  price: number;
  image: string;
  stars: number; // Promedio de estrellas
  reviews: number; // Cantidad de opiniones
}

interface ProductCardsProps {
  table: string; // Nombre de la tabla seleccionada
}

const ProductCards: React.FC<ProductCardsProps> = ({ table }) => {
  const [filteredProducts, setFilteredProducts] = useState<Product[]>([]);

  useEffect(() => {
    // Tipar el JSON explícitamente como un arreglo de Product
    const products: Product[] = data as Product[];

    // Filtrar los productos según la tabla seleccionada
    const filtered = table === "all" ? products : products.filter((item) => item.table === table);
    setFilteredProducts(filtered);
  }, [table]);

  const renderStars = (stars: number) => {
    const fullStars = Math.floor(stars); // Estrellas llenas
    const halfStar = stars % 1 >= 0.5 ? 1 : 0; // Media estrella
    const emptyStars = 5 - fullStars - halfStar; // Estrellas vacías

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
            <Card
              sx={{
                maxWidth: 345,
                backgroundColor: "#07c3724b",
                borderRadius: "2rem",
                color: "white",
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
                  filter: "drop-shadow(0 0 10px white)", // Sombra blanca ajustada al contenido visible
                }}
                image={product.image}
                alt={product.name}
              />
              <CardContent>
                <Box sx={{ display: "flex", alignItems: "center", mb: 2 }}>
                  {renderStars(product.stars)}
                  <Typography variant="body2" color="white" sx={{ ml: 1, fontSize: "1.4rem" }}>
                    | {product.reviews} opiniones
                  </Typography>
                </Box>
                <Typography gutterBottom variant="h5" component="div" sx={{ fontSize: "2.4rem" }}>
                  {product.name}
                </Typography>
                <Typography variant="body2" color="white" sx={{ fontSize: "1.8rem" }}>
                  {product.description}
                </Typography>
                <Typography variant="h4" color="#F9CA7F " sx={{ mt: 2, fontSize: "2.8rem" }}>
                  ${product.price.toFixed(0)}
                </Typography>
                <Button
                  variant="contained"
                  color="success"
                  sx={{ mt: 2, fontSize: "1.4rem", borderRadius: "2rem" }}
                >
                  Agregar al carrito
                </Button>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default ProductCards;

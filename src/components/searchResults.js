import React, { useState, useEffect } from "react";
import { Box, Pagination, Stack } from "@mui/material";
import ProductCards from "./utils/ProductCards";
import data from "../data.json";
import "../styles/SearchResultsStyles.css";
import { useLocation } from "react-router-dom";

const SearchResults = () => {
  const location = useLocation();
  const query = new URLSearchParams(location.search).get("query");
  const [results, setResults] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 6;

  useEffect(() => {
    if (query) {
      // Filtrar productos que contengan el término de búsqueda en el nombre
      const filteredResults = Object.values(data)
        .flat()
        .filter((product) =>
          product.name.toLowerCase().includes(query.toLowerCase())
        );
      setResults(filteredResults);
    }
  }, [query]);

  const paginatedContent = results.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  return (
    <Box className="search-results-container">
      {results.length > 0 ? (
        <>
          <h2>Resultados para: "{query}"</h2>
          <ProductCards data={paginatedContent} />
          <Stack spacing={2} className="pagination-container">
            <Pagination
              count={Math.ceil(results.length / itemsPerPage)}
              page={currentPage}
              onChange={(event, page) => setCurrentPage(page)}
              className="pagination"
            />
          </Stack>
        </>
      ) : (
        <h2>No se encontraron resultados para: "{query}"</h2>
      )}
    </Box>
  );
};

export default SearchResults;

import React, { useState } from "react";
import { Box, Tabs, Tab, Pagination, Stack } from "@mui/material";
import ProductCards from "./ProductCards.js";
import data from "../../data.json";
import "../../styles/TabsStyles.css";
import MenuNavigation from "./menuNavigation.js";
import MenuNavigationMobile from "./menuNavigationMobile.js";

function CustomTabPanel({ children, value, index, ...other }) {
  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && <Box className="tab-panel">{children}</Box>}
    </div>
  );
}

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

const getCategories = () => ["Todos", ...Object.keys(data)];

export default function DynamicTabs() {
  const [value, setValue] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);
  const [filteredData, setFilteredData] = useState(Object.values(data).flat());
  const itemsPerPage = 6;

  const handleChangeTab = (event, newValue) => {
    setValue(newValue);
    setCurrentPage(1);
    const selectedCategory = getCategories()[newValue];
    setFilteredData(
      selectedCategory === "Todos"
        ? Object.values(data).flat()
        : data[selectedCategory] || []
    );
  };

  const handleFilter = (key) => {
    const [category, subcategory] = key.split("-");
    const filtered =
      subcategory && data[category]
        ? data[category].filter((item) => item.subcategory === subcategory)
        : data[category] || [];
    setFilteredData(filtered);
    setCurrentPage(1);
  };

  const paginatedContent = filteredData.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  return (
    <Box className="container-tabs">
      <Box className="tab-bar">
        <Tabs
          value={value}
          onChange={handleChangeTab}
          aria-label="dynamic tabs example"
          className="tabs"
        >
          {getCategories().map((category, index) => (
            <Tab
              key={index}
              label={category.charAt(0).toUpperCase() + category.slice(1)}
              {...a11yProps(index)}
              className={`tab ${value === index ? "active" : "inactive"}`}
            />
          ))}
        </Tabs>
      </Box>
      <CustomTabPanel value={value} index={value}>
        <div className="menu-navigation-mobile">
          <MenuNavigationMobile onFilter={handleFilter} />
        </div>
        <div className="div-container-tabs">
          <div className="menu-navigation">
            <MenuNavigation onFilter={handleFilter} />
          </div>
          <div className="content-container-tabs">
            <ProductCards data={paginatedContent} />
            <Stack spacing={2} className="pagination-container">
              <Pagination
                count={Math.ceil(filteredData.length / itemsPerPage)}
                page={currentPage}
                onChange={(event, page) => setCurrentPage(page)}
                className="pagination"
              />
            </Stack>
          </div>
        </div>
      </CustomTabPanel>
    </Box>
  );
}

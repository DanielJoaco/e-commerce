import React, { useState } from "react";
import { Box, Tabs, Tab, Pagination, Stack } from "@mui/material";
import ProductCards from "./ProductCards.tsx";
import data from "../../data.json";
import '../../styles/TabsStyles.css';
import MenuNavigation from "./menu-navigation.js";

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

function CustomTabPanel({ children, value, index, ...other }: TabPanelProps) {
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

function a11yProps(index: number) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

const getUniqueTables = () => {
  const tables = data.map((item) => item.table);
  return ["all", ...new Set(tables.filter((table) => table))];
};

export default function DynamicTabs() {
  const [value, setValue] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 6;

  const handleChangeTab = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
    setCurrentPage(1);
  };

  const handleChangePage = (event: React.ChangeEvent<unknown>, page: number) => {
    setCurrentPage(page);
  };

  const uniqueTables = getUniqueTables();
  const tabsConfig = uniqueTables.map((table) => ({
    label: table === "all" ? "Todos" : table.charAt(0).toUpperCase() + table.slice(1),
    content: data.filter((item) => table === "all" || item.table === table),
  }));

  const currentTabContent = tabsConfig[value]?.content || [];
  const startIndex = (currentPage - 1) * itemsPerPage;
  const paginatedContent = currentTabContent.slice(startIndex, startIndex + itemsPerPage);

  return (
    <Box className="container-tabs">
      <Box className="tab-bar">
        <Tabs
          value={value}
          onChange={handleChangeTab}
          aria-label="dynamic tabs example"
          className="tabs"
        >
            {tabsConfig.map((tab, index) => (
            <Tab
              key={index}
              label={tab.label}
              {...a11yProps(index)}
              className={`tab ${value === index ? "active" : "inactive"}`}
            />
            ))}
        </Tabs>
      </Box>
      {tabsConfig.map((tab, index) => (
        <CustomTabPanel key={index} value={value} index={index}>
          <div className="div-container-tabs">
            <MenuNavigation />
            <ProductCards table="custom" data={paginatedContent} />
            <Stack spacing={2} className="pagination-container">
            </Stack>
          </div>
          <Pagination
              count={Math.ceil(currentTabContent.length / itemsPerPage)}
              page={currentPage}
              onChange={handleChangePage}
              className="pagination"
            />
        </CustomTabPanel>
      ))}
    </Box>
  );
}

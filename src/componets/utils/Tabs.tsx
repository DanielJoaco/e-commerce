import React, { useState } from "react";
import { Box, Tabs, Tab, Pagination, Stack } from "@mui/material";
import ProductCards from "./ProductCards.tsx";
import data from "../../data.json";

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
      {value === index && <Box sx={styles.tabPanel}>{children}</Box>}
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
    <Box sx={styles.container}>
      <Box sx={styles.tabBar}>
        <Tabs
          value={value}
          onChange={handleChangeTab}
          aria-label="dynamic tabs example"
          sx={styles.tabs}
        >
          {tabsConfig.map((tab, index) => (
            <Tab
              key={index}
              label={tab.label}
              {...a11yProps(index)}
              sx={{
                ...styles.tab,
                color: value === index ? "#561290" : "white", // Validación para color dinámico
                "&.Mui-selected": {
                  color: "#561290",
                },
              }}
            />
          ))}
        </Tabs>
      </Box>
      {tabsConfig.map((tab, index) => (
        <CustomTabPanel key={index} value={value} index={index}>
          <ProductCards table="custom" data={paginatedContent} />
          <Stack spacing={2} sx={styles.paginationContainer}>
            <Pagination
              count={Math.ceil(currentTabContent.length / itemsPerPage)}
              page={currentPage}
              onChange={handleChangePage}
              sx={styles.pagination}
            />
          </Stack>
        </CustomTabPanel>
      ))}
    </Box>
  );
}

const styles = {
  container: {
    width: "100%",
  },
  tabBar: {
    borderBottom: 1,
    borderColor: "divider",
    display: "flex",
    justifyContent: "center",
    width: "100%",
    background: "linear-gradient(to right, rgba(107, 66, 188, 0.5), rgba(79, 241, 254, 0.5))",
  },
  tabs: {
    "& .MuiTabs-indicator": {
      backgroundColor: "#c27fc5",
    },
  },
  tab: {
    fontSize: "2.4rem",
    textShadow: "0.1rem 0.1rem 0.5rem rgba(85, 18, 144, 0.61)",
    textTransform: "none",
    fontFamily: "Lobster, sans-serif",
    fontWeight: 400,
    fontStyle: "normal",
  },
  tabPanel: {
    p: 3,
  },
  paginationContainer: {
    mt: 4,
    alignItems: "center",
  },
  pagination: {
    "& .MuiPaginationItem-root": {
      fontFamily: "Lobster, sans-serif",
      padding: "2rem",
      borderRadius: "10rem",
      fontSize: "2.4rem",
      backgroundColor: "rgba(255, 126, 197, 0.8)",
      boxShadow: "0.4rem 0.4rem 1.0rem #0000004d",
      textShadow: "0.1rem 0.1rem 0.5rem #561290",
      color: "white",
      "&:hover": {
        backgroundColor: "#561290",
      },
      "&.Mui-selected": {
        backgroundColor: "#e033c4",
        color: "white",
      },
    },
  },
};

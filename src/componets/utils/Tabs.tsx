import * as React from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";
import ProductCards from "./ProductCards.tsx";
import data from "../../data.json";

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

function CustomTabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      className="tab-panel"
      {...other}
    >
      {value === index && <Box sx={{ p: 3 }}>{children}</Box>}
    </div>
  );
}

function a11yProps(index: number) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

// Obtiene las tablas únicas del JSON
const getUniqueTables = () => {
  const tables = data.map((item) => item.table);
  return ["all", ...new Set(tables.filter((table) => table))]; // Incluye "all" como la primera pestaña
};

export default function DynamicTabs() {
  const [value, setValue] = React.useState(0); // Controla la pestaña activa
  const [currentPage, setCurrentPage] = React.useState(1); // Controla la página activa
  const itemsPerPage = 6; // Número de elementos por página

  const handleChangeTab = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
    setCurrentPage(1); // Reinicia la paginación al cambiar de pestaña
  };

  const handleChangePage = (event: React.ChangeEvent<unknown>, page: number) => {
    setCurrentPage(page);
  };

  // Crear las pestañas dinámicamente
  const uniqueTables = getUniqueTables();
  const tabsConfig = uniqueTables.map((table) => ({
    label: table === "all" ? "Todos" : table.charAt(0).toUpperCase() + table.slice(1),
    content: data.filter((item) => table === "all" || item.table === table), // Filtra los elementos según la tabla
  }));

  // Calcula los productos visibles en la página actual
  const currentTabContent = tabsConfig[value]?.content || [];
  const startIndex = (currentPage - 1) * itemsPerPage;
  const paginatedContent = currentTabContent.slice(startIndex, startIndex + itemsPerPage);

  return (
    <Box sx={{ width: "100%" }}>
      <Box
        sx={{
          borderBottom: 1,
          borderColor: "divider",
          display: "flex",
          justifyContent: "center",
          width: "100%",
          background: "linear-gradient(to right, rgba(107, 66, 188, 0.5), rgba(79, 241, 254, 0.5))",
        }}
      >
        <Tabs
          value={value}
          onChange={handleChangeTab}
          aria-label="dynamic tabs example"
          sx={{
            "& .MuiTabs-indicator": {
              backgroundColor: "#c27fc5",
            },
          }}
        >
          {tabsConfig.map((tab, index) => (
            <Tab
              key={index}
              label={tab.label}
              {...a11yProps(index)}
              sx={{
                fontSize: "2.4rem",
                color: value === index ? "#561290" : "white",
                textShadow: "0.1rem 0.1rem 0.5rem rgba(85, 18, 144, 0.61)",
                textTransform: "none",
                "&.Mui-selected": {
                  color: "#561290",
                },
                fontFamily: "Lobster, sans-serif",
                fontWeight: 400,
                fontStyle: "normal",
              }}
            />
          ))}
        </Tabs>
      </Box>
      {tabsConfig.map((tab, index) => (
        <CustomTabPanel key={index} value={value} index={index}>
          <ProductCards table="custom" data={paginatedContent} />
            <Stack spacing={2} sx={{ mt: 4, alignItems: "center" }}>
            <Pagination
              count={Math.ceil(currentTabContent.length / itemsPerPage)}
              page={currentPage}
              onChange={handleChangePage}
              sx={{
              "& .MuiPaginationItem-root": {
                fontFamily: "Lobster, sans-serif",
                padding: "2rem",
                borderRadius: "10rem",
                fontSize: "2.4rem",
                backgroundColor: "rgba(255, 126, 197, 0.8)",
                boxShadow: "0.4rem 0.4rem 1.0rem #0000004d",
                textShadow: '0.1rem 0.1rem 0.5rem #561290',
                color: "white",
                "&:hover": {
                backgroundColor: "#561290",
                },
                "&.Mui-selected": {
                backgroundColor: "#e033c4",
                color: "white",
                },
              },
              }}
            />
            </Stack>
        </CustomTabPanel>
      ))}
    </Box>
  );
}

import * as React from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import ProductCards from './ProductCards.tsx';
import data from '../../data.json'; // Asegúrate de que la ruta sea correcta

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
      {value === index && (
        <Box sx={{ p: 3 }}>
          {children}
        </Box>
      )}
    </div>
  );
}

function a11yProps(index: number) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

// Obtiene las tablas únicas del JSON
const getUniqueTables = () => {
  const tables = data.map((item) => item.table);
  return ["all", ...new Set(tables.filter((table) => table))]; // Incluye "all" como la primera pestaña
};

export default function DynamicTabs() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  // Crear las pestañas dinámicamente
  const uniqueTables = getUniqueTables();
  const tabsConfig = uniqueTables.map((table) => ({
    label: table === "all" ? "Todos" : table.charAt(0).toUpperCase() + table.slice(1),
    content: <ProductCards table={table} />,
  }));

  return (
    <Box sx={{ width: '100%' }}>
      <Box
        sx={{
          borderBottom: 1,
          borderColor: 'divider',
          display: 'flex',
          justifyContent: 'center',
          width: '100%',
          background: 'linear-gradient(to right, rgba(107, 66, 188, 0.5), rgba(79, 241, 254, 0.5))',
        }}
      >
        <Tabs
          value={value}
          onChange={handleChange}
          aria-label="dynamic tabs example"
          sx={{
            '& .MuiTabs-indicator': {
              backgroundColor: '#c27fc5',
            },
          }}
        >
          {tabsConfig.map((tab, index) => (
            <Tab
              key={index}
              label={tab.label}
              {...a11yProps(index)}
              sx={{
                fontSize: '2rem', 
                color: value === index ? '#c27fc5' : 'white',
                textShadow: ' 0.1rem 0.1rem 0.5rem #561290',
                textTransform: 'none',
                '&.Mui-selected': {
                  color: '#c27fc5',
                },
                fontFamily: "Lobster, sans-serif",
                fontWeight: 400,
                fontStyle: 'normal',
              }}
            />
          ))}
        </Tabs>
      </Box>
      {tabsConfig.map((tab, index) => (
        <CustomTabPanel key={index} value={value} index={index}>
          {tab.content}
        </CustomTabPanel>
      ))}
    </Box>
  );
}

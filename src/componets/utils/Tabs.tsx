import * as React from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import ProductCards from './ProductCards.tsx';

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

// Arreglo con la configuración de las pestañas y sus contenidos
const tabsConfig = [
  { label: 'Todos', content: <ProductCards table="all" /> },
  { label: 'Computadores', content: <ProductCards table="computers" /> },
  { label: 'Celulares', content: <ProductCards table="phones" /> },
  { label: 'Monitores', content: <ProductCards table="monitor" /> },
];

export default function DynamicTabs() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: '100%' }}>
      <Box
        sx={{
          borderBottom: 1,
          borderColor: 'divider',
          display: 'flex',
          justifyContent: 'center',
          width: '100%',
          background: 'linear-gradient(to right, rgba(89, 161, 91, 0.35), rgba(57, 144, 157, 0.43))',
        }}
      >
        <Tabs
          value={value}
          onChange={handleChange}
          aria-label="dynamic tabs example"
          sx={{
            '& .MuiTabs-indicator': {
              backgroundColor: '#07c373',
            },
          }}
        >
          {tabsConfig.map((tab, index) => (
            <Tab
              key={index}
              label={tab.label}
              {...a11yProps(index)}
              sx={{
                fontSize: '2rem', // Tamaño de fuente aplicado a todas las pestañas
                color: value === index ? '#07c373' : 'white',
                textTransform: 'none', // Evita las mayúsculas automáticas
                '&.Mui-selected': {
                  color: '#07c373',
                },
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

import * as React from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
  className?: string;
}

function CustomTabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      className='tab-panel'
      {...other}
    >
      {value === index && <Box sx={{ p: 3 }}>{children}</Box>}
    </div>
  );
}

function a11yProps(index: number) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

export default function BasicTabs() {
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
          aria-label="basic tabs example"
          sx={{
            '& .MuiTabs-indicator': {
              backgroundColor: '#07c373', // Cambia el color de la línea del indicador
            },
          }}
        >
          <Tab
            label="Item One"
            {...a11yProps(0)}
            sx={{
              color: value === 0 ? '#07c373' : 'white', // Cambia color dependiendo si está seleccionado
              '&.Mui-selected': {
                color: '#07c373', // Color cuando está seleccionado
              },
            }}
          />
          <Tab
            label="Item Two"
            {...a11yProps(1)}
            sx={{
              color: value === 1 ? '#07c373' : 'white',
              '&.Mui-selected': {
                color: '#07c373',
              },
            }}
          />
          <Tab
            label="Item Three"
            {...a11yProps(2)}
            sx={{
              color: value === 2 ? '#07c373' : 'white',
              '&.Mui-selected': {
                color: '#07c373',
              },
            }}
          />
        </Tabs>
      </Box>
      <CustomTabPanel value={value} index={0}>
        Item One
      </CustomTabPanel>
      <CustomTabPanel value={value} index={1}>
        Item Two
      </CustomTabPanel>
      <CustomTabPanel value={value} index={2}>
        Item Three
      </CustomTabPanel>
    </Box>
  );
}

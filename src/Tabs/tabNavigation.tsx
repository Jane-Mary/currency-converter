import React from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";

interface TabNavigationProps {
  value: number;
  handleChange: (event: React.SyntheticEvent, newValue: number) => void;
}

const TabNavigation: React.FC<TabNavigationProps> = ({
  value,
  handleChange,
}) => {
  const a11yProps = (index: number) => ({
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  });

  return (
    <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
      <Tabs
        value={value}
        onChange={handleChange}
        aria-label="basic tabs example"
      >
        <Tab
          label="Convert"
          {...a11yProps(0)}
          sx={{ marginRight: "10rem", marginLeft: "2rem" }}
        />
        <Tab label="Send" {...a11yProps(1)} sx={{ marginRight: "12rem" }} />
        <Tab label="Graphics" {...a11yProps(2)} sx={{ marginRight: "10rem" }} />
        <Tab label="Alert" {...a11yProps(3)} />
      </Tabs>
    </Box>
  );
};

export default TabNavigation;

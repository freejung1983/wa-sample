import MenuIcon from "@mui/icons-material/Menu";
import { Box, IconButton, Tab, Tabs } from "@mui/material";
import React, { useState } from "react";

const navigationTabs = [
  { label: "Dashboard", value: 0, active: true },
  { label: "RO List", value: 1, active: false },
  { label: "Customer", value: 2, active: false },
];

export default function KPIOverviewSOverlapGroupWrapperSubsectionection() {
  const [activeTab, setActiveTab] = useState(0);

  const handleTabChange = (event: React.SyntheticEvent, newValue: number) => {
    setActiveTab(newValue);
  };

  return (
    <Box
      component="nav"
      sx={{
        position: "relative",
        width: "100%",
        height: "54px",
        borderBottom: "1px solid #3d5144",
        backgroundColor: "transparent",
      }}
      className="translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:0ms]"
    >
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          height: "100%",
          px: 2,
        }}
      >
        <Tabs
          value={activeTab}
          onChange={handleTabChange}
          sx={{
            minHeight: "54px",
            "& .MuiTabs-indicator": {
              backgroundColor: "#e5e8ea",
              height: "3px",
            },
            "& .MuiTab-root": {
              minHeight: "54px",
              textTransform: "none",
              fontFamily: "Spline Sans, Helvetica",
              fontWeight: "bold",
              fontSize: "14px",
              lineHeight: "21px",
              color: "#9eb7a8",
              "&.Mui-selected": {
                color: "white",
              },
            },
          }}
        >
          {navigationTabs.map((tab) => (
            <Tab
              key={tab.value}
              label={tab.label}
              value={tab.value}
              sx={{
                borderBottom:
                  tab.value === activeTab
                    ? "3px solid #e5e8ea"
                    : "3px solid #9eb7a8",
                boxShadow:
                  tab.value === 2 ? "0px 4px 4px rgba(0, 0, 0, 0.25)" : "none",
              }}
            />
          ))}
        </Tabs>

        <IconButton
          sx={{
            color: "white",
            width: "30px",
            height: "30px",
          }}
        >
          <MenuIcon />
        </IconButton>
      </Box>
    </Box>
  );
};

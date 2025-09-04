import {
  AppBar, 
  Badge,  
  Box,
  Toolbar,
  Autocomplete,
  Avatar,
  Button,
  IconButton,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import { 
  Dashboard as DashboardIcon,
  Add as AddIcon,
  Person as PersonIcon,
} from '@mui/icons-material'
import Image from 'next/image';

export default function KPIOverviewSection() {
    const [searchValue, setSearchValue] = useState<string>("");
    const [searchOptions] = useState<string[]>([]);
  
    return (
      <Box
        className="animate-fade-in opacity-0"
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          px: 5,
          py: 1.5,
          borderBottom: "1px solid #e5e8ea",
          width: "100%",
          position: "relative",
        }}
      >
        <Stack
          direction="row"
          alignItems="center"
          spacing={4}
          sx={{ width: "620px" }}
        >
          <Stack direction="row" alignItems="center" spacing={2}>
            <Box
              component="img"
              src="https://c.animaapp.com/mf4p53jkqcbhkZ/img/depth-5--frame-0.svg"
              alt="Depth frame"
              sx={{ flexShrink: 0 }}
            />
            <Typography
              variant="h6"
              sx={{
                fontFamily: "Spline Sans, Helvetica",
                fontWeight: "bold",
                color: "white",
                fontSize: "18px",
                lineHeight: "23px",
                whiteSpace: "nowrap",
              }}
            >
              Work Automation
            </Typography>
          </Stack>
  
          <Box sx={{ maxWidth: "256px", width: "256px" }}>
            <Autocomplete
              options={searchOptions}
              value={searchValue}
              onInputChange={(event, newValue) => setSearchValue(newValue)}
              renderInput={(params) => (
                <TextField
                  {...params}
                  placeholder="Search"
                  variant="outlined"
                  sx={{
                    width: "350px",
                    "& .MuiOutlinedInput-root": {
                      backgroundColor: "#28382d",
                      borderRadius: "12px",
                      color: "#9eb7a8",
                      fontSize: "16px",
                      fontFamily: "Spline Sans, Helvetica",
                      "& fieldset": {
                        border: "none",
                      },
                      "& .MuiInputBase-input": {
                        padding: "8px 16px 8px 8px",
                        color: "#9eb7a8",
                      },
                      "& .MuiInputBase-input::placeholder": {
                        color: "#9eb7a8",
                        opacity: 1,
                      },
                    },
                    "& .MuiInputAdornment-root": {
                      marginLeft: "16px",
                      marginRight: "0px",
                    },
                  }}
                  InputProps={{
                    ...params.InputProps,
                    startAdornment: (
                      <Box
                        component="img"
                        src="https://c.animaapp.com/mf4p53jkqcbhkZ/img/icon-search.svg"
                        alt="Search icon"
                        sx={{ width: "24px", height: "24px", ml: 2 }}
                      />
                    ),
                  }}
                />
              )}
            />
          </Box>
        </Stack>
  
        <Stack
          direction="row"
          alignItems="center"
          spacing={1.25}
          sx={{ width: "580px", justifyContent: "flex-end" }}
        >
          <Stack direction="row" alignItems="center" spacing={1}>
            <IconButton
              sx={{
                width: "40px",
                height: "40px",
                borderRadius: "20px",
                position: "relative",
                overflow: "visible",
              }}
            >
              <Box
                component="img"
                src="https://c.animaapp.com/mf4p53jkqcbhkZ/img/icon-notice.svg"
                alt="Notifications"
                sx={{ width: "20px", height: "20px" }}
              />
              <Box
                sx={{
                  position: "absolute",
                  top: "0px",
                  right: "10px",
                  width: "12px",
                  height: "12px",
                  backgroundColor: "#38e07a",
                  borderRadius: "7px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <Typography
                  sx={{
                    fontFamily: "Spline Sans, Helvetica",
                    fontSize: "8px",
                    color: "#111614",
                    lineHeight: "14px",
                    fontWeight: "normal",
                  }}
                >
                  3
                </Typography>
              </Box>
            </IconButton>
  
            <IconButton
              sx={{
                width: "40px",
                height: "40px",
                borderRadius: "20px",
              }}
            >
              <Box
                component="img"
                src="https://c.animaapp.com/mf4p53jkqcbhkZ/img/icon-info.svg"
                alt="Info"
                sx={{ width: "20px", height: "20px" }}
              />
            </IconButton>
  
            <Stack
              direction="row"
              alignItems="center"
              spacing={1}
              sx={{
                height: "40px",
                px: 1.25,
                borderRadius: "20px",
                cursor: "pointer",
              }}
            >
              <Avatar
                sx={{
                  width: "40px",
                  height: "40px",
                  backgroundImage:
                    "url(https://c.animaapp.com/mf4p53jkqcbhkZ/img/depth-4--frame-2.png)",
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
              />
              <Typography
                sx={{
                  fontFamily: "Spline Sans, Helvetica",
                  fontWeight: "bold",
                  color: "white",
                  fontSize: "14px",
                  lineHeight: "21px",
                  textAlign: "center",
                }}
              >
                SA
              </Typography>
            </Stack>
          </Stack>
  
          <Button
            variant="contained"
            sx={{
              minWidth: "84px",
              height: "40px",
              backgroundColor: "#38e07a",
              borderRadius: "20px",
              px: 2,
              fontFamily: "Spline Sans, Helvetica",
              fontWeight: "bold",
              fontSize: "14px",
              color: "#111614",
              textTransform: "none",
              "&:hover": {
                backgroundColor: "#32d16e",
              },
            }}
          >
            + RO Creation
          </Button>
  
          <Button
            variant="contained"
            sx={{
              minWidth: "84px",
              height: "40px",
              backgroundColor: "#28382d",
              borderRadius: "20px",
              px: 2,
              fontFamily: "Spline Sans, Helvetica",
              fontWeight: "bold",
              fontSize: "14px",
              color: "white",
              textTransform: "none",
              "&:hover": {
                backgroundColor: "#1f2b24",
              },
            }}
          >
            Scan (VIN)
          </Button>
  
          <IconButton
            sx={{
              width: "40px",
              height: "40px",
              backgroundColor: "#28382d",
              borderRadius: "20px",
              "&:hover": {
                backgroundColor: "#1f2b24",
              },
            }}
          >
            <Box
              component="img"
              src="https://c.animaapp.com/mf4p53jkqcbhkZ/img/icon-courtesy.svg"
              alt="Courtesy"
              sx={{ height: "24px" }}
            />
          </IconButton>
  
          <IconButton
            sx={{
              width: "40px",
              height: "40px",
              borderRadius: "20px",
            }}
          >
            <Box
              component="img"
              src="https://c.animaapp.com/mf4p53jkqcbhkZ/img/icon-setting.svg"
              alt="Settings"
              sx={{ width: "20px", height: "20px" }}
            />
          </IconButton>
        </Stack>
      </Box>
    );
  };
  
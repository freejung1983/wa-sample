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

export default function Header() {
    const [searchValue, setSearchValue] = useState<string>("");
    const [searchOptions] = useState<string[]>([]);
  
    return (
      <Box
        className="nav-header"
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          px: 5,
          py: 1.5
        }}
      >
        <Stack
          direction="row"
          alignItems="center"
          spacing={4}
          className="space-x-6"
        >
          <Stack direction="row" alignItems="center" spacing={2}>
            <DashboardIcon className="text-green-400 text-2xl" />
            <Typography
              variant="h6"
              className="text-white font-semibold mr-2"
            >
              Work Automation
            </Typography>
          </Stack>
  
          <Box className="search-bar w-[350px]">
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
                    width: "100%",
                    "& .MuiOutlinedInput-root": {
                      backgroundColor: "#28382d",
                      borderRadius: "12px",
                      color: "#9eb7a8",
                      fontSize: "16px",
                      padding: "6px 12px",
                      fontFamily: "Spline Sans, Helvetica",
                      "& fieldset": {
                        border: "none",
                      },
                      "& .MuiInputBase-input": {
                        padding: "2px 16px 2px 8px",
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
                      <Image 
                        src="/images/icon_search.svg" 
                        alt="Search" 
                        width={24} 
                        height={24}
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
          className="flex-end space-x-2 ml-auto"
        >
          <Stack direction="row" alignItems="center" spacing={1}>
            <IconButton className="text-gray-400 hover:text-white w-[40px] h-[40px]">
               <Badge badgeContent={3} color="success">
                 <Image 
                  src="/images/icon_notice.svg" 
                  alt="Notifications" 
                  width={20} 
                  height={20}
                />
              </Badge>
            </IconButton>
            <IconButton className="text-gray-400 hover:text-white w-[40px] h-[40px]">
              <Image 
                src="/images/icon_info.svg" 
                alt="Help" 
                width={20} 
                height={20}
              />
            </IconButton>
            <Box className="flex items-center space-x-2 ml-4 w-[70px]">
              <Avatar className="w-[40px] h-[40px]">
                <PersonIcon />
              </Avatar>
              <Typography variant="body2" className="text-white text-sm">
                SA
              </Typography>
            </Box>
          </Stack>

          <Button 
            variant="contained"
            className="btn-primary btn-rounded-full px-4 ml-2 h-[40px] font-semibold"
          >
            + RO Creation
          </Button>
          <Button 
            variant="contained"
            className="btn-secondary hover:bg-[#1f2b24] btn-rounded-full px-4 text-white font-semibold h-[40px]"
          >
            Scan (VIN)
          </Button>

          <IconButton 
            className="btn-icon hover:bg-[#1f2b24] btn-rounded-full w-[40px] h-[40px]"
          >
            <Image 
              src="/images/icon_courtesy.svg" 
              alt="Car" 
              width={20} 
              height={20}
              className="w-[24px] h-[24px]"
            />
          </IconButton>

          <IconButton className="text-gray-400 hover:text-white w-[40px] h-[40px]">
            <Image 
              src="/images/icon_setting.svg" 
              alt="Settings" 
              width={20} 
              height={20}
              className="w-5 h-5"
            />
          </IconButton>
        </Stack>
      </Box>
    );
  };
  
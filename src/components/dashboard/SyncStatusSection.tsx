import ChevronLeft from "@mui/icons-material/ChevronLeft";
import ChevronRight from "@mui/icons-material/ChevronRight";
import { Box, IconButton, Typography } from "@mui/material";
import React from "react";

const stepData = [
  { number: 1, isActive: true },
  { number: 2, isActive: false },
  { number: 3, isActive: false },
];

export default function SyncStatusSection() {
  return (
    <Box
      display="flex"
      alignItems="center"
      justifyContent="center"
      p={2}
      className="translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:200ms]"
    >
      <IconButton
        sx={{
          width: 40,
          height: 40,
          color: "white",
        }}
      >
        <ChevronLeft />
      </IconButton>

      {stepData.map((step) => (
        <Box
          key={step.number}
          display="flex"
          alignItems="center"
          justifyContent="center"
          width={40}
          height={40}
          borderRadius="20px"
          bgcolor={step.isActive ? "#28382d" : "transparent"}
          mx={0.5}
        >
          <Typography
            variant="body2"
            fontWeight={step.isActive ? "bold" : "normal"}
            color="white"
            fontSize="14px"
          >
            {step.number}
          </Typography>
        </Box>
      ))}

      <IconButton
        sx={{
          width: 40,
          height: 40,
          color: "white",
        }}
      >
        <ChevronRight />
      </IconButton>
    </Box>
  );
};

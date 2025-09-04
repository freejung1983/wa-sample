import CalendarToday from "@mui/icons-material/CalendarToday";
import CheckCircle from "@mui/icons-material/CheckCircle";
import DirectionsCar from "@mui/icons-material/DirectionsCar";
import { Box, Grid, Paper, Stack, Typography } from "@mui/material";
import React from "react";

const kpiData = [
  {
    title: "Today's Bookings/Check-ins",
    value: "15/12",
  },
  {
    title: "FI Waiting",
    value: "3",
  },
  {
    title: "Scheduled Delivery",
    value: "8",
  },
  {
    title: "Courtesy Car Allocation",
    value: "Available",
  },
];

const timelineData = [
  {
    icon: CalendarToday,
    text: "Reservation - 8:00 AM - Sarah Johnson",
  },
  {
    icon: DirectionsCar,
    text: "Arrival - 9:15 AM - Michael Chen",
  },
  {
    icon: CheckCircle,
    text: "Check-in - 10:30 AM - Emily Davis",
  },
  {
    icon: CalendarToday,
    text: "Reservation - 11:45 AM - David Lee",
  },
  {
    icon: DirectionsCar,
    text: "Arrival - 1:00 PM - Jessica Wilson",
  },
  {
    icon: CalendarToday,
    text: "Reservation - 2:00 PM - Sarah Johnson",
  },
  {
    icon: DirectionsCar,
    text: "Arrival - 4:00 PM - Michael Chen",
  }
];

export default function KPIandTimelineSection() {
  return (
    <Grid container spacing={6}>
      {/* Left Column: KPI Overview */}
      <Grid item xs={12} lg={7}>
        <Typography variant="h3" className="header-md text-white mb-1">
          KPI Overview
        </Typography>

        <Grid container spacing={2} sx={{ py: 2 }}>
          {kpiData.map((kpi, index) => (
            <Grid item xs={6} key={index}>
              <Paper
                sx={{
                  p: 3,
                  backgroundColor: "transparent",
                  border: "1px solid #3d5144",
                  borderRadius: "12px",
                  minHeight: "120px",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between",
                }}
              >
                <Typography
                  sx={{
                    fontFamily: "Spline Sans, Helvetica",
                    fontWeight: "medium",
                    color: "white",
                    fontSize: "16px",
                    lineHeight: "24px",
                    mb: 1,
                  }}
                >
                  {kpi.title}
                </Typography>
                <Typography
                  sx={{
                    fontFamily: "Spline Sans, Helvetica",
                    fontWeight: "bold",
                    color: "white",
                    fontSize: "24px",
                    lineHeight: "30px",
                  }}
                >
                  {kpi.value}
                </Typography>
              </Paper>
            </Grid>
          ))}
        </Grid>
      </Grid>

      {/* Right Column: Today's Timeline */}
      <Grid item xs={12} lg={5} className="timeline">
        <Typography variant="h3" className="header-md text-white mb-1">
          Today&apos;s Timeline
        </Typography>

        <Box className="timeline-box flex flex-col">
          <Stack spacing={1} className="timeline-item flex flex-col gap-5 py-4">
            {timelineData.map((item, index) => {
              const IconComponent = item.icon;
              return (
                <Box
                  key={index}
                   className=""
                >
                  <Box className="flex items-center gap-2">
                    <IconComponent className="text-white text-lg" />
                    <Typography className="text-white text-md">
                      {item.text}
                    </Typography>
                  </Box>
                </Box>
              );
            })}
          </Stack>
        </Box>
      </Grid>
    </Grid>
  );
};

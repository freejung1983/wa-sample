import {
    Box,
    Chip,
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
    Typography,
  } from "@mui/material";
  import React from "react";
  
  const tableData = [
    {
      roNumber: "RO12345",
      customerVehicle: "Sarah Johnson / Honda Civic",
      bookingDate: "2025-07-26",
      checkIn: "-",
      assignee: "-",
      status: "New Appointment",
      statusColor: "#9eb7a8",
      statusTextColor: "#000000",
    },
    {
      roNumber: "RO12346",
      customerVehicle: "Michael Chen / Toyota Camry",
      bookingDate: "2025-07-26",
      checkIn: "2025-07-26 12:45",
      assignee: "Alex Turner",
      status: "Check-in",
      statusColor: "#28382d",
      statusTextColor: "#ffffff",
    },
    {
      roNumber: "RO12347",
      customerVehicle: "Emily Davis / Ford Focus",
      bookingDate: "2025-07-25",
      checkIn: "2025-07-25 13:20",
      assignee: "Alex Turner",
      status: "Created",
      statusColor: "#28382d",
      statusTextColor: "#ffffff",
    },
    {
      roNumber: "RO12348",
      customerVehicle: "David Lee / BMW 3 Series",
      bookingDate: "2025-07-23",
      checkIn: "2025-07-23 15:25",
      assignee: "Alex Turner",
      status: "Ready for Delivery",
      statusColor: "#28382d",
      statusTextColor: "#ffffff",
    },
    {
      roNumber: "RO12349",
      customerVehicle: "Jessica Wilson / Mercedes C-Class",
      bookingDate: "2025-07-22",
      checkIn: "2025-07-22 17:00",
      assignee: "Alex Turner",
      status: "Completed",
      statusColor: "#28382d",
      statusTextColor: "#ffffff",
    },
  ];
  
  export default function ROInboxSection() {
    return (
      <Box>
        <TableContainer
          sx={{
            backgroundColor: "#111614",
            borderRadius: 3,
            border: "1px solid #3d5144",
            overflow: "hidden",
          }}
        >
          <Table>
            <TableHead>
              <TableRow
                sx={{
                  backgroundColor: "#1c2621",
                  "& .MuiTableCell-root": {
                    borderBottom: "none",
                    padding: "12px 16px",
                  },
                }}
              >
                <TableCell sx={{ width: 137 }}>
                  <Typography
                    variant="body2"
                    sx={{
                      fontFamily: "Spline Sans, Helvetica",
                      fontWeight: 500,
                      color: "white",
                      fontSize: "14px",
                      lineHeight: "21px",
                    }}
                  >
                    RO#
                  </Typography>
                </TableCell>
                <TableCell sx={{ width: 188 }}>
                  <Typography
                    variant="body2"
                    sx={{
                      fontFamily: "Spline Sans, Helvetica",
                      fontWeight: 500,
                      color: "white",
                      fontSize: "14px",
                      lineHeight: "21px",
                    }}
                  >
                    Customer/Vehicle
                  </Typography>
                </TableCell>
                <TableCell sx={{ width: 135 }}>
                  <Typography
                    variant="body2"
                    sx={{
                      fontFamily: "Spline Sans, Helvetica",
                      fontWeight: 500,
                      color: "white",
                      fontSize: "14px",
                      lineHeight: "21px",
                    }}
                  >
                    Booking Date
                  </Typography>
                </TableCell>
                <TableCell sx={{ width: 135 }}>
                  <Typography
                    variant="body2"
                    sx={{
                      fontFamily: "Spline Sans, Helvetica",
                      fontWeight: 500,
                      color: "white",
                      fontSize: "14px",
                      lineHeight: "21px",
                    }}
                  >
                    Check-in
                  </Typography>
                </TableCell>
                <TableCell sx={{ width: 140 }}>
                  <Typography
                    variant="body2"
                    sx={{
                      fontFamily: "Spline Sans, Helvetica",
                      fontWeight: 500,
                      color: "white",
                      fontSize: "14px",
                      lineHeight: "21px",
                    }}
                  >
                    Assignee
                  </Typography>
                </TableCell>
                <TableCell sx={{ width: 219 }}>
                  <Typography
                    variant="body2"
                    sx={{
                      fontFamily: "Spline Sans, Helvetica",
                      fontWeight: 500,
                      color: "white",
                      fontSize: "14px",
                      lineHeight: "21px",
                    }}
                  >
                    Status
                  </Typography>
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {tableData.map((row, index) => (
                <TableRow
                  key={row.roNumber}
                  sx={{
                    height: 72,
                    borderTop: "1px solid #e5e8ea",
                    "& .MuiTableCell-root": {
                      borderBottom: "none",
                      padding: "8px 16px",
                    },
                  }}
                >
                  <TableCell>
                    <Typography
                      variant="body2"
                      sx={{
                        fontFamily: "Spline Sans, Helvetica",
                        fontWeight: 400,
                        color: "white",
                        fontSize: "14px",
                        lineHeight: "21px",
                      }}
                    >
                      {row.roNumber}
                    </Typography>
                  </TableCell>
                  <TableCell>
                    <Typography
                      variant="body2"
                      sx={{
                        fontFamily: "Spline Sans, Helvetica",
                        fontWeight: 400,
                        color: "#9eb7a8",
                        fontSize: "14px",
                        lineHeight: "21px",
                      }}
                    >
                      {row.customerVehicle}
                    </Typography>
                  </TableCell>
                  <TableCell>
                    <Typography
                      variant="body2"
                      sx={{
                        fontFamily: "Spline Sans, Helvetica",
                        fontWeight: 400,
                        color: "#9eb7a8",
                        fontSize: "14px",
                        lineHeight: "21px",
                      }}
                    >
                      {row.bookingDate}
                    </Typography>
                  </TableCell>
                  <TableCell>
                    <Typography
                      variant="body2"
                      sx={{
                        fontFamily: "Spline Sans, Helvetica",
                        fontWeight: 400,
                        color: "#9eb7a8",
                        fontSize: "14px",
                        lineHeight: "21px",
                      }}
                    >
                      {row.checkIn}
                    </Typography>
                  </TableCell>
                  <TableCell>
                    <Typography
                      variant="body2"
                      sx={{
                        fontFamily: "Spline Sans, Helvetica",
                        fontWeight: 400,
                        color: "#9eb7a8",
                        fontSize: "14px",
                        lineHeight: "21px",
                      }}
                    >
                      {row.assignee}
                    </Typography>
                  </TableCell>
                  <TableCell>
                    <Chip
                      label={row.status}
                      sx={{
                        backgroundColor: row.statusColor,
                        color: row.statusTextColor,
                        fontFamily: "Spline Sans, Helvetica",
                        fontWeight: 500,
                        fontSize: "14px",
                        lineHeight: "21px",
                        borderRadius: "16px",
                        height: "32px",
                        minWidth: "84px",
                        maxWidth: "480px",
                        "& .MuiChip-label": {
                          padding: "0 16px",
                          whiteSpace: "nowrap",
                        },
                      }}
                    />
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Box>
    );
  };
  
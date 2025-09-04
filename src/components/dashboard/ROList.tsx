'use client'

import { 
  Box, 
  Typography, 
  Table, 
  TableBody, 
  TableCell, 
  TableContainer, 
  TableHead, 
  TableRow, 
  Paper, 
  Chip,
  Button,
  IconButton
} from '@mui/material'
import { 
  CalendarToday as CalendarIcon,
  FilterList as FilterIcon,
  Group as GroupIcon,
  Sync as SyncIcon
} from '@mui/icons-material'
import ROListFilter from '@/components/dashboard/ROListFilter'
import ROInboxSection from '@/components/dashboard/ROInboxSection'

interface ROData {
  roNumber: string
  customer: string
  vehicle: string
  bookingDate: string
  checkin: string
  assignee: string
  status: string
  statusColor: string
}
  
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

export default function ROList() {
  return (
    <Box className="mt-10">
      {/* Filters */}
      <ROListFilter />

      <Typography variant="h3" className="header-md text-white mb-3">
        RO Inbox
      </Typography>

      {/* RO Table */}
      <ROInboxSection />

      {/* Pagination and Sync Status */}
      <Box className="flex flex-col items-center justify-center mt-6">
        <Box className="pagination-box flex items-center justify-center space-x-2">
          <Button size="small" className="text-gray-400 hover:text-white">‹</Button>
          <Button size="small" className="active text-white px-4 py-2 rounded-lg">1</Button>
          <Button size="small" className="text-gray-400 hover:text-white px-4 py-2">2</Button>
          <Button size="small" className="text-gray-400 hover:text-white px-4 py-2">3</Button>
          <Button size="small" className="text-gray-400 hover:text-white">›</Button>
        </Box>
        <Box className="flex items-center justify-center my-6 space-x-2 text-gray-400">
          <Button size="small" className="min-w-[14px]">
            <SyncIcon className="text-sm text-white" />
          </Button>
          <Typography variant="caption" className="text-[14px]">Real-time sync status: Synced</Typography>
        </Box>
      </Box>
    </Box>
  )
}

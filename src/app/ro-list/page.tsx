'use client'

import { Box, Container, Typography, Grid, Card, CardContent, Button, Chip } from '@mui/material'
import { useState } from 'react'
import { 
  Add as AddIcon,
  FilterList as FilterIcon,
  Search as SearchIcon,
  Sort as SortIcon
} from '@mui/icons-material'
import Header from '@/components/layout/Header'
import SANavigation from '@/components/layout/SANavigation'
import ROTable from '@/components/dashboard/ROList'

export default function ROListPage() {
  const [currentTab] = useState(1) // RO List 탭 활성화
  
  // RO 데이터 (더 많은 샘플 데이터)
  const roData = [
    { 
      roNumber: "RO12345", 
      customer: "Sarah Johnson", 
      vehicle: "Honda Civic", 
      bookingDate: "2025-07-26", 
      checkin: "-", 
      assignee: "-", 
      status: "New Appointment",
      statusColor: "status-new"
    },
    { 
      roNumber: "RO12346", 
      customer: "Michael Chen", 
      vehicle: "Toyota Camry", 
      bookingDate: "2025-07-26", 
      checkin: "2025-07-26 12:45", 
      assignee: "Alex Turner", 
      status: "Check-in",
      statusColor: "status-checkin"
    },
    { 
      roNumber: "RO12347", 
      customer: "Emily Davis", 
      vehicle: "Ford Focus", 
      bookingDate: "2025-07-25", 
      checkin: "2025-07-25 13:20", 
      assignee: "Alex Turner", 
      status: "Created",
      statusColor: "status-created"
    },
    { 
      roNumber: "RO12348", 
      customer: "David Lee", 
      vehicle: "BMW 3 Series", 
      bookingDate: "2025-07-23", 
      checkin: "2025-07-23 15:25", 
      assignee: "Alex Turner", 
      status: "Ready for Delivery",
      statusColor: "status-ready"
    },
    { 
      roNumber: "RO12349", 
      customer: "Jessica Wilson", 
      vehicle: "Mercedes C-Class", 
      bookingDate: "2025-07-22", 
      checkin: "2025-07-22 17:00", 
      assignee: "Alex Turner", 
      status: "Completed",
      statusColor: "status-completed"
    },
    { 
      roNumber: "RO12350", 
      customer: "Robert Brown", 
      vehicle: "Audi A4", 
      bookingDate: "2025-07-21", 
      checkin: "2025-07-21 10:30", 
      assignee: "Sarah Miller", 
      status: "In Progress",
      statusColor: "status-info"
    }
  ]

  return (
    <Box className="min-h-screen">
      {/* SA 전용 헤더 */}
      <Header />

      {/* SA 전용 네비게이션 */}
      <SANavigation currentTab={currentTab} />

      <Container maxWidth="lg" className="container-main py-6">
        {/* Page Header */}
        <Box className="flex items-center justify-between mb-8">
          <Typography variant="h4" className="header-lg text-white">
            RO List
          </Typography>
          <Button 
            variant="contained" 
            startIcon={<AddIcon />}
            className="btn-primary"
          >
            Create New RO
          </Button>
        </Box>

        {/* Quick Stats */}
        <Grid container spacing={4} className="mb-10">
          <Grid item xs={12} sm={6} md={3}>
            <Card className="kpi-card text-center">
              <CardContent className="p-6">
                <Typography variant="h4" className="text-3xl font-bold text-green-500 mb-2">
                  25
                </Typography>
                <Typography variant="body2" className="body-sm text-gray-400">
                  Total ROs
                </Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <Card className="kpi-card text-center">
              <CardContent className="p-6">
                <Typography variant="h4" className="text-3xl font-bold text-blue-500 mb-2">
                  8
                </Typography>
                <Typography variant="body2" className="body-sm text-gray-400">
                  Pending
                </Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <Card className="kpi-card text-center">
              <CardContent className="p-6">
                <Typography variant="h4" className="text-3xl font-bold text-amber-500 mb-2">
                  12
                </Typography>
                <Typography variant="body2" className="body-sm text-gray-400">
                  In Progress
                </Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <Card className="kpi-card text-center">
              <CardContent className="p-6">
                <Typography variant="h4" className="text-3xl font-bold text-emerald-500 mb-2">
                  5
                </Typography>
                <Typography variant="body2" className="body-sm text-gray-400">
                  Completed
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        </Grid>

        {/* RO Table */}
        <ROTable />
      </Container>
    </Box>
  )
}

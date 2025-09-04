'use client'

import { 
  Box, 
  Container, 
  Typography, 
  Grid, 
  Card, 
  CardContent, 
  Button, 
  TextField,
  InputAdornment,
  Avatar,
  Chip,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper
} from '@mui/material'
import { 
  Add as AddIcon,
  Search as SearchIcon,
  Person as PersonIcon,
  DirectionsCar as CarIcon,
  Phone as PhoneIcon,
  Email as EmailIcon,
  LocationOn as LocationIcon
} from '@mui/icons-material'
import { useState } from 'react'
import Header from '@/components/layout/Header'
import SANavigation from '@/components/layout/SANavigation'

export default function CustomerPage() {
  const [currentTab, setCurrentTab] = useState(2) // Customer 탭 활성화
  const [searchTerm, setSearchTerm] = useState('')

  // 고객 데이터
  const customers = [
    {
      id: 1,
      name: "Sarah Johnson",
      email: "sarah.johnson@email.com",
      phone: "+1-555-0123",
      address: "123 Main St, City, State",
      vehicles: ["Honda Civic 2020", "Toyota Camry 2018"],
      totalROs: 5,
      lastVisit: "2025-07-26",
      status: "Active"
    },
    {
      id: 2,
      name: "Michael Chen",
      email: "michael.chen@email.com",
      phone: "+1-555-0124",
      address: "456 Oak Ave, City, State",
      vehicles: ["BMW 3 Series 2021"],
      totalROs: 3,
      lastVisit: "2025-07-26",
      status: "Active"
    },
    {
      id: 3,
      name: "Emily Davis",
      email: "emily.davis@email.com",
      phone: "+1-555-0125",
      address: "789 Pine Rd, City, State",
      vehicles: ["Ford Focus 2019", "Mercedes C-Class 2022"],
      totalROs: 7,
      lastVisit: "2025-07-25",
      status: "Active"
    }
  ]

  const filteredCustomers = customers.filter(customer =>
    customer.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    customer.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
    customer.vehicles.some(vehicle => vehicle.toLowerCase().includes(searchTerm.toLowerCase()))
  )

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
            Customer Management
          </Typography>
          <Button 
            variant="contained" 
            startIcon={<AddIcon />}
            className="btn-primary"
          >
            Add New Customer
          </Button>
        </Box>

        {/* Search and Stats */}
        <Grid container spacing={4} className="mb-10">
          <Grid item xs={12} md={8}>
            <TextField
              fullWidth
              placeholder="Search customers by name, email, or vehicle..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="search-bar"
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <SearchIcon className="text-gray-400" />
                  </InputAdornment>
                ),
              }}
            />
          </Grid>
          <Grid item xs={12} md={4}>
            <Card className="kpi-card text-center">
              <CardContent className="p-6">
                <Typography variant="h4" className="text-3xl font-bold text-green-500 mb-2">
                  {customers.length}
                </Typography>
                <Typography variant="body2" className="body-sm text-gray-400">
                  Total Customers
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        </Grid>

        {/* Customer List */}
        <Card className="kpi-card">
          <CardContent className="p-0">
            <TableContainer>
              <Table>
                <TableHead>
                  <TableRow className="bg-gray-800">
                    <TableCell className="text-gray-300 font-medium py-4">Customer</TableCell>
                    <TableCell className="text-gray-300 font-medium py-4">Contact Info</TableCell>
                    <TableCell className="text-gray-300 font-medium py-4">Vehicles</TableCell>
                    <TableCell className="text-gray-300 font-medium py-4">Total ROs</TableCell>
                    <TableCell className="text-gray-300 font-medium py-4">Last Visit</TableCell>
                    <TableCell className="text-gray-300 font-medium py-4">Status</TableCell>
                    <TableCell className="text-gray-300 font-medium py-4">Actions</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {filteredCustomers.map((customer) => (
                    <TableRow key={customer.id} className="border-b border-gray-800 hover:bg-gray-800">
                      <TableCell className="py-4">
                        <Box className="flex items-center space-x-3">
                          <Avatar className="w-10 h-10">
                            <PersonIcon />
                          </Avatar>
                          <Box>
                            <Typography variant="body1" className="text-white font-medium">
                              {customer.name}
                            </Typography>
                            <Typography variant="caption" className="text-gray-400">
                              ID: {customer.id}
                            </Typography>
                          </Box>
                        </Box>
                      </TableCell>
                      <TableCell className="py-4">
                        <Box className="space-y-2">
                          <Box className="flex items-center space-x-2">
                            <EmailIcon className="text-gray-400 text-sm" />
                            <Typography variant="body2" className="text-white text-sm">
                              {customer.email}
                            </Typography>
                          </Box>
                          <Box className="flex items-center space-x-2">
                            <PhoneIcon className="text-gray-400 text-sm" />
                            <Typography variant="body2" className="text-white text-sm">
                              {customer.phone}
                            </Typography>
                          </Box>
                          <Box className="flex items-center space-x-2">
                            <LocationIcon className="text-gray-400 text-sm" />
                            <Typography variant="body2" className="text-white text-sm">
                              {customer.address}
                            </Typography>
                          </Box>
                        </Box>
                      </TableCell>
                      <TableCell className="py-4">
                        <Box className="space-y-2">
                          {customer.vehicles.map((vehicle, index) => (
                            <Box key={index} className="flex items-center space-x-2">
                              <CarIcon className="text-gray-400 text-sm" />
                              <Typography variant="body2" className="text-white text-sm">
                                {vehicle}
                              </Typography>
                            </Box>
                          ))}
                        </Box>
                      </TableCell>
                      <TableCell className="py-4">
                        <Typography variant="body1" className="text-white font-medium">
                          {customer.totalROs}
                        </Typography>
                      </TableCell>
                      <TableCell className="py-4">
                        <Typography variant="body2" className="text-gray-300">
                          {customer.lastVisit}
                        </Typography>
                      </TableCell>
                      <TableCell className="py-4">
                        <Chip 
                          label={customer.status} 
                          size="medium"
                          className="status-badge status-active"
                        />
                      </TableCell>
                      <TableCell className="py-4">
                        <Box className="flex space-x-2">
                          <Button 
                            size="small" 
                            variant="outlined"
                            className="btn-secondary"
                          >
                            View
                          </Button>
                          <Button 
                            size="small" 
                            variant="contained"
                            className="btn-primary"
                          >
                            Edit
                          </Button>
                        </Box>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
          </CardContent>
        </Card>
      </Container>
    </Box>
  )
}

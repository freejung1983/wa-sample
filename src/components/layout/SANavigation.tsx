'use client'

import { 
  Box, 
  Container, 
  Tabs, 
  Tab, 
  IconButton 
} from '@mui/material'
import { 
  Dashboard as DashboardIcon,
  List as ListIcon,
  Person as PersonIcon,
  Menu as MenuIcon
} from '@mui/icons-material'
import { useState } from 'react'
import { useRouter } from 'next/navigation'

interface SANavigationProps {
  currentTab?: number
}

export default function SANavigation({ currentTab = 0 }: SANavigationProps) {
  const [tabValue, setTabValue] = useState(currentTab)
  const router = useRouter()

  const handleTabChange = (event: React.SyntheticEvent, newValue: number) => {
    setTabValue(newValue)
    
    // 탭에 따른 페이지 이동
    switch (newValue) {
      case 0: // Dashboard
        router.push('/')
        break
      case 1: // RO List
        router.push('/ro-list')
        break
      case 2: // Customer
        router.push('/customer')
        break
      default:
        router.push('/')
    }
  }

  return (
    <Box>
      <Container maxWidth="lg" className="nav-dashboard border-b border-gray-700 pt-4">
        <Box className="flex items-center justify-between">
          <Tabs 
            value={tabValue} 
            onChange={handleTabChange}
            className="border-b-0"
            indicatorColor="primary"
            textColor="inherit"
          >
            <Tab 
              label="Dashboard" 
              className="tab-active"
              iconPosition="start"
            />
            <Tab 
              label="RO List" 
              className="tab-inactive"
              iconPosition="start"
            />
            <Tab 
              label="Customer" 
              className="tab-inactive"
              iconPosition="start"
            />
          </Tabs>
          <IconButton className="text-gray-400 hover:text-white">
            <MenuIcon />
          </IconButton>
        </Box>
      </Container>
    </Box>
  )
}

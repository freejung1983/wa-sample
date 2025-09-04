'use client'

import { Box, Container, Grid, Stack, Typography } from '@mui/material'
import { 
  CalendarToday as CalendarIcon,
  DirectionsCar as CarIcon,
  Search as SearchIcon,
  CheckCircle as CheckCircleIcon,
  Warning as WarningIcon,
  Info as InfoIcon
} from '@mui/icons-material'
import { useState } from 'react'

// SA 전용 컴포넌트들
import Header from '@/components/layout/Header'
import SANavigation from '@/components/layout/SANavigation'
import ROList from '@/components/dashboard/ROList'
import KPIandTimelineSection from '@/components/dashboard/KPIandTimelineSection'

export default function Home() {
  const [currentTab] = useState(0)

  return (
    <Box className="min-h-screen">
      {/* SA 전용 헤더 */}
      <Header />

      {/* SA 전용 네비게이션 */}
      <SANavigation currentTab={currentTab} />

      <Container maxWidth="lg" className="container-main py-6 px-6">
        <KPIandTimelineSection />        
        <ROList />
      </Container>
    </Box>
  )
}

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
import KPIOverviewSection from '@/components/dashboard/KPIOverviewSection'
import OverlapGroupWrapperSubsection from '@/components/dashboard/OverlapGroupWrapperSubsection'
import SyncStatusSection from '@/components/dashboard/SyncStatusSection'
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

    // <Box
    //   sx={{
    //     width: "100vw",
    //   }}
    //   className="translate-y-[-1rem] animate-fade-in opacity-0"
    // >
    //   <Box
    //     sx={{
    //       width: "100%",
    //     }}
    //   >
    //     <Box
    //       sx={{
    //         display: "flex",
    //         flexDirection: "column",
    //         width: "100%",
    //         alignItems: "flex-start",
    //         position: "relative",
    //         overflow: "hidden",
    //       }}
    //     >
    //       <Stack
    //         direction="column"
    //         sx={{
    //           alignItems: "flex-start",
    //           position: "relative",
    //           width: "100%",
    //         }}
    //       >
    //         <Box>
    //           <Header />
    //         </Box>

    //         <Box
    //           sx={{
    //             alignItems: "flex-start",
    //             justifyContent: "center",
    //             px: { xs: 2, md: 20 },
    //             py: 2.5,
    //             display: "flex",
    //             position: "relative",
    //             width: "100%",
    //           }}
    //         >
    //           {/* <Stack
    //             direction="column"
    //             sx={{
    //               width: { xs: "100%", lg: "1200px" },
    //               alignItems: "flex-start",
    //               position: "relative",
    //             }}
    //             spacing={0}
    //           >
    //             <Box className="animate-fade-up opacity-0 [--animation-delay:400ms]">
    //               <OverlapGroupWrapperSubsection />
    //             </Box>

    //             <Box className="animate-fade-up opacity-0 [--animation-delay:600ms]">
    //               <TimelineSection />
    //             </Box>

    //             <Box className="animate-fade-up opacity-0 [--animation-delay:800ms]">
    //               <CarAllocationSection />
    //             </Box>

    //             <Box
    //               sx={{
    //                 display: "flex",
    //                 flexDirection: "column",
    //                 alignItems: "flex-start",
    //                 pt: 2,
    //                 pb: 1,
    //                 px: 2,
    //                 position: "relative",
    //                 width: "100%",
    //               }}
    //               className="animate-fade-up opacity-0 [--animation-delay:1000ms]"
    //             >
    //               <Typography
    //                 variant="h6"
    //                 sx={{
    //                   color: "white",
    //                   fontSize: "18px",
    //                   lineHeight: "23px",
    //                   position: "relative",
    //                   width: "100%",
    //                   fontFamily: "Spline Sans, Helvetica",
    //                   fontWeight: "bold",
    //                   letterSpacing: 0,
    //                 }}
    //               >
    //                 RO Inbox
    //               </Typography>
    //             </Box>

    //             <Box className="animate-fade-up opacity-0 [--animation-delay:1200ms]">
    //               <ROInboxSection />
    //             </Box>

    //             <Box className="animate-fade-up opacity-0 [--animation-delay:1400ms]">
    //               <SyncStatusSection />
    //             </Box>

    //             <Box
    //               sx={{
    //                 display: "flex",
    //                 flexDirection: "column",
    //                 alignItems: "center",
    //                 pt: 0.5,
    //                 pb: 1.5,
    //                 px: 2,
    //                 position: "relative",
    //                 width: "100%",
    //               }}
    //               className="animate-fade-up opacity-0 [--animation-delay:1600ms]"
    //             >
    //               <Typography
    //                 variant="body2"
    //                 sx={{
    //                   position: "relative",
    //                   width: "100%",
    //                   fontFamily: "Spline Sans, Helvetica",
    //                   fontWeight: "normal",
    //                   color: "#9eb7a8",
    //                   fontSize: "14px",
    //                   textAlign: "center",
    //                   letterSpacing: 0,
    //                   lineHeight: "21px",
    //                 }}
    //               >
    //                 Real-time sync status: Synced
    //               </Typography>
    //             </Box>
    //           </Stack> */}
    //         </Box>
    //       </Stack>
    //     </Box>
    //   </Box>
    // </Box>
  )
}

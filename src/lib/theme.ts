'use client'

import { createTheme } from '@mui/material/styles'

export const theme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#32d16e', // Primary Green
    },
    secondary: {
      main: '#29382E', // Success Green
    },
    background: {
      default: '#111614', // Background Dark - 더 어두운 톤
      paper: '#1a1a1a',   // Surface Dark - 더 어두운 톤
    },
    text: {
      primary: '#ffffff',   // Primary Text
      secondary: '#a1a1aa', // Secondary Text
    },
    grey: {
      400: '#a1a1aa', // Secondary Text
      500: '#71717a', // Muted Text
      600: '#52525b', // Muted Green
      700: '#2a2a2a', // Card Background - 더 어두운 톤
      800: '#1a1a1a', // Surface Dark - 더 어두운 톤
      900: '#0a0a0a', // Background Dark - 더 어두운 톤
    },
    success: {
      main: '#32d16e', // Completed
    },
    warning: {
      main: '#f59e0b', // Created
    },
    info: {
      main: '#3b82f6', // Ready for Delivery
    },
  },
  typography: {
    fontFamily: 'Spline Sans, Helvetica, system-ui, sans-serif',
    h1: { fontSize: '1.5rem', fontWeight: 600, },
    h2: { fontSize: '1.25rem', fontWeight: 500, },
    h3: { fontSize: '1.125rem', fontWeight: 500, },
    h4: { fontSize: '1rem', fontWeight: 500, },
    h5: { fontSize: '0.875rem', fontWeight: 500, },    
    h6: { fontSize: '0.75rem', fontWeight: 500, },
    body1: { fontSize: '1rem', fontWeight: 400, },
    body2: { fontSize: '0.875rem', fontWeight: 400, },
    caption: { fontSize: '0.75rem', fontWeight: 400, },
  },
  components: {
    MuiCard: {
      styleOverrides: {
        root: {
          backgroundColor: '#2a2a2a', // 더 어두운 카드 배경
          border: '1px solid #374151', // 더 어두운 테두리
          borderRadius: '12px', // 더 둥근 모서리
          boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.3), 0 2px 4px -1px rgba(0, 0, 0, 0.2)',
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: '8px', // 더 둥근 모서리
          fontWeight: 500,
          textTransform: 'none',
          color: '#111614',
        },
        contained: {
          backgroundColor: '#38E07A',
          '&:hover': { backgroundColor: '#32d16e', },
        },
        outlined: {
          borderColor: '#374151', // 더 어두운 테두리
          color: '#111614',
          '&:hover': { backgroundColor: '#1a1a1a', borderColor: '#38E07A', },
        },
      },
    },
    MuiAppBar: {
      styleOverrides: {
        root: {
          backgroundColor: '#000000', // 완전한 검은색
          borderBottom: '1px solid #374151', // 더 어두운 테두리
        },
      },
    },
    MuiTab: {
      styleOverrides: {
        root: {
          color: '#a1a1aa',
          '&.Mui-selected': { color: '#ffffff', borderBottom: '2px solid #38E07A', },
          '&:hover': { color: '#d1d5db', },
        },
      },
    },
    MuiTableContainer: {
      styleOverrides: {
        root: {
          backgroundColor: '#2a2a2a', // 더 어두운 테이블 배경
          borderRadius: '12px',
          border: '1px solid #374151',
        },
      },
    },
    MuiTableCell: {
      styleOverrides: {
        root: {
          borderColor: '#374151', // 더 어두운 테두리
        },
        head: {
          backgroundColor: '#1a1a1a', // 더 어두운 헤더 배경
        },
      },
    },
  },
})

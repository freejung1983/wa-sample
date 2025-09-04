# Dashboard Style Guide

## Overview
This style guide defines the design system for the Work Automation Dashboard built with Next.js, Material-UI (MUI), and Tailwind CSS.

## Color Palette

### Primary Colors
- **Background Dark**: `#111614` / `bg-[#111614]`
- **Surface Dark**: `#1a1a1a` / `bg-gray-900`
- **Primary Green**: `#38E07A` / `bg-[#38E07A]`
- **Success Green**: `#38E07A` / `bg-[#38E07A]`
- **Muted Green**: `#16a34a` / `bg-green-600`
- **Card Background**: `#2a2a2a` / `bg-[#2a2a2a]`

### Accent Colors
- **Primary Green**: `#38E07A` / `bg-[#38E07A]`
- **Success Green**: `#22c55e` / `bg-green-500`
- **Muted Green**: `#16a34a` / `bg-green-600`

### Text Colors
- **Primary Text**: `#ffffff` / `text-white`
- **Secondary Text**: `#a1a1aa` / `text-gray-400`
- **Muted Text**: `#71717a` / `text-gray-500`

### Status Colors
- **New**: `#a1a1aa` / `text-gray-400`
- **Check-in**: `#38E07A` / `text-[#38E07A]`
- **Created**: `#f59e0b` / `text-amber-500`
- **Ready for Delivery**: `#3b82f6` / `text-blue-500`
- **Completed**: `#38E07A` / `text-[#38E07A]`

## Typography

### Font Family
- **Primary**: Spline Sans, Helvetica, system-ui, sans-serif
- **Fallback**: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto

### Font Sizes & Weights
\`\`\`css
/* Headers */
.header-lg: text-2xl font-semibold (24px, 600)
.header-md: text-xl font-medium (20px, 500)
.header-sm: text-lg font-medium (18px, 500)

/* Body Text */
.body-lg: text-base font-normal (16px, 400)
.body-md: text-sm font-normal (14px, 400)
.body-sm: text-xs font-normal (12px, 400)

/* Labels */
.label-md: text-sm font-medium (14px, 500)
.label-sm: text-xs font-medium (12px, 500)
\`\`\`

## Components

### Buttons
- **Primary Button**: 
  - Background: `#38E07A`
  - Text: `#111614`
  - Hover: Lighter shade of primary green
  - Border Radius: `8px`
  - Height: `54px`
  - Text Transform: `none`

### Timeline Component
- **Scrollbar**: 
  - Width: `8px`
  - Thumb Color: `#28382d`
  - Track: Transparent
  - Border Radius: `4px`
  - No scroll buttons

### Navigation
- **Header**: 
  - Height: `64px`
  - Border Bottom: `1px solid #ffffff`
  - Background: `#111614`

### Cards
- **Background**: `transparent`
- **Border**: `1px solid #3d5144`
- **Border Radius**: `12px`
- **Padding**: `24px`
- **Min Height**: `120px`

## Layout Structure

### Grid System
- **Container**: `max-w-7xl mx-auto px-4 sm:px-6 lg:px-8`
- **Main Grid**: `grid grid-cols-1 lg:grid-cols-3 gap-6`
- **Card Grid**: `grid grid-cols-1 md:grid-cols-2 gap-4`

### Spacing Scale
\`\`\`css
/* Tailwind Spacing */
xs: 0.25rem (4px)
sm: 0.5rem (8px)
md: 1rem (16px)
lg: 1.5rem (24px)
xl: 2rem (32px)
2xl: 3rem (48px)
\`\`\`

## Component Specifications

### Navigation Header
\`\`\`css
Height: 64px
Background: bg-gray-900
Border: border-b border-gray-700
Padding: px-4 py-3
\`\`\`

### Tab Navigation
\`\`\`css
Active Tab: border-b-2 border-green-500 text-white
Inactive Tab: text-gray-400 hover:text-gray-300
Spacing: space-x-8
\`\`\`

### KPI Cards
\`\`\`css
Background: bg-gray-800
Border: border border-gray-700
Border Radius: rounded-lg (8px)
Padding: p-6
Shadow: shadow-sm
\`\`\`

### Data Table
\`\`\`css
Header Background: bg-gray-800
Row Background: bg-gray-900 (odd), bg-gray-800 (even)
Border: border-gray-700
Cell Padding: px-4 py-3
\`\`\`

### Status Badges
\`\`\`css
Base: px-3 py-1 rounded-full text-xs font-medium
Variants:
- New: bg-gray-600 text-gray-100
- Active: bg-green-600 text-green-100
- Warning: bg-amber-600 text-amber-100
- Info: bg-blue-600 text-blue-100
- Success: bg-emerald-600 text-emerald-100
\`\`\`

### Buttons
\`\`\`css
/* Primary Button */
bg-green-600 hover:bg-green-700 text-white
px-4 py-2 rounded-md font-medium

/* Secondary Button */
bg-gray-700 hover:bg-gray-600 text-gray-100
border border-gray-600

/* Icon Button */
p-2 rounded-md hover:bg-gray-700 text-gray-400
\`\`\`

## Interactive Elements

### Search Bar
\`\`\`css
Background: bg-gray-800
Border: border-gray-600 focus:border-green-500
Placeholder: text-gray-400
Icon: text-gray-500
\`\`\`

### Dropdown Filters
\`\`\`css
Background: bg-gray-800
Border: border-gray-600
Options: bg-gray-700 hover:bg-gray-600
\`\`\`

### Timeline Items
\`\`\`css
Icon Container: w-8 h-8 rounded-full bg-gray-700
Connector Line: border-l-2 border-gray-600
Content: ml-4 pb-4
\`\`\`

## Responsive Breakpoints

\`\`\`css
/* Mobile First Approach */
sm: 640px   /* Small devices */
md: 768px   /* Medium devices */
lg: 1024px  /* Large devices */
xl: 1280px  /* Extra large devices */
2xl: 1536px /* 2X Extra large devices */
\`\`\`

### Mobile Adaptations
- Stack KPI cards vertically on mobile
- Hide secondary columns in tables
- Collapse navigation to hamburger menu
- Reduce padding and margins

## Accessibility Guidelines

### Color Contrast
- Ensure minimum 4.5:1 contrast ratio for normal text
- Use 3:1 contrast ratio for large text (18px+)
- Provide focus indicators for interactive elements

### Keyboard Navigation
- All interactive elements must be keyboard accessible
- Implement proper tab order
- Use semantic HTML elements

### Screen Readers
- Provide alt text for icons and images
- Use proper heading hierarchy (h1, h2, h3...)
- Include ARIA labels for complex components

## Animation & Transitions

### Hover Effects
\`\`\`css
/* Smooth transitions */
transition-all duration-200 ease-in-out

/* Button hover */
hover:scale-105 hover:shadow-lg

/* Card hover */
hover:shadow-xl hover:border-gray-600
\`\`\`

### Loading States
\`\`\`css
/* Skeleton loading */
animate-pulse bg-gray-700

/* Spinner */
animate-spin border-2 border-green-500 border-t-transparent
\`\`\`

## MUI Theme Configuration

\`\`\`javascript
const theme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#38E07A',
    },
    background: {
      default: '#1a1a1a',
      paper: '#2a2a2a',
    },
    text: {
      primary: '#ffffff',
      secondary: '#a1a1aa',
    },
  },
  typography: {
    fontFamily: 'Inter, system-ui, sans-serif',
  },
  components: {
    MuiCard: {
      styleOverrides: {
        root: {
          backgroundColor: '#333333',
          border: '1px solid #4a5568',
        },
      },
    },
  },
});
\`\`\`

## Implementation Notes

### Tailwind + MUI Integration
- Use Tailwind for layout and spacing utilities
- Use MUI for complex components (DataGrid, Autocomplete, etc.)
- Maintain consistent color variables across both systems

### Performance Considerations
- Implement virtual scrolling for large data tables
- Use React.memo for expensive components
- Optimize images and icons
- Implement proper loading states

### Development Guidelines
- Follow atomic design principles
- Create reusable component library
- Implement proper TypeScript interfaces
- Use consistent naming conventions
- Document component props and usage examples

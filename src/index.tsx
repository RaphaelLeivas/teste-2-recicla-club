import './index.css'

import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router, Navigate, Route, Routes } from 'react-router-dom'

import { createTheme, ThemeProvider } from '@mui/material'
import App from './App'

const theme = createTheme({
  palette: {
    primary: {
      main: '#43b849',
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        containedPrimary: {
          color: '#fff',
        },
      },
    },
    MuiCheckbox: {
      styleOverrides: {
        root: {
          '&.Mui-checked': {
            color: '#43b849',
          },
        },
        colorSecondary: {
          color: '#43b849 !important',
        },
      },
    },
    MuiTablePagination: {
      styleOverrides: {
        root: {
          overflow: 'hidden',
        },
      },
    },
    MuiTableCell: {
      styleOverrides: {
        root: {
          padding: '8px 16px',
        },
      },
    },
    MuiChip: {
      styleOverrides: {
        outlined: {
          borderColor: '#43b849',
          backgroundColor: '#FFF',
          fontFamily: 'nunitoRegular !important',
        },
      },
    },
  },
})

ReactDOM.render(
  <ThemeProvider theme={theme}>
    <Router>
      <Routes>
        <Route path="/main/*" element={<App />} />
        <Route path="/" element={<Navigate to="/main/companies/form" />} />
      </Routes>
    </Router>
  </ThemeProvider>,
  document.getElementById('root')
)

import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider, createTheme } from '@mui/material';
import { Box, Button, Container, useMediaQuery, useTheme } from '@mui/material';
import { useLocation } from 'react-router-dom';
import Home from './pages/Home';
import Rsvp from './pages/Rsvp';

const theme = createTheme({
  palette: {
    primary: {
      main: '#e74c3c', // Röd färg som matchar hemsidan
    },
    secondary: {
      main: '#c0392b', // Mörkare röd komplementfärg
    },
  },
  typography: {
    fontFamily: '"Cormorant Garamond", "Playfair Display", "Roboto", "Arial", sans-serif',
  },
});

// Enkel toppmeny-komponent (ej klickbar än)
const TopMenu = () => {
  const location = useLocation();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  
  return (
    <Box
      sx={{
        background: '#fff',
        borderBottom: '1px solid rgba(231, 76, 60, 0.1)',
        py: { xs: 1, sm: 2 },
        position: 'sticky',
        top: 0,
        zIndex: 1000,
        boxShadow: '0 2px 8px rgba(0, 0, 0, 0.05)'
      }}
    >
      <Container maxWidth="lg">
        <Box sx={{ 
          display: 'flex', 
          flexDirection: { xs: 'column', sm: 'row' },
          justifyContent: 'center', 
          gap: { xs: 1, sm: 3 },
          alignItems: 'center'
        }}>
          <Button
            variant="outlined"
            fullWidth={isMobile}
            disabled
            sx={{
              color: '#95a5a6',
              borderColor: '#ecf0f1',
              backgroundColor: 'transparent',
              borderRadius: 0,
              fontFamily: '"Cormorant Garamond", serif',
              fontWeight: 400,
              textTransform: 'none',
              letterSpacing: '0.05em',
              px: { xs: 2, sm: 3 },
              py: { xs: 1.5, sm: 1 },
              fontSize: { xs: '0.9rem', sm: '1rem' },
              minHeight: { xs: '44px', sm: 'auto' },
              cursor: 'default',
              '&:hover': {
                backgroundColor: 'transparent',
                borderColor: '#ecf0f1'
              },
              '&.Mui-disabled': {
                color: '#95a5a6',
                borderColor: '#ecf0f1'
              }
            }}
          >
            Vår Historia
          </Button>
          
          <Button
            variant="outlined"
            fullWidth={isMobile}
            disabled
            sx={{
              color: '#95a5a6',
              borderColor: '#ecf0f1',
              backgroundColor: 'transparent',
              borderRadius: 0,
              fontFamily: '"Cormorant Garamond", serif',
              fontWeight: 400,
              textTransform: 'none',
              letterSpacing: '0.05em',
              px: { xs: 2, sm: 3 },
              py: { xs: 1.5, sm: 1 },
              fontSize: { xs: '0.9rem', sm: '1rem' },
              minHeight: { xs: '44px', sm: 'auto' },
              cursor: 'default',
              '&:hover': {
                backgroundColor: 'transparent',
                borderColor: '#ecf0f1'
              },
              '&.Mui-disabled': {
                color: '#95a5a6',
                borderColor: '#ecf0f1'
              }
            }}
          >
            Tidsplan
          </Button>
          
          <Button
            variant="outlined"
            fullWidth={isMobile}
            disabled
            sx={{
              color: '#95a5a6',
              borderColor: '#ecf0f1',
              backgroundColor: 'transparent',
              borderRadius: 0,
              fontFamily: '"Cormorant Garamond", serif',
              fontWeight: 400,
              textTransform: 'none',
              letterSpacing: '0.05em',
              px: { xs: 2, sm: 3 },
              py: { xs: 1.5, sm: 1 },
              fontSize: { xs: '0.9rem', sm: '1rem' },
              minHeight: { xs: '44px', sm: 'auto' },
              cursor: 'default',
              '&:hover': {
                backgroundColor: 'transparent',
                borderColor: '#ecf0f1'
              },
              '&.Mui-disabled': {
                color: '#95a5a6',
                borderColor: '#ecf0f1'
              }
            }}
          >
            Boende
          </Button>
        </Box>
      </Container>
    </Box>
  );
};

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <div className="app">
          <TopMenu />
          <main>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/rsvp" element={<Rsvp />} />
            </Routes>
          </main>
        </div>
      </Router>
    </ThemeProvider>
  );
}

export default App; 
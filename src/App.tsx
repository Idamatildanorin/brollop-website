import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider, createTheme } from '@mui/material';
import Home from './pages/Home';
import Rsvp from './pages/Rsvp';

const theme = createTheme({
  palette: {
    primary: {
      main: '#1976d2', // En vacker blå nyans
    },
    secondary: {
      main: '#0d47a1', // En mörkare blå komplementfärg
    },
  },
  typography: {
    fontFamily: '"Playfair Display", "Roboto", "Arial", sans-serif',
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <div className="app">
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
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider, createTheme } from '@mui/material';
import Home from './pages/Home';
import Rsvp from './pages/Rsvp';
import Accommodation from './pages/Accommodation';
import Contact from './pages/Contact';
import Navbar from './components/Navbar';

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


function App() {
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <div className="app">
          <Navbar />
          <main>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/rsvp" element={<Rsvp />} />
              <Route path="/accommodation" element={<Accommodation />} />
              <Route path="/contact" element={<Contact />} />
            </Routes>
          </main>
        </div>
      </Router>
    </ThemeProvider>
  );
}

export default App; 
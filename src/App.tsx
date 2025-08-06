import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider, createTheme } from '@mui/material';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import OurStory from './pages/OurStory';
import PracticalInfo from './pages/PracticalInfo';
import Schedule from './pages/Schedule';
import Toastmasters from './pages/Toastmasters';
import Activities from './pages/Activities';
import Gallery from './pages/Gallery';
import Rsvp from './pages/Rsvp';
import QRCodePage from './pages/QRCode';

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
          <Navbar />
          <main>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/var-historia" element={<OurStory />} />
              <Route path="/praktisk-info" element={<PracticalInfo />} />
              <Route path="/schema" element={<Schedule />} />
              <Route path="/toastmasters" element={<Toastmasters />} />
              <Route path="/aktiviteter" element={<Activities />} />
              <Route path="/gallery" element={<Gallery />} />
              <Route path="/rsvp" element={<Rsvp />} />
              <Route path="/qr" element={<QRCodePage />} />
            </Routes>
          </main>
        </div>
      </Router>
    </ThemeProvider>
  );
}

export default App; 
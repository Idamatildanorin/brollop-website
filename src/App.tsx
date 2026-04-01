import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider, createTheme } from '@mui/material';
import Home from './pages/Home';
import Rsvp from './pages/Rsvp';
import Info from './pages/Info';
import Accommodation from './pages/Accommodation';
import Contact from './pages/Contact';
import Navbar from './components/Navbar';

const theme = createTheme({
  palette: {
    primary: {
      main: '#b3124b',
    },
    secondary: {
      main: '#d88faa',
    },
    text: {
      primary: '#b3124b',
      secondary: '#b3124b',
    },
    background: {
      default: '#f6dce6',
      paper: '#fff7fa',
    },
  },
  typography: {
    fontFamily: '"Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
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
              <Route path="/info" element={<Info />} />
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
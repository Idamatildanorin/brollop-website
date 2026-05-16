import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider, createTheme } from '@mui/material';
import Home from './pages/Home';
import Rsvp from './pages/Rsvp';
import Info from './pages/Info';
import Accommodation from './pages/Accommodation';
import Contact from './pages/Contact';
import Schedule from './pages/Schedule';
import Navbar from './components/Navbar';

const playfair = '"Playfair Display", serif';

const theme = createTheme({
  palette: {
    primary: {
      main: '#b3124b',
      light: '#d88faa',
    },
    secondary: {
      main: '#4a9d6f',
    },
    text: {
      primary: '#3d5248',
      secondary: '#8a6d78',
    },
    background: {
      default: '#f6dce6',
      paper: '#fff9fc',
    },
  },
  typography: {
    fontFamily: playfair,
    h1: {
      letterSpacing: '0.02em',
      fontWeight: 400,
    },
    h2: {
      letterSpacing: '0.02em',
      fontWeight: 400,
    },
    h3: {
      letterSpacing: '0.02em',
      fontWeight: 400,
    },
    h4: { fontWeight: 400 },
    h5: { fontWeight: 400 },
    h6: { fontWeight: 400 },
    body1: {
      letterSpacing: '0.01em',
      lineHeight: 1.7,
    },
    body2: {
      letterSpacing: '0.01em',
      lineHeight: 1.65,
    },
    button: {
      letterSpacing: '0.02em',
      fontWeight: 400,
    },
  },
  shape: {
    borderRadius: 8,
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          fontFamily: playfair,
          borderRadius: 8,
          textTransform: 'none',
          boxShadow: 'none',
          '&:hover': {
            boxShadow: 'none',
          },
        },
      },
    },
    MuiInputBase: {
      styleOverrides: {
        root: { fontFamily: playfair },
        input: { fontFamily: playfair },
      },
    },
    MuiOutlinedInput: {
      styleOverrides: {
        root: { fontFamily: playfair },
        input: { fontFamily: playfair },
      },
    },
    MuiInputLabel: {
      styleOverrides: {
        root: { fontFamily: playfair },
      },
    },
    MuiFormLabel: {
      styleOverrides: {
        root: { fontFamily: playfair },
      },
    },
    MuiFormHelperText: {
      styleOverrides: {
        root: { fontFamily: playfair },
      },
    },
    MuiFormControlLabel: {
      styleOverrides: {
        label: { fontFamily: playfair },
      },
    },
    MuiDialogTitle: {
      styleOverrides: {
        root: { fontFamily: playfair },
      },
    },
    MuiDialogContent: {
      styleOverrides: {
        root: { fontFamily: playfair },
      },
    },
    MuiAlert: {
      styleOverrides: {
        root: { fontFamily: playfair },
        message: { fontFamily: playfair },
      },
    },
    MuiPaper: {
      styleOverrides: {
        root: { fontFamily: playfair },
      },
    },
    MuiTypography: {
      styleOverrides: {
        root: { fontFamily: playfair },
      },
    },
    MuiContainer: {
      defaultProps: {
        maxWidth: 'md',
      },
    },
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
              <Route path="/tidsplan" element={<Schedule />} />
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
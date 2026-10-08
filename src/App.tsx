import { ThemeProvider, createTheme } from '@mui/material';
import WeddingOverPopup from './components/WeddingOverPopup';

const theme = createTheme({
  typography: {
    fontFamily: '"Playfair Display", serif',
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <div className="app">
        <WeddingOverPopup />
      </div>
    </ThemeProvider>
  );
}

export default App;

import React from 'react';
import { AppBar, Toolbar, Button, Box, Menu, MenuItem } from '@mui/material';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <AppBar position="static" color="transparent" elevation={0}>
      <Toolbar>
        <Box sx={{ flexGrow: 1, display: 'flex', justifyContent: 'center', gap: 3 }}>
          <Button
            component={Link}
            to="/"
            color="inherit"
            sx={{ fontSize: '1.1rem', textTransform: 'none' }}
          >
            Hem
          </Button>
          <Button
            component={Link}
            to="/var-historia"
            color="inherit"
            sx={{ fontSize: '1.1rem', textTransform: 'none' }}
          >
            Vår Historia
          </Button>
          <Button
            component={Link}
            to="/praktisk-info"
            color="inherit"
            sx={{ fontSize: '1.1rem', textTransform: 'none' }}
          >
            Praktisk Info
          </Button>
          <Button
            component={Link}
            to="/schema"
            color="inherit"
            sx={{ fontSize: '1.1rem', textTransform: 'none' }}
          >
            Schema
          </Button>
          <Button
            component={Link}
            to="/toastmasters"
            color="inherit"
            sx={{ fontSize: '1.1rem', textTransform: 'none' }}
          >
            Toastmasters
          </Button>
          <Button
            component={Link}
            to="/aktiviteter"
            color="inherit"
            sx={{ fontSize: '1.1rem', textTransform: 'none' }}
          >
            Aktiviteter
          </Button>
          <Button
            component={Link}
            to="/gallery"
            color="inherit"
            sx={{ fontSize: '1.1rem', textTransform: 'none' }}
          >
            Galleri
          </Button>
          <Button
            component={Link}
            to="/rsvp"
            color="inherit"
            sx={{ fontSize: '1.1rem', textTransform: 'none' }}
          >
            OSA
          </Button>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar; 
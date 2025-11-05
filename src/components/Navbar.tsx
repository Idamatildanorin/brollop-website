import { useState } from 'react';
import { 
  AppBar, 
  Toolbar, 
  Button, 
  Box, 
  IconButton, 
  Drawer, 
  List, 
  ListItem, 
  ListItemText,
  useMediaQuery,
  useTheme
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { Link } from 'react-router-dom';

const navItems = [
  { text: 'Hem', path: '/' },
  { text: 'OSA', path: '/rsvp' },
  { text: 'Bra att veta', path: '/info' },
  { text: 'Boende och transport', path: '/accommodation' },
  { text: 'Galleri', path: '/gallery' },
  { text: 'Kontakt', path: '/contact' }
];

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <List>
      {navItems.map((item) => (
        <ListItem 
          key={item.path} 
          component={Link} 
          to={item.path}
          onClick={handleDrawerToggle}
          sx={{ 
            color: '#594545',
            '&:hover': {
              backgroundColor: 'rgba(158, 118, 118, 0.1)'
            }
          }}
        >
          <ListItemText 
            primary={item.text}
            primaryTypographyProps={{
              sx: { 
                fontSize: '1.1rem',
                fontFamily: '"Playfair Display", serif'
              }
            }}
          />
        </ListItem>
      ))}
    </List>
  );

  return (
    <AppBar position="sticky" color="inherit" elevation={0} sx={{ bgcolor: '#fff', boxShadow: 'none' }}>
      <Toolbar sx={{ py: 0, pt: 0, pb: 0, minHeight: '48px !important', paddingTop: '0 !important' }}>
        {isMobile ? (
          <>
            <IconButton
              color="inherit"
              aria-label="open drawer"
              edge="start"
              onClick={handleDrawerToggle}
              sx={{ color: '#9E7676' }}
            >
              <MenuIcon />
            </IconButton>
            <Box sx={{ flexGrow: 1, textAlign: 'center' }}>
              <Button
                component={Link}
                to="/"
                color="inherit"
                sx={{ 
                  fontSize: '1.2rem', 
                  textTransform: 'none',
                  color: '#9E7676',
                  fontFamily: '"Playfair Display", serif'
                }}
              >
                Pelle & Matilda
              </Button>
            </Box>
          </>
        ) : (
          <Box sx={{ 
            flexGrow: 1, 
            display: 'flex', 
            justifyContent: 'center', 
            gap: 3,
            '& .MuiButton-root': {
              color: '#594545',
              fontSize: '1.1rem',
              textTransform: 'none',
              fontFamily: '"Playfair Display", serif',
              '&:hover': {
                backgroundColor: 'rgba(158, 118, 118, 0.1)'
              }
            }
          }}>
            {navItems.map((item) => (
              <Button
                key={item.path}
                component={Link}
                to={item.path}
              >
                {item.text}
              </Button>
            ))}
          </Box>
        )}

        <Drawer
          variant="temporary"
          anchor="left"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true // Better open performance on mobile.
          }}
          sx={{
            '& .MuiDrawer-paper': { 
              boxSizing: 'border-box', 
              width: 240,
              bgcolor: '#fff'
            },
          }}
        >
          {drawer}
        </Drawer>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar; 
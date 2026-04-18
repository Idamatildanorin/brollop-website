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
import { Link, useLocation } from 'react-router-dom';

const navItems = [
  { text: 'Hem', path: '/' },
  { text: 'OSA', path: '/rsvp' },
  { text: 'Bra att veta', path: '/info' },
  { text: 'Boende och transport', path: '/accommodation' },
  { text: 'Kontakt', path: '/contact' }
];

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  const location = useLocation();

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
            color: '#6b7280',
            '&:hover': {
              backgroundColor: 'rgba(107, 114, 128, 0.1)'
            }
          }}
        >
          <ListItemText 
            primary={item.text}
            primaryTypographyProps={{
              sx: { 
                fontSize: '1.1rem',
                fontFamily: '"Inter", sans-serif',
                fontWeight: 300
              }
            }}
          />
        </ListItem>
      ))}
    </List>
  );

  return (
    <AppBar
      position="sticky"
      color="inherit"
      elevation={0}
      sx={{
        bgcolor: 'rgba(246, 220, 230, 0.92)',
        boxShadow: '0 1px 0 rgba(179, 18, 75, 0.25)',
        borderBottom: '1px solid rgba(179, 18, 75, 0.25)',
      }}
    >
      <Toolbar
        sx={{
          py: 0,
          minHeight: '52px !important',
          px: { xs: 1.5, md: 3 },
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        {isMobile ? (
          <>
            <IconButton
              color="inherit"
              aria-label="open drawer"
              edge="start"
              onClick={handleDrawerToggle}
              sx={{ color: '#b3124b', mr: 1 }}
            >
              <MenuIcon />
            </IconButton>
            <Box sx={{ flexGrow: 1, textAlign: 'center' }}>
              <Button
                component={Link}
                to="/"
                color="inherit"
                aria-label="Pelle och Matilda"
                sx={{ 
                  fontSize: '1.35rem', 
                  textTransform: 'none',
                  color: '#1f5c3a',
                  fontFamily: '"Playfair Display", serif',
                  fontWeight: 400,
                  letterSpacing: '0.04em',
                  pl: 0.75,
                  '&:hover': { color: '#174a30' },
                }}
              >
                Pelle{' '}
                <Box component="span" sx={{ color: '#4a9d6f', px: 0.25 }} aria-hidden>
                  ♥
                </Box>{' '}
                Matilda
              </Button>
            </Box>
          </>
        ) : (
          <Box sx={{ 
            flexGrow: 1, 
            display: 'flex', 
            alignItems: 'center',
            justifyContent: 'center', 
            gap: 3
          }}>
            <Button
              component={Link}
              to="/"
              aria-label="Pelle och Matilda"
              sx={{
                mr: 3,
                fontSize: '1.45rem',
                textTransform: 'none',
                color: '#1f5c3a',
                fontFamily: '"Playfair Display", serif',
                fontWeight: 400,
                letterSpacing: '0.06em',
                pl: 0.5,
                '&:hover': { backgroundColor: 'transparent', color: '#174a30' }
              }}
            >
              Pelle{' '}
              <Box component="span" sx={{ color: '#4a9d6f', px: 0.25 }} aria-hidden>
                ♥
              </Box>{' '}
              Matilda
            </Button>
            {navItems.map((item) => {
              const isActive =
                item.path === '/'
                  ? location.pathname === '/'
                  : location.pathname.startsWith(item.path);

              return (
                <Button
                  key={item.path}
                  component={Link}
                  to={item.path}
                  sx={{
                    position: 'relative',
                    color: '#b3124b',
                    fontSize: '0.95rem',
                    textTransform: 'none',
                    fontFamily: '"Inter", sans-serif',
                    fontWeight: isActive ? 500 : 300,
                    letterSpacing: '0.04em',
                    px: 1,
                    pb: 0.5,
                    '&:hover': {
                      backgroundColor: 'transparent',
                      color: '#b3124b',
                    },
                    '&::after': {
                      content: '""',
                      position: 'absolute',
                      left: '12%',
                      right: '12%',
                      bottom: 0,
                      height: 2,
                      borderRadius: 999,
                      backgroundColor: '#b3124b',
                      opacity: isActive ? 1 : 0.35,
                      transform: isActive ? 'scaleX(1)' : 'scaleX(0.8)',
                      transition: 'opacity 0.25s ease, transform 0.25s ease',
                    },
                  }}
                >
                  {item.text}
                </Button>
              );
            })}
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
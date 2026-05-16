import { useState } from 'react';
import {
  AppBar,
  Toolbar,
  Button,
  Box,
  IconButton,
  Drawer,
  List,
  ListItemButton,
  ListItemText,
  Typography,
  Divider,
  Container,
  useMediaQuery,
  useTheme,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import { Link, useLocation } from 'react-router-dom';

const navItems = [
  { text: 'Hem', path: '/' },
  { text: 'OSA', path: '/rsvp' },
  { text: 'Tidsplan', path: '/tidsplan' },
  { text: 'Boende och transport', path: '/accommodation' },
  { text: 'Våra fantastiska toastmasters', path: '/contact' },
];

const isActivePath = (pathname: string, path: string) =>
  path === '/' ? pathname === '/' : pathname.startsWith(path);

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  const location = useLocation();

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const linkSx = (isActive: boolean) => ({
    fontSize: '0.92rem',
    textTransform: 'none' as const,
    fontFamily: '"Playfair Display", serif',
    fontWeight: isActive ? 500 : 400,
    letterSpacing: '0.03em',
    px: { md: 1.75 },
    py: 1,
    minWidth: 'auto',
    borderRadius: 0,
    position: 'relative' as const,
    color: isActive ? '#1f5c3a' : '#8a6d78',
    backgroundColor: 'transparent',
    transition: 'color 0.2s ease',
    '&::after': {
      content: '""',
      position: 'absolute',
      left: '20%',
      right: '20%',
      bottom: 4,
      height: '1px',
      backgroundColor: '#1f5c3a',
      transform: isActive ? 'scaleX(1)' : 'scaleX(0)',
      transition: 'transform 0.22s ease',
    },
    '&:hover': {
      backgroundColor: 'transparent',
      color: '#1f5c3a',
    },
  });

  const drawer = (
    <Box sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          px: 2.5,
          pt: 2.5,
          pb: 1.5,
        }}
      >
        <Typography
          sx={{
            fontFamily: '"Playfair Display", serif',
            fontSize: '1.05rem',
            fontWeight: 500,
            letterSpacing: '0.04em',
            color: '#1f5c3a',
          }}
        >
          Meny
        </Typography>
        <IconButton
          aria-label="Stäng meny"
          onClick={handleDrawerToggle}
          size="small"
          sx={{ color: '#8a6d78' }}
        >
          <CloseIcon fontSize="small" />
        </IconButton>
      </Box>
      <Divider sx={{ borderColor: 'rgba(179, 18, 75, 0.1)' }} />
      <List sx={{ px: 1.5, py: 2, flex: 1 }}>
        {navItems.map((item) => {
          const isActive = isActivePath(location.pathname, item.path);
          return (
            <ListItemButton
              key={item.path}
              component={Link}
              to={item.path}
              onClick={handleDrawerToggle}
              selected={isActive}
              sx={{
                py: 1.35,
                px: 2,
                mb: 0.5,
                borderRadius: '8px',
                color: isActive ? '#1f5c3a' : '#8a6d78',
                '&.Mui-selected': {
                  backgroundColor: 'rgba(74, 157, 111, 0.1)',
                  '&:hover': {
                    backgroundColor: 'rgba(74, 157, 111, 0.12)',
                  },
                },
                '&:hover': {
                  backgroundColor: 'rgba(74, 157, 111, 0.08)',
                },
              }}
            >
              <ListItemText
                primary={item.text}
                primaryTypographyProps={{
                  sx: {
                    fontSize: '1.02rem',
                    fontFamily: '"Playfair Display", serif',
                    fontWeight: isActive ? 500 : 400,
                    letterSpacing: '0.02em',
                  },
                }}
              />
            </ListItemButton>
          );
        })}
      </List>
    </Box>
  );

  return (
    <AppBar
      position="sticky"
      color="inherit"
      elevation={0}
      sx={{
        bgcolor: 'rgba(249, 232, 239, 0.75)',
        boxShadow: 'none',
        backdropFilter: 'blur(12px)',
        borderBottom: '1px solid rgba(179, 18, 75, 0.1)',
      }}
    >
      <Container maxWidth="md" disableGutters={isMobile}>
        <Toolbar
          disableGutters
          sx={{
            py: { xs: 0.75, md: 1 },
            minHeight: { xs: '56px !important', md: '60px !important' },
            px: { xs: 1.5, md: 2 },
            display: 'flex',
            alignItems: 'center',
            justifyContent: { xs: 'flex-start', md: 'center' },
          }}
        >
          {isMobile ? (
            <IconButton
              aria-label="Öppna meny"
              onClick={handleDrawerToggle}
              sx={{
                color: '#8a6d78',
                p: 1.1,
                borderRadius: '8px',
                border: '1px solid rgba(179, 18, 75, 0.12)',
              }}
            >
              <MenuIcon />
            </IconButton>
          ) : (
            <Box
              component="nav"
              aria-label="Huvudmeny"
              sx={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                flexWrap: 'wrap',
                gap: { md: 0.5, lg: 1 },
                width: '100%',
              }}
            >
              {navItems.map((item) => {
                const isActive = isActivePath(location.pathname, item.path);
                return (
                  <Button
                    key={item.path}
                    component={Link}
                    to={item.path}
                    sx={linkSx(isActive)}
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
            ModalProps={{ keepMounted: true }}
            sx={{
              '& .MuiDrawer-paper': {
                boxSizing: 'border-box',
                width: 280,
                bgcolor: '#fff9fc',
                borderRadius: '0 12px 12px 0',
                boxShadow: '4px 0 24px rgba(0, 0, 0, 0.06)',
              },
            }}
          >
            {drawer}
          </Drawer>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Navbar;

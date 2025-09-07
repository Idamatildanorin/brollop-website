import React, { useState, useEffect } from 'react';
import { Box, Typography, Container, Button } from '@mui/material';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const Home = () => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0
  });

  // Ange bröllopsdatumet här (format: YYYY, MM-1, DD, HH, MM)
  const weddingDate = new Date(2026, 8, 5, 14, 0); // 5 september 2026 kl 14:00

  useEffect(() => {
    const timer = setInterval(() => {
      const now = new Date().getTime();
      const distance = weddingDate.getTime() - now;

      setTimeLeft({
        days: Math.floor(distance / (1000 * 60 * 60 * 24))
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <Container maxWidth="md">
      <Box sx={{ 
        py: 6,
        background: 'linear-gradient(135deg, #fefefe 0%, #f8f6f0 100%)',
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center'
      }}>
        {/* Diskret ram runt allt innehåll */}
        <Box
          sx={{
            background: '#fff',
            borderRadius: '20px',
            p: { xs: 4, md: 6 },
            boxShadow: '0 8px 32px rgba(0, 0, 0, 0.08)',
            border: '1px solid rgba(231, 76, 60, 0.1)',
            position: 'relative',
            '&::before': {
              content: '""',
              position: 'absolute',
              top: 0,
              left: 0,
              right: 0,
              height: '3px',
              background: 'linear-gradient(90deg, #e74c3c, #c0392b)',
              borderRadius: '20px 20px 0 0'
            }
          }}
        >
          {/* Huvudrubrik - mer kompakt */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <Typography 
              variant="h2" 
              component="h1" 
              align="center"
              sx={{ 
                fontFamily: '"Cormorant Garamond", serif',
                fontWeight: 400,
                mb: 4,
                color: '#2c3e50',
                fontSize: { xs: '2.2rem', md: '2.8rem' },
                letterSpacing: '0.05em'
              }}
            >
              Pelle & Matilda
            </Typography>
          </motion.div>

          {/* Nedräkning - mer kompakt */}
          <Box sx={{ mb: 6 }}>
            <Typography 
              variant="h5" 
              component="h2" 
              align="center"
              sx={{ 
                fontFamily: '"Cormorant Garamond", serif',
                fontWeight: 400,
                mb: 4,
                color: '#34495e',
                fontSize: '1.1rem',
                letterSpacing: '0.1em',
                textTransform: 'uppercase'
              }}
            >
              Tillsammans räknar vi ner
            </Typography>

            <Box sx={{ 
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              gap: 2,
              maxWidth: '300px',
              mx: 'auto'
            }}>
              <motion.div
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.5 }}
              >
                <Box
                  sx={{
                    p: 3,
                    textAlign: 'center',
                    borderBottom: '2px solid #e74c3c',
                    minWidth: '120px'
                  }}
                >
                  <Typography 
                    variant="h3" 
                    sx={{ 
                      color: '#e74c3c',
                      fontWeight: 300,
                      mb: 1,
                      fontFamily: '"Cormorant Garamond", serif',
                      fontSize: { xs: '2.5rem', md: '3rem' }
                    }}
                  >
                    {timeLeft.days}
                  </Typography>
                  <Typography 
                    variant="caption" 
                    sx={{ 
                      color: '#7f8c8d',
                      fontWeight: 400,
                      fontFamily: '"Cormorant Garamond", serif',
                      textTransform: 'uppercase',
                      letterSpacing: '0.1em',
                      fontSize: '0.8rem'
                    }}
                  >
                    dagar
                  </Typography>
                </Box>
              </motion.div>
            </Box>
          </Box>

          {/* OSA-knapp - mer elegant */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1 }}
          >
            <Box sx={{ textAlign: 'center', mb: 6 }}>
              <Typography 
                variant="body1" 
                sx={{ 
                  mb: 3,
                  fontFamily: '"Cormorant Garamond", serif',
                  fontWeight: 400,
                  color: '#34495e',
                  fontSize: '1rem',
                  fontStyle: 'italic'
                }}
              >
                Vi hoppas att du kan komma och fira med oss!
              </Typography>
              <Button 
                component={Link}
                to="/rsvp"
                variant="outlined"
                size="medium"
                sx={{ 
                  px: 4,
                  py: 1.5,
                  fontSize: '0.9rem',
                  color: '#e74c3c',
                  borderColor: '#e74c3c',
                  borderRadius: 0,
                  fontFamily: '"Cormorant Garamond", serif',
                  fontWeight: 400,
                  textTransform: 'none',
                  letterSpacing: '0.05em',
                  '&:hover': {
                    backgroundColor: '#e74c3c',
                    color: '#fff',
                    borderColor: '#e74c3c'
                  },
                  transition: 'all 0.3s ease'
                }}
              >
                OSA här
              </Button>
              
              <Typography 
                variant="caption" 
                sx={{ 
                  display: 'block',
                  mt: 3,
                  fontFamily: '"Cormorant Garamond", serif',
                  fontWeight: 300,
                  color: '#95a5a6',
                  fontStyle: 'italic',
                  fontSize: '0.75rem',
                  maxWidth: '400px',
                  mx: 'auto',
                  lineHeight: 1.4
                }}
              >
                Vi älskar barn, men denna kväll vill vi fira tillsammans med våra vuxna vänner och familj.
              </Typography>
            </Box>
          </motion.div>

          {/* Mer info kommer snart - mer subtil */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.3 }}
          >
            <Box 
              sx={{ 
                p: 3, 
                textAlign: 'center',
                maxWidth: '400px',
                mx: 'auto',
                borderTop: '1px solid #ecf0f1'
              }}
            >
              <Typography variant="body2" sx={{ 
                color: '#95a5a6', 
                fontFamily: '"Cormorant Garamond", serif',
                fontWeight: 300,
                fontSize: '0.85rem',
                fontStyle: 'italic'
              }}>
                Mer information kommer snart
              </Typography>
            </Box>
          </motion.div>
        </Box>
      </Box>
    </Container>
  );
};

export default Home; 
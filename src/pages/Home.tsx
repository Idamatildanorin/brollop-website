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
        py: 1,
        background: '#ffffff',
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center'
      }}>
        {/* Innehåll med elegant ram */}
        <Box
          sx={{
            background: '#ffffff',
            borderRadius: '25px',
            p: { xs: 1.5, md: 2 },
            position: 'relative',
            boxShadow: '0 10px 40px rgba(0, 0, 0, 0.1)',
            border: '2px solid rgba(231, 76, 60, 0.15)',
            '&::before': {
              content: '""',
              position: 'absolute',
              top: 0,
              left: 0,
              right: 0,
              height: '5px',
              background: 'linear-gradient(90deg, #e74c3c, #c0392b, #e74c3c)',
              borderRadius: '25px 25px 0 0'
            },
            '&::after': {
              content: '""',
              position: 'absolute',
              bottom: 0,
              left: 0,
              right: 0,
              height: '5px',
              background: 'linear-gradient(90deg, #e74c3c, #c0392b, #e74c3c)',
              borderRadius: '0 0 25px 25px'
            }
          }}
        >
          {/* Huvudrubrik - mer kompakt */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <Box sx={{ 
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              mb: 0
            }}>
              <img
                src="/images/ChatGPT Image 14 okt. 2025 19_49_39.png"
                alt="Pelle och Matilda"
                style={{
                  width: '100%',
                  height: 'auto',
                  maxWidth: '350px',
                  display: 'block',
                  filter: 'brightness(1.2) contrast(1.1)',
                  backgroundColor: '#ffffff'
                }}
              />
            </Box>
            
          </motion.div>

          {/* Nedräkning - mer kompakt */}
          <Box sx={{ mb: 1 }}>
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
                    dagar kvar
                  </Typography>
                </Box>
              </motion.div>
            </Box>
          </Box>


          {/* Information kommer löpande */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.3 }}
          >
            <Box 
              sx={{ 
                textAlign: 'center',
                maxWidth: '600px',
                mx: 'auto',
                mt: 1,
                pt: 1,
                borderTop: '1px solid rgba(231, 76, 60, 0.1)'
              }}
            >
              <Typography variant="h6" sx={{ 
                color: '#e74c3c', 
                fontFamily: '"Cormorant Garamond", serif',
                fontWeight: 400,
                fontSize: '1.2rem',
                mb: 3,
                letterSpacing: '0.05em'
              }}>
                Välkommen till vår bröllopssida! 💕
              </Typography>
              <Typography variant="body1" sx={{ 
                color: '#34495e', 
                fontFamily: '"Cormorant Garamond", serif',
                fontWeight: 300,
                fontSize: '1rem',
                lineHeight: 1.7,
                maxWidth: '600px',
                mx: 'auto',
                mb: 3
              }}>
                Här kommer ni att hitta allt ni behöver veta om vår stora dag. Vi uppdaterar sidan regelbundet med ny information, så kom gärna tillbaka och kolla in vad som är nytt!
              </Typography>
              <Typography variant="body2" sx={{ 
                color: '#7f8c8d', 
                fontFamily: '"Cormorant Garamond", serif',
                fontWeight: 300,
                fontSize: '0.95rem',
                fontStyle: 'italic',
                lineHeight: 1.6
              }}>
                Tidplan, praktisk information, boende, aktiviteter och mycket mer kommer att läggas upp här framöver. Vi ser fram emot att dela denna speciella dag med er! ✨
              </Typography>
            </Box>
          </motion.div>
        </Box>
      </Box>
    </Container>
  );
};

export default Home; 
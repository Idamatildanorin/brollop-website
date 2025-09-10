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
                mb: 2,
                color: '#2c3e50',
                fontSize: { xs: '2.2rem', md: '2.8rem' },
                letterSpacing: '0.05em'
              }}
            >
              Pelle & Matilda
            </Typography>
            
            <Box sx={{ 
              display: 'flex', 
              flexDirection: 'column',
              justifyContent: 'center', 
              alignItems: 'center',
              mb: 4
            }}>
              <Typography 
                variant="body1" 
                sx={{ 
                  fontFamily: '"Cormorant Garamond", serif',
                  fontWeight: 300,
                  color: '#e74c3c',
                  fontSize: { xs: '1rem', md: '1.1rem' },
                  letterSpacing: '0.05em',
                  fontStyle: 'italic',
                  mb: 1
                }}
              >
                5 september 2026
              </Typography>
              <Typography 
                sx={{ 
                  fontSize: '1.2rem',
                  color: '#e74c3c',
                  opacity: 0.7
                }}
              >
                ♥
              </Typography>
            </Box>
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
                mt: 6,
                pt: 4,
                borderTop: '1px solid rgba(231, 76, 60, 0.1)'
              }}
            >
              <Typography variant="h6" sx={{ 
                color: '#e74c3c', 
                fontFamily: '"Cormorant Garamond", serif',
                fontWeight: 400,
                fontSize: '1.1rem',
                mb: 2,
                letterSpacing: '0.05em'
              }}>
                Tips! Håll koll på hemsidan
              </Typography>
              <Typography variant="body1" sx={{ 
                color: '#34495e', 
                fontFamily: '"Cormorant Garamond", serif',
                fontWeight: 300,
                fontSize: '0.95rem',
                lineHeight: 1.6,
                maxWidth: '500px',
                mx: 'auto',
                mb: 2
              }}>
                Information kommer att uppdateras löpande ju närmare bröllopet det blir
              </Typography>
              <Typography variant="body2" sx={{ 
                color: '#7f8c8d', 
                fontFamily: '"Cormorant Garamond", serif',
                fontWeight: 300,
                fontSize: '0.9rem',
                fontStyle: 'italic'
              }}>
                Här kommer tidplanen, praktisk information och mer detaljer att läggas upp
              </Typography>
            </Box>
          </motion.div>
        </Box>
      </Box>
    </Container>
  );
};

export default Home; 
import React, { useState, useEffect } from 'react';
import { Box, Typography, Container, Button } from '@mui/material';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const Home = () => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  // Ange bröllopsdatumet här (format: YYYY, MM-1, DD, HH, MM)
  const weddingDate = new Date(2026, 8, 5, 14, 0); // 5 september 2026 kl 14:00

  useEffect(() => {
    const timer = setInterval(() => {
      const now = new Date().getTime();
      const distance = weddingDate.getTime() - now;

      setTimeLeft({
        days: Math.floor(distance / (1000 * 60 * 60 * 24)),
        hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
        minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
        seconds: Math.floor((distance % (1000 * 60)) / 1000)
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <Container maxWidth="lg">
      <Box sx={{ 
        py: 8,
        background: 'linear-gradient(135deg, #fefefe 0%, #f8f6f0 100%)',
        minHeight: '100vh'
      }}>
        {/* Huvudrubrik */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
        >
          <Typography 
            variant="h1" 
            component="h1" 
            gutterBottom 
            align="center"
            sx={{ 
              fontFamily: '"Playfair Display", serif',
              fontWeight: 300,
              mb: 6,
              background: 'linear-gradient(135deg, #e74c3c 0%, #c0392b 100%)',
              backgroundClip: 'text',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              fontSize: { xs: '2.5rem', md: '3.5rem' }
            }}
          >
            Pelle & Matilda
          </Typography>
        </motion.div>

        {/* Nedräkning */}
        <Box sx={{ mb: 8 }}>
          <Typography 
            variant="h3" 
            component="h2" 
            gutterBottom 
            align="center"
            sx={{ 
              fontFamily: '"Playfair Display", serif',
              fontWeight: 300,
              mb: 4,
              color: '#333',
              position: 'relative',
              '&::before': {
                content: '""',
                position: 'absolute',
                top: '50%',
                left: '50%',
                transform: 'translate(-50%, -50%)',
                width: '60px',
                height: '2px',
                background: 'linear-gradient(90deg, transparent, #e74c3c, transparent)',
                zIndex: -1
              }
            }}
          >
            Tillsammans räknar vi ner
          </Typography>

          <Box sx={{ display: 'flex', gap: 4, flexWrap: 'wrap', justifyContent: 'center', mb: 6 }}>
            {Object.entries(timeLeft).map(([unit, value], index) => (
              <motion.div
                key={unit}
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.8 + index * 0.1 }}
              >
                <Box
                  sx={{
                    p: 3,
                    background: 'linear-gradient(135deg, rgba(158, 118, 118, 0.1) 0%, rgba(192, 57, 43, 0.1) 100%)',
                    borderRadius: 2,
                    minWidth: 120
                  }}
                >
                  <Typography variant="h3">{value}</Typography>
                  <Typography variant="subtitle1" sx={{ textTransform: 'capitalize' }}>
                    {unit}
                  </Typography>
                </Box>
              </motion.div>
            ))}
          </Box>
        </Box>

        {/* OSA-knapp */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.2 }}
        >
          <Box sx={{ textAlign: 'center', mb: 6 }}>
            <Typography 
              variant="h5" 
              sx={{ 
                mb: 3,
                fontFamily: '"Playfair Display", serif',
                fontWeight: 300,
                color: '#555'
              }}
            >
              Vi hoppas att du kan komma och fira med oss!
            </Typography>
            <Button 
              component={Link}
              to="/rsvp"
              variant="contained"
              size="large"
              sx={{ 
                px: 6,
                py: 2.5,
                fontSize: '1.2rem',
                background: 'linear-gradient(135deg, #e74c3c 0%, #c0392b 100%)',
                borderRadius: 3,
                boxShadow: '0 8px 25px rgba(231, 76, 60, 0.3)',
                '&:hover': {
                  background: 'linear-gradient(135deg, #d63031 0%, #a93226 100%)',
                  boxShadow: '0 12px 35px rgba(231, 76, 60, 0.4)',
                  transform: 'translateY(-2px)'
                },
                transition: 'all 0.3s ease'
              }}
            >
              OSA här
            </Button>
            
            <Typography 
              variant="body1" 
              sx={{ 
                mt: 4,
                fontFamily: '"Playfair Display", serif',
                fontWeight: 300,
                color: '#666',
                fontStyle: 'italic',
                fontSize: '0.95rem',
                maxWidth: '500px',
                mx: 'auto',
                lineHeight: 1.5
              }}
            >
              Vi älskar barn, men denna kväll vill vi fira tillsammans med våra vuxna vänner och familj.
            </Typography>
          </Box>
        </motion.div>

        {/* Mer info kommer snart */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.6 }}
        >
          <Box 
            sx={{ 
              p: 4, 
              background: 'linear-gradient(135deg, rgba(158, 118, 118, 0.05) 0%, rgba(192, 57, 43, 0.05) 100%)',
              borderRadius: 3,
              textAlign: 'center',
              position: 'relative',
              '&::before': {
                content: '""',
                position: 'absolute',
                top: 0,
                left: '50%',
                transform: 'translateX(-50%)',
                width: '80px',
                height: '4px',
                background: 'linear-gradient(90deg, transparent, #e74c3c, transparent)',
                borderRadius: '2px'
              }
            }}
          >
            <Typography variant="h5" gutterBottom sx={{ mt: 2 }}>
              Mer Information Kommer Snart
            </Typography>
            <Typography variant="body1" sx={{ opacity: 0.7 }}>
              Schema, aktiviteter och mer information kommer att läggas till närmare bröllopet
            </Typography>
          </Box>
        </motion.div>
      </Box>
    </Container>
  );
};

export default Home; 
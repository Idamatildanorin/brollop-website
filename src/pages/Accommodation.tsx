import React from 'react';
import { Box, Typography, Container, Button } from '@mui/material';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

const Accommodation = () => {
  return (
    <Container maxWidth="md">
      <Box sx={{
        py: 6,
        background: 'linear-gradient(135deg, #fefefe 0%, #f8f6f0 100%)',
        minHeight: '100vh'
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
          {/* Tillbakaknapp */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Box sx={{ mb: 4 }}>
              <Button
                component={Link}
                to="/"
                variant="outlined"
                startIcon={<ArrowBackIcon />}
                sx={{
                  color: '#e74c3c',
                  borderColor: '#e74c3c',
                  borderRadius: 0,
                  fontFamily: '"Cormorant Garamond", serif',
                  fontWeight: 400,
                  '&:hover': {
                    borderColor: '#c0392b',
                    backgroundColor: 'rgba(231, 76, 60, 0.04)'
                  }
                }}
              >
                Tillbaka till hemsidan
              </Button>
            </Box>
          </motion.div>

          {/* Huvudrubrik */}
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
              Boende
            </Typography>
          </motion.div>

          {/* Innehåll */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <Box sx={{ mb: 6 }}>
              <Typography
                variant="h5"
                component="h2"
                sx={{
                  fontFamily: '"Cormorant Garamond", serif',
                  fontWeight: 400,
                  mb: 3,
                  color: '#e74c3c',
                  fontSize: '1.3rem'
                }}
              >
                Hotell & Boende
              </Typography>
              
              <Typography
                variant="body1"
                sx={{
                  fontFamily: '"Cormorant Garamond", serif',
                  fontWeight: 300,
                  mb: 3,
                  color: '#34495e',
                  lineHeight: 1.6,
                  fontSize: '1rem'
                }}
              >
                Vi har reserverat rum på [HOTELLNAMN] för våra gäster. 
                Rummen är reserverade under namnet "Pelle & Matilda" 
                och kan bokas fram till [DATUM].
              </Typography>

              <Typography
                variant="body1"
                sx={{
                  fontFamily: '"Cormorant Garamond", serif',
                  fontWeight: 300,
                  mb: 3,
                  color: '#34495e',
                  lineHeight: 1.6,
                  fontSize: '1rem'
                }}
              >
                För att boka ditt rum, ring [TELEFONNUMMER] eller 
                besök [WEBBPLATS] och använd bokningskoden [KOD].
              </Typography>

              <Typography
                variant="body1"
                sx={{
                  fontFamily: '"Cormorant Garamond", serif',
                  fontWeight: 300,
                  mb: 3,
                  color: '#34495e',
                  lineHeight: 1.6,
                  fontSize: '1rem'
                }}
              >
                Alternativt kan du kontakta oss direkt om du behöver 
                hjälp med bokningen.
              </Typography>
            </Box>

            <Box sx={{ mb: 6 }}>
              <Typography
                variant="h5"
                component="h2"
                sx={{
                  fontFamily: '"Cormorant Garamond", serif',
                  fontWeight: 400,
                  mb: 3,
                  color: '#e74c3c',
                  fontSize: '1.3rem'
                }}
              >
                Transport
              </Typography>
              
              <Typography
                variant="body1"
                sx={{
                  fontFamily: '"Cormorant Garamond", serif',
                  fontWeight: 300,
                  mb: 3,
                  color: '#34495e',
                  lineHeight: 1.6,
                  fontSize: '1rem'
                }}
              >
                [TRANSPORTINFORMATION - tåg, buss, bil etc.]
              </Typography>
            </Box>

            <Box sx={{ textAlign: 'center' }}>
              <Typography
                variant="body2"
                sx={{
                  color: '#95a5a6',
                  fontFamily: '"Cormorant Garamond", serif',
                  fontWeight: 300,
                  fontSize: '0.85rem',
                  fontStyle: 'italic'
                }}
              >
                Mer detaljerad information kommer snart
              </Typography>
            </Box>
          </motion.div>
        </Box>
      </Box>
    </Container>
  );
};

export default Accommodation; 
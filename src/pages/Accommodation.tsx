import React from 'react';
import { Box, Typography, Container, Button } from '@mui/material';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

const Accommodation = () => {
  return (
    <Container maxWidth="md" sx={{ px: { xs: 2, sm: 3 } }}>
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
            p: { xs: 3, sm: 4, md: 6 },
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
                Tillbaka
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
                fontSize: { xs: '1.8rem', sm: '2.2rem', md: '2.8rem' },
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
                Vi kommer att bo på Gibson Hotell under helgen och skulle vara 
                så glada om ni alla kunde bo där tillsammans med oss! 
                Det blir så mycket roligare att kunna träffas i hotellobbyn 
                och dela dessa speciella dagar tillsammans.
              </Typography>

              <Box sx={{ 
                backgroundColor: 'rgba(231, 76, 60, 0.05)', 
                p: { xs: 2, md: 3 }, 
                borderRadius: 2, 
                mb: 3,
                border: '1px solid rgba(231, 76, 60, 0.1)',
                overflow: 'hidden'
              }}>
                <Typography
                  variant="h6"
                  sx={{
                    fontFamily: '"Cormorant Garamond", serif',
                    fontWeight: 400,
                    mb: 2,
                    color: '#e74c3c',
                    fontSize: { xs: '1rem', md: '1.1rem' }
                  }}
                >
                  Bokningsinstruktioner:
                </Typography>
                <Typography
                  variant="body1"
                  sx={{
                    fontFamily: '"Cormorant Garamond", serif',
                    fontWeight: 300,
                    mb: 2,
                    color: '#34495e',
                    lineHeight: 1.6,
                    fontSize: { xs: '0.9rem', md: '1rem' },
                    wordBreak: 'break-all'
                  }}
                >
                  <strong>Bokningskod:</strong> MATILDAPELLE
                </Typography>
                <Typography
                  variant="body1"
                  sx={{
                    fontFamily: '"Cormorant Garamond", serif',
                    fontWeight: 300,
                    mb: 1,
                    color: '#34495e',
                    lineHeight: 1.6,
                    fontSize: { xs: '0.9rem', md: '1rem' },
                    wordBreak: 'break-word'
                  }}
                >
                  1. Gå till <a href="https://www.gibsonshotell.se/boka" target="_blank" rel="noopener noreferrer" style={{ color: '#e74c3c', textDecoration: 'none' }}>www.gibsonshotell.se/boka</a>
                </Typography>
                <Typography
                  variant="body1"
                  sx={{
                    fontFamily: '"Cormorant Garamond", serif',
                    fontWeight: 300,
                    mb: 1,
                    color: '#34495e',
                    lineHeight: 1.6,
                    fontSize: { xs: '0.9rem', md: '1rem' }
                  }}
                >
                  2. Skriv in er bokningskod, tryck tillämpa
                </Typography>
                <Typography
                  variant="body1"
                  sx={{
                    fontFamily: '"Cormorant Garamond", serif',
                    fontWeight: 300,
                    mb: 1,
                    color: '#34495e',
                    lineHeight: 1.6,
                    fontSize: { xs: '0.9rem', md: '1rem' }
                  }}
                >
                  3. Välj datum, antal gäster, sök
                </Typography>
                <Typography
                  variant="body1"
                  sx={{
                    fontFamily: '"Cormorant Garamond", serif',
                    fontWeight: 300,
                    color: '#34495e',
                    lineHeight: 1.6,
                    fontSize: { xs: '0.9rem', md: '1rem' }
                  }}
                >
                  Därefter är det bara att välja rum och klicka sig vidare i en logisk ordning.
                </Typography>
              </Box>


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
                Om du behöver hjälp med bokningen eller har några frågor, 
                tveka inte att kontakta oss direkt. Vi hjälper gärna till!
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
                Det finns stor parkering vid både Gibson Hotell och bröllopslokalen, 
                så bil är ett enkelt alternativ för er som kör.
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
                För er som åker från Göteborg finns tågstationen Jonsereds C nära både 
                hotellet och bröllopslokalen, så tåg är också ett bekvämt alternativ.
              </Typography>
            </Box>

            {/* Karta över området */}
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
                Karta över området
              </Typography>
              
              <Box sx={{ 
                width: '100%', 
                height: '400px', 
                borderRadius: 2,
                overflow: 'hidden',
                border: '1px solid rgba(231, 76, 60, 0.1)',
                boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                backgroundColor: 'rgba(231, 76, 60, 0.05)'
              }}>
                <Box sx={{ textAlign: 'center' }}>
                  <Typography
                    variant="h6"
                    sx={{
                      fontFamily: '"Cormorant Garamond", serif',
                      fontWeight: 400,
                      mb: 2,
                      color: '#e74c3c',
                      fontSize: '1.1rem'
                    }}
                  >
                    Karta över området
                  </Typography>
                  <Typography
                    variant="body1"
                    sx={{
                      fontFamily: '"Cormorant Garamond", serif',
                      fontWeight: 300,
                      mb: 3,
                      color: '#34495e',
                      fontSize: '1rem'
                    }}
                  >
                    Gibson Hotell ligger i Jonsered, nära Göteborg
                  </Typography>
                  <a 
                    href="https://www.google.com/maps/search/Gibsons+Hotell+Jonsered" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    style={{
                      display: 'inline-block',
                      padding: '12px 24px',
                      backgroundColor: '#e74c3c',
                      color: 'white',
                      textDecoration: 'none',
                      borderRadius: '4px',
                      fontFamily: '"Cormorant Garamond", serif',
                      fontSize: '1rem',
                      fontWeight: 400,
                      transition: 'background-color 0.3s ease'
                    }}
                    onMouseOver={(e) => e.target.style.backgroundColor = '#c0392b'}
                    onMouseOut={(e) => e.target.style.backgroundColor = '#e74c3c'}
                  >
                    Öppna i Google Maps
                  </a>
                </Box>
              </Box>
              
              <Typography
                variant="body2"
                sx={{
                  mt: 2,
                  color: '#95a5a6',
                  fontFamily: '"Cormorant Garamond", serif',
                  fontWeight: 300,
                  fontSize: '0.85rem',
                  fontStyle: 'italic',
                  textAlign: 'center'
                }}
              >
                Gibson Hotell och Jonsereds C tågstation
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
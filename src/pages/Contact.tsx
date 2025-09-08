import React from 'react';
import { Container, Typography, Box, Paper, Grid } from '@mui/material';
import { motion } from 'framer-motion';

const Contact = () => {
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
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Typography 
              variant="h3" 
              component="h1" 
              gutterBottom 
              align="center" 
              sx={{ 
                color: '#e74c3c',
                fontFamily: '"Cormorant Garamond", serif',
                fontWeight: 400,
                mb: 2,
                letterSpacing: '0.05em'
              }}
            >
              Kontakt
            </Typography>

            <Box sx={{ mb: 6, textAlign: 'center' }}>
              <Typography variant="h5" gutterBottom sx={{ 
                color: '#e74c3c', 
                mb: 2,
                fontFamily: '"Cormorant Garamond", serif',
                fontWeight: 400
              }}>
                Våra Toastmasters
              </Typography>
              <Typography variant="body1" sx={{ 
                mb: 4, 
                color: '#34495e', 
                maxWidth: '600px', 
                mx: 'auto',
                fontFamily: '"Cormorant Garamond", serif',
                fontWeight: 300,
                lineHeight: 1.6
              }}>
                Om du vill hålla tal, sjunga en sång eller bidra med någon annan form av underhållning under middagen, 
                kontakta våra toastmasters Erik och Maja direkt.
              </Typography>
            </Box>

          <Grid container spacing={4} justifyContent="center">
            <Grid item xs={12} md={5}>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
              >
                <Paper
                  elevation={3}
                  sx={{
                    p: 4,
                    height: '100%',
                    backgroundColor: 'rgba(231, 76, 60, 0.05)',
                    textAlign: 'center',
                    border: '1px solid rgba(231, 76, 60, 0.1)'
                  }}
                >
                  <Typography variant="h5" gutterBottom sx={{ 
                    mb: 3, 
                    color: '#e74c3c',
                    fontFamily: '"Cormorant Garamond", serif',
                    fontWeight: 400
                  }}>
                    Erik Karlsson
                  </Typography>
                  <Typography variant="body1" sx={{ 
                    mb: 2,
                    fontFamily: '"Cormorant Garamond", serif',
                    fontWeight: 300,
                    color: '#34495e'
                  }}>
                    erik.axel.carlsson@gmail.com
                  </Typography>
                  <Typography variant="body1" sx={{ 
                    mb: 3,
                    fontFamily: '"Cormorant Garamond", serif',
                    fontWeight: 300,
                    color: '#34495e'
                  }}>
                    070-587 58 85
                  </Typography>
                  <Typography variant="body2" sx={{ 
                    color: '#95a5a6', 
                    fontStyle: 'italic',
                    fontFamily: '"Cormorant Garamond", serif',
                    fontWeight: 300
                  }}>
                    Kontakta Erik för frågor om tal och framträdanden
                  </Typography>
                </Paper>
              </motion.div>
            </Grid>

            <Grid item xs={12} md={5}>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                <Paper
                  elevation={3}
                  sx={{
                    p: 4,
                    height: '100%',
                    backgroundColor: 'rgba(231, 76, 60, 0.05)',
                    textAlign: 'center',
                    border: '1px solid rgba(231, 76, 60, 0.1)'
                  }}
                >
                  <Typography variant="h5" gutterBottom sx={{ 
                    mb: 3, 
                    color: '#e74c3c',
                    fontFamily: '"Cormorant Garamond", serif',
                    fontWeight: 400
                  }}>
                    Maja Häggström
                  </Typography>
                  <Typography variant="body1" sx={{ 
                    mb: 2,
                    fontFamily: '"Cormorant Garamond", serif',
                    fontWeight: 300,
                    color: '#34495e'
                  }}>
                    majahagg@gmail.com
                  </Typography>
                  <Typography variant="body1" sx={{ 
                    mb: 3,
                    fontFamily: '"Cormorant Garamond", serif',
                    fontWeight: 300,
                    color: '#34495e'
                  }}>
                    072-531 04 84
                  </Typography>
                  <Typography variant="body2" sx={{ 
                    color: '#95a5a6', 
                    fontStyle: 'italic',
                    fontFamily: '"Cormorant Garamond", serif',
                    fontWeight: 300
                  }}>
                    Kontakta Maja för frågor om tal och framträdanden
                  </Typography>
                </Paper>
              </motion.div>
            </Grid>
          </Grid>

            <Box sx={{ mt: 8, textAlign: 'center' }}>
              <Typography variant="h6" gutterBottom>
                Allmänna frågor
              </Typography>
              <Typography variant="body1">
                För andra frågor om bröllopet, kontakta brudparet direkt.
              </Typography>
            </Box>
          </motion.div>
        </Box>
      </Box>
    </Container>
  );
};

export default Contact;

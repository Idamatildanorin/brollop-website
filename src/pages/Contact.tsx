import React from 'react';
import { Container, Typography, Box, Paper, Grid } from '@mui/material';
import { motion } from 'framer-motion';

const Contact = () => {
  return (
    <Container maxWidth="lg">
      <Box sx={{ py: 8 }}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Typography variant="h3" component="h1" gutterBottom align="center" sx={{ mb: 6 }}>
            Kontakt
          </Typography>

          <Box sx={{ mb: 6, textAlign: 'center' }}>
            <Typography variant="h5" gutterBottom sx={{ color: '#1976d2', mb: 2 }}>
              Våra Toastmasters
            </Typography>
            <Typography variant="body1" sx={{ mb: 4, color: '#0d47a1', maxWidth: '600px', mx: 'auto' }}>
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
                    backgroundColor: 'rgba(158, 118, 118, 0.05)',
                    textAlign: 'center'
                  }}
                >
                  <Typography variant="h5" gutterBottom color="primary" sx={{ mb: 3 }}>
                    Erik Karlsson
                  </Typography>
                  <Typography variant="body1" sx={{ mb: 2 }}>
                    erik.axel.carlsson@gmail.com
                  </Typography>
                  <Typography variant="body1" sx={{ mb: 3 }}>
                    070-587 58 85
                  </Typography>
                  <Typography variant="body2" sx={{ color: '#666', fontStyle: 'italic' }}>
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
                    backgroundColor: 'rgba(158, 118, 118, 0.05)',
                    textAlign: 'center'
                  }}
                >
                  <Typography variant="h5" gutterBottom color="primary" sx={{ mb: 3 }}>
                    Maja Häggström
                  </Typography>
                  <Typography variant="body1" sx={{ mb: 2 }}>
                    majahagg@gmail.com
                  </Typography>
                  <Typography variant="body1" sx={{ mb: 3 }}>
                    072-531 04 84
                  </Typography>
                  <Typography variant="body2" sx={{ color: '#666', fontStyle: 'italic' }}>
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
            <Typography variant="body1" sx={{ mb: 2 }}>
              För andra frågor om bröllopet, kontakta brudparet direkt.
            </Typography>
            <Typography variant="body1">
              Se även <strong>Information</strong>-sidan för praktiska detaljer om bröllopet.
            </Typography>
          </Box>
        </motion.div>
      </Box>
    </Container>
  );
};

export default Contact;

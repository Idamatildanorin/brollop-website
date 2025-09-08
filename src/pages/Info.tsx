import React from 'react';
import { Container, Typography, Box, Paper, Grid } from '@mui/material';
import { motion } from 'framer-motion';

const Info = () => {
  const sections = [
    {
      title: 'Vigsel',
      details: [
        'Datum: 5 september 2026',
        'Tid: 14:00',
        'Plats: [Namn på kyrkan]',
        'Adress: [Kyrkans adress]'
      ]
    },
    {
      title: 'Fest',
      details: [

          
        'Tid: Efter vigseln',
        'Plats: [Namn på festlokalen]',
        'Adress: [Festlokalens adress]',
        'Klädkod: Kavaj'
      ]
    },
    {
      title: 'Boende',
      details: [
        'Vi rekommenderar följande hotell:',
        '[Hotell 1] - [Adress]',
        '[Hotell 2] - [Adress]',
        'Boka i god tid!'
      ]
    },
    {
      title: 'Transport',
      details: [
        'Parkering finns vid både kyrkan och festlokalen',
        'Transport mellan kyrkan och festlokalen ordnas',
        'Närmaste tågstation: [Station]',
        'Taxi kan beställas på: [Telefonnummer]'
      ]
    }
  ];

  return (
    <Container maxWidth="lg">
      <Box sx={{ py: 8 }}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Typography variant="h3" component="h1" gutterBottom align="center" sx={{ mb: 6 }}>
            Information
          </Typography>

          <Grid container spacing={4}>
            {sections.map((section, index) => (
              <Grid item xs={12} md={6} key={section.title}>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <Paper
                    elevation={3}
                    sx={{
                      p: 4,
                      height: '100%',
                      backgroundColor: 'rgba(158, 118, 118, 0.05)'
                    }}
                  >
                    <Typography variant="h5" gutterBottom color="primary">
                      {section.title}
                    </Typography>
                    {section.details.map((detail, i) => (
                      <Typography
                        key={i}
                        variant="body1"
                        paragraph={i < section.details.length - 1}
                        sx={{ mb: 2 }}
                      >
                        {detail}
                      </Typography>
                    ))}
                  </Paper>
                </motion.div>
              </Grid>
            ))}
          </Grid>

          <Box sx={{ mt: 8, textAlign: 'center' }}>
            <Typography variant="h6" gutterBottom>
              Kontakta oss
            </Typography>
            <Typography variant="body1">
              Vid frågor om tal och framträdanden, se Toastmasters-sidan.
            </Typography>
          </Box>
        </motion.div>
      </Box>
    </Container>
  );
};

export default Info; 
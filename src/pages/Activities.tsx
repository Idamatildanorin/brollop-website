import React from 'react';
import { Container, Typography, Box, Paper, Grid } from '@mui/material';
import { motion } from 'framer-motion';

const activities = [
  {
    category: 'Restauranger',
    items: [
      {
        name: '[Restaurangnamn 1]',
        description: 'Mysig restaurang med lokala råvaror',
        address: '[Adress]',
        website: '[Webbplats]',
        phone: '[Telefonnummer]'
      },
      {
        name: '[Restaurangnamn 2]',
        description: 'Prisbelönt fine dining',
        address: '[Adress]',
        website: '[Webbplats]',
        phone: '[Telefonnummer]'
      }
    ]
  },
  {
    category: 'Sevärdheter',
    items: [
      {
        name: '[Sevärdhet 1]',
        description: 'Historisk plats med vacker utsikt',
        address: '[Adress]',
        website: '[Webbplats]',
        phone: '[Telefonnummer]'
      },
      {
        name: '[Sevärdhet 2]',
        description: 'Populärt museum',
        address: '[Adress]',
        website: '[Webbplats]',
        phone: '[Telefonnummer]'
      }
    ]
  },
  {
    category: 'Shopping',
    items: [
      {
        name: '[Köpcentrum/Galleria]',
        description: 'Shopping och restauranger under samma tak',
        address: '[Adress]',
        website: '[Webbplats]',
        phone: '[Telefonnummer]'
      },
      {
        name: '[Shoppingområde]',
        description: 'Mysiga butiker i stadskärnan',
        address: '[Adress]',
        website: '[Webbplats]',
        phone: '[Telefonnummer]'
      }
    ]
  }
];

const Activities = () => {
  return (
    <Container maxWidth="lg">
      <Box sx={{ py: 8 }}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Typography variant="h3" component="h1" gutterBottom align="center" sx={{ mb: 6 }}>
            Aktiviteter & Sevärdheter
          </Typography>

          <Typography variant="body1" paragraph align="center" sx={{ mb: 6 }}>
            Här hittar ni tips på aktiviteter och sevärdheter i området för er som vill
            utforska staden under er vistelse.
          </Typography>

          <Grid container spacing={4}>
            {activities.map((category, index) => (
              <Grid item xs={12} key={category.category}>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.2 }}
                >
                  <Typography variant="h4" gutterBottom color="primary" sx={{ mb: 3 }}>
                    {category.category}
                  </Typography>

                  <Grid container spacing={3}>
                    {category.items.map((item, itemIndex) => (
                      <Grid item xs={12} md={6} key={item.name}>
                        <Paper
                          elevation={3}
                          sx={{
                            p: 3,
                            height: '100%',
                            bgcolor: 'rgba(158, 118, 118, 0.05)',
                            transition: 'transform 0.2s',
                            '&:hover': {
                              transform: 'translateY(-4px)'
                            }
                          }}
                        >
                          <Typography variant="h6" gutterBottom>
                            {item.name}
                          </Typography>
                          <Typography variant="body1" paragraph>
                            {item.description}
                          </Typography>
                          <Typography variant="body2" color="text.secondary">
                            <strong>Adress:</strong> {item.address}
                          </Typography>
                          <Typography variant="body2" color="text.secondary">
                            <strong>Telefon:</strong> {item.phone}
                          </Typography>
                          <Typography variant="body2" color="text.secondary">
                            <strong>Webb:</strong> {item.website}
                          </Typography>
                        </Paper>
                      </Grid>
                    ))}
                  </Grid>
                </motion.div>
              </Grid>
            ))}
          </Grid>

          <Box sx={{ mt: 8, textAlign: 'center' }}>
            <Typography variant="h5" gutterBottom>
              Fler tips?
            </Typography>
            <Typography variant="body1">
              Har ni några favoritplatser i området som ni vill tipsa andra gäster om?
              Kontakta oss så lägger vi till dem här!
            </Typography>
          </Box>
        </motion.div>
      </Box>
    </Container>
  );
};

export default Activities; 
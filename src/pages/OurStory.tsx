import React from 'react';
import { Container, Typography, Box, Paper } from '@mui/material';
import { motion } from 'framer-motion';

const storyItems = [
  {
    year: '2013',
    title: 'Vårt första möte',
    description: 'Vi träffas i Umeå'
  },
  {
    year: '2018',
    title: 'Nytt kapitel',
    description: 'Vi flyttar tillsammans till Trollhättan'
  },
  {
    year: '2019',
    title: 'Vårt första hem',
    description: 'Vi köper vår första lägenhet och flyttar till Göteborg'
  },
  {
    year: '2020',
    title: 'Äventyr i sikte',
    description: 'Vi bygger vår drömvan tillsammans'
  },
  {
    year: '2021',
    title: 'På vägarna',
    description: 'Vi ger oss ut på vår drömresa med vanen'
  },
  {
    year: '2022',
    title: 'Familjen växer',
    description: 'Rut kommer till oss ❤️'
  },
  {
    year: '2024',
    title: 'För alltid tillsammans',
    description: 'Vi förlovar oss ❤️'
  }
];

const OurStory = () => {
  return (
    <Container maxWidth="md">
      <Box sx={{ py: 8 }}>
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
              mb: 6,
              color: '#9E7676'
            }}
          >
            Vår Historia
          </Typography>

          <Box sx={{ position: 'relative', maxWidth: '800px', mx: 'auto' }}>
            {/* Vertikal tidslinje */}
            <Box
              sx={{
                position: 'absolute',
                left: { xs: 80, sm: 100 },
                top: 0,
                bottom: 0,
                width: 3,
                background: 'linear-gradient(180deg, #9E7676 0%, #9E7676 30%, rgba(158, 118, 118, 0.7) 70%, rgba(158, 118, 118, 0.4) 100%)',
                boxShadow: '0 0 8px rgba(158, 118, 118, 0.2)'
              }}
            />

            {/* Story items */}
            {storyItems.map((item, index) => (
              <motion.div
                key={item.year}
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Box
                  sx={{
                    display: 'flex',
                    mb: 4,
                    position: 'relative'
                  }}
                >
                  {/* Årtal */}
                  <Box
                    sx={{
                      width: { xs: 80, sm: 100 },
                      pr: 3,
                      textAlign: 'right',
                      pt: 1
                    }}
                  >
                    <Typography
                      variant="h6"
                      sx={{ 
                        color: '#9E7676',
                        fontSize: '1.1rem',
                        fontWeight: 600
                      }}
                    >
                      {item.year}
                    </Typography>
                  </Box>

                  {/* Punkt på tidslinjen */}
                  <Box
                    sx={{
                      position: 'absolute',
                      left: { xs: 71, sm: 91 },
                      top: '50%',
                      width: 20,
                      height: 20,
                      borderRadius: '50%',
                      bgcolor: '#fff',
                      border: '3px solid #9E7676',
                      transform: 'translateY(-50%)',
                      boxShadow: '0 0 0 4px rgba(158, 118, 118, 0.15), 0 2px 4px rgba(0,0,0,0.1)',
                      zIndex: 1
                    }}
                  />

                  {/* Innehåll */}
                  <Paper
                    elevation={2}
                    sx={{
                      flex: 1,
                      ml: 4,
                      p: 2,
                      background: 'linear-gradient(145deg, #ffffff 0%, #f8f8f8 100%)',
                      borderRadius: 2,
                      position: 'relative'
                    }}
                  >
                    <Typography 
                      variant="h6" 
                      gutterBottom
                      sx={{ 
                        color: '#594545',
                        fontSize: '1.1rem',
                        fontWeight: 500
                      }}
                    >
                      {item.title}
                    </Typography>
                    <Typography 
                      variant="body1"
                      sx={{ 
                        color: '#594545',
                        opacity: 0.8
                      }}
                    >
                      {item.description}
                    </Typography>
                  </Paper>
                </Box>
              </motion.div>
            ))}
          </Box>
        </motion.div>
      </Box>
    </Container>
  );
};

export default OurStory; 
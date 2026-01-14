import React from 'react';
import { Container, Typography, Box, Paper } from '@mui/material';
import { motion } from 'framer-motion';

const scheduleItems = [
  {
    time: '13:30',
    title: 'Samling för transport',
    description: 'Vi samlas för gemensam transport till vigselplatsen (exakt plats meddelas senare)'
  },
  {
    time: '15:00',
    title: 'Borgerlig vigsel i naturen',
    description: 'En vacker ceremoni under bar himmel'
  },
  {
    time: '15:00',
    title: 'Transport till festlokalen',
    description: 'Gemensam transport till Jonsereds Fabrikstråk'
  },
  {
    time: '15:30',
    title: 'Incheckning & uppfräschning',
    description: 'Möjlighet att checka in på Gibson Hotell och fräscha upp sig'
  },
  {
    time: '16:30',
    title: 'Välkomstdrink',
    description: 'Mingel och fotografering'
  },
  {
    time: '17:30',
    title: 'Middag serveras',
    description: 'Trerätters festmiddag med tal och underhållning'
  },
  {
    time: '20:00',
    title: 'Bröllopstårta',
    description: 'Tårtskärning och kaffe'
  },
  {
    time: '21:00',
    title: 'Första dansen',
    description: 'Brudparets första dans som gifta'
  },
  {
    time: '21:30',
    title: 'Dansen börjar',
    description: 'Dans och fest till sent'
  },
  {
    time: '01:00',
    title: 'Festen avslutas',
    description: 'Tack för en underbar kväll!'
  }
];

const Schedule = () => {
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
              color: '#1976d2'
            }}
          >
            Schema för bröllopsdagen
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
                background: 'linear-gradient(180deg, #1976d2 0%, #1976d2 30%, rgba(25, 118, 210, 0.7) 70%, rgba(25, 118, 210, 0.4) 100%)',
                boxShadow: '0 0 8px rgba(25, 118, 210, 0.2)'
              }}
            />

            {/* Schema-items */}
            {scheduleItems.map((item, index) => (
              <motion.div
                key={item.time}
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
                  {/* Tidpunkt */}
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
                        color: '#0d47a1',
                        fontSize: '1.1rem'
                      }}
                    >
                      {item.time}
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
                      border: '3px solid #1976d2',
                      transform: 'translateY(-50%)',
                      boxShadow: '0 0 0 4px rgba(25, 118, 210, 0.15), 0 2px 4px rgba(0,0,0,0.1)',
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
                        color: '#0d47a1',
                        fontSize: '1.1rem',
                        fontWeight: 500
                      }}
                    >
                      {item.title}
                    </Typography>
                    <Typography 
                      variant="body1"
                      sx={{ 
                        color: '#0d47a1',
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

export default Schedule; 
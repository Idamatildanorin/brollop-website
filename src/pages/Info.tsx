import { Box, Typography, Container } from '@mui/material';
import { motion } from 'framer-motion';

const Info = () => {
  return (
    <Container maxWidth="md">
      <Box sx={{ 
        py: 1,
        background: 'transparent'
      }}>
        {/* Diskret ram runt allt innehåll */}
        <Box
          sx={{
            background: 'var(--content-surface-rose)',
            borderRadius: '20px',
            p: { xs: 4, md: 6 },
            boxShadow: '0 8px 32px rgba(0, 0, 0, 0.08)',
            border: '1px solid rgba(179, 18, 75, 0.18)',
            position: 'relative',
            '&::before': {
              content: '""',
              position: 'absolute',
              top: 0,
              left: 0,
              right: 0,
              height: '3px',
              background: 'linear-gradient(90deg, #b3124b, #d88faa)',
              borderRadius: '20px 20px 0 0'
            }
          }}
        >
          {/* Rubrik */}
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
                  fontFamily: "'Playfair Display', serif",
                  fontWeight: 400,
                  mb: 4,
                  color: '#b3124b',
                  fontSize: { xs: '2.2rem', md: '2.8rem' },
                  letterSpacing: '0.05em'
                }}
              >
              Bra att veta
            </Typography>
          </motion.div>

          {/* När */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <Box sx={{ mb: 4 }}>
              <Typography 
                variant="h5" 
                component="h2" 
                sx={{ 
                  fontFamily: "'Playfair Display', serif",
                  fontWeight: 400,
                  mb: 2,
                  color: '#b3124b',
                  fontSize: '1.4rem',
                  letterSpacing: '0.05em'
                }}
              >
                När
              </Typography>
              <Typography 
                variant="body1" 
                sx={{ 
                  fontFamily: "'Playfair Display', serif",
                  color: '#9b7a86',
                  fontWeight: 300,
                  fontSize: '0.95rem',
                  lineHeight: 1.6,
                  mb: 2
                }}
              >
                5 september kl 15:00
              </Typography>
            </Box>
          </motion.div>

          {/* Klädkod */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <Box sx={{ mb: 4 }}>
              <Typography 
                variant="h5" 
                component="h2" 
                sx={{ 
                  fontFamily: "'Playfair Display', serif",
                  fontWeight: 400,
                  mb: 2,
                  color: '#b3124b',
                  fontSize: '1.4rem',
                  letterSpacing: '0.05em'
                }}
              >
                Klädkod
              </Typography>
              <Typography 
                variant="body1" 
                sx={{ 
                  fontFamily: "'Playfair Display', serif",
                  color: '#9b7a86',
                  fontWeight: 300,
                  fontSize: '0.95rem',
                  lineHeight: 1.6,
                  mb: 2
                }}
              >
                Kavaj
              </Typography>
            </Box>
          </motion.div>



          {/* Presenter */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            <Box sx={{ mb: 4 }}>
              <Typography 
                variant="h5" 
                component="h2" 
                sx={{ 
                  fontFamily: "'Playfair Display', serif",
                  fontWeight: 400,
                  mb: 2,
                  color: '#b3124b',
                  fontSize: '1.4rem',
                  letterSpacing: '0.05em'
                }}
              >
                Presenter
              </Typography>
              <Typography 
                variant="body1" 
                sx={{ 
                  fontFamily: "'Playfair Display', serif",
                  color: '#9b7a86',
                  fontWeight: 300,
                  fontSize: '0.95rem',
                  lineHeight: 1.6,
                  mb: 2
                }}
              >
                Er närvaro är den största gåvan vi kan få! Om ni ändå vill ge oss något, så uppskattar vi bidrag till vår bröllopsresa.
              </Typography>
            </Box>
          </motion.div>

        </Box>
      </Box>
    </Container>
  );
};

export default Info;
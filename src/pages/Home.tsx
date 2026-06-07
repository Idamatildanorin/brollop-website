import { useState, useEffect } from 'react';
import { Box, Typography, Container, Button, Stack } from '@mui/material';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { contentCard, softButton, bodyText } from '../styles';

const Home = () => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
  });
  const weddingDate = new Date(2026, 8, 5, 15, 0);

  useEffect(() => {
    const timer = setInterval(() => {
      const now = new Date().getTime();
      const distance = weddingDate.getTime() - now;
      setTimeLeft({
        days: Math.floor(distance / (1000 * 60 * 60 * 24)),
      });
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <Container maxWidth="md">
      <Box sx={{ py: { xs: 2.5, md: 4 }, background: 'transparent' }}>
        <Box
          sx={{
            ...contentCard,
            p: { xs: 4, md: 6 },
            textAlign: 'center',
          }}
        >
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <Typography
              component="h1"
              variant="h3"
              aria-label="Pelle och Matilda"
              sx={{
                fontFamily: "'Playfair Display', serif",
                color: '#1f5c3a',
                fontWeight: 400,
                letterSpacing: '0.02em',
                fontSize: { xs: '2.15rem', md: '2.7rem' },
                lineHeight: 1.3,
                mb: 1.75,
              }}
            >
              Pelle{' '}
              <motion.span
                aria-hidden
                animate={{ scale: [1, 1.12, 1] }}
                transition={{ duration: 1.6, repeat: Infinity, ease: 'easeInOut' }}
                style={{
                  display: 'inline-block',
                  color: '#b3124b',
                  margin: '0 0.2em',
                  fontSize: '0.92em',
                }}
              >
                ♥
              </motion.span>{' '}
              Matilda
            </Typography>

            <Typography
              sx={{
                fontFamily: "'Playfair Display', serif",
                color: '#9b7a86',
                fontWeight: 300,
                fontSize: { xs: '1rem', md: '1.08rem' },
                letterSpacing: '0.02em',
                mb: 0.5,
              }}
            >
              5 september 2026 kl 15:00
            </Typography>
            <Typography
              sx={{
                fontFamily: "'Playfair Display', serif",
                color: '#b58a9a',
                fontWeight: 300,
                fontSize: { xs: '0.9rem', md: '0.95rem' },
                opacity: 0.9,
              }}
            >
              Jonsereds fabriker
            </Typography>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.25 }}
          >
            <Box
              sx={{
                display: 'inline-flex',
                flexDirection: 'column',
                alignItems: 'center',
                mt: { xs: 3, md: 3.5 },
                mb: { xs: 3.5, md: 4 },
                px: { xs: 3.5, md: 4.5 },
                py: { xs: 2, md: 2.5 },
                borderRadius: '999px',
                bgcolor: 'rgba(255, 255, 255, 0.55)',
              }}
            >
              <Typography
                sx={{
                  fontFamily: "'Playfair Display', serif",
                  color: '#1f5c3a',
                  fontWeight: 400,
                  fontSize: { xs: '2.4rem', md: '2.85rem' },
                  lineHeight: 1,
                }}
              >
                {Math.max(0, timeLeft.days)}
              </Typography>
              <Typography
                sx={{
                  fontFamily: "'Playfair Display', serif",
                  color: '#9b7a86',
                  fontWeight: 300,
                  fontSize: '0.85rem',
                  mt: 0.75,
                }}
              >
                {timeLeft.days === 1 ? 'dag kvar' : 'dagar kvar'}
              </Typography>
            </Box>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
          >
            <Stack
              direction={{ xs: 'column', sm: 'row' }}
              spacing={1.5}
              justifyContent="center"
              alignItems="center"
            >
              <Button
                component={Link}
                to="/tidsplan"
                variant="contained"
                disableElevation
                sx={{
                  ...softButton,
                  bgcolor: 'rgba(74, 157, 111, 0.12)',
                  color: '#1f5c3a',
                  '&:hover': {
                    bgcolor: 'rgba(74, 157, 111, 0.2)',
                    transform: 'translateY(-1px)',
                  },
                }}
              >
                Se tidsplanen
              </Button>
            </Stack>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.55 }}
          >
            <Box sx={{ mt: { xs: 3, md: 3.5 }, maxWidth: 400, mx: 'auto' }}>
              <Typography
                sx={{
                  ...bodyText,
                  fontSize: { xs: '0.9rem', md: '0.94rem' },
                  lineHeight: 1.65,
                }}
              >
                Vi önskar oss inga presenter — det viktigaste är att få umgås och fira tillsammans
                med er.
              </Typography>
              <Typography
                sx={{
                  ...bodyText,
                  color: '#1f5c3a',
                  fontSize: { xs: '0.88rem', md: '0.92rem' },
                  mt: 1.25,
                }}
              >
                Klädkod: kavaj / festfin
              </Typography>
            </Box>
          </motion.div>
        </Box>
      </Box>
    </Container>
  );
};

export default Home;

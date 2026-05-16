import { useState, useEffect } from 'react';
import { Box, Typography, Container, Button, Stack } from '@mui/material';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { contentCard, softButton, dressCodeFrame } from '../styles';

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
              <Box
                component="span"
                aria-hidden
                sx={{
                  color: '#b3124b',
                  mx: 0.5,
                  fontSize: '0.92em',
                }}
              >
                ♥
              </Box>{' '}
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
                  color: '#b58a9a',
                  fontWeight: 300,
                  fontSize: { xs: '2.4rem', md: '2.85rem' },
                  lineHeight: 1,
                }}
              >
                {timeLeft.days}
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
                dagar kvar
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
                Tidsplan
              </Button>
              <Button
                component={Link}
                to="/rsvp"
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
                OSA
              </Button>
            </Stack>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.55 }}
          >
            <Box
              sx={{
                mt: { xs: 3.5, md: 4 },
                pt: { xs: 3, md: 3.5 },
                borderTop: '1px solid rgba(179, 18, 75, 0.08)',
              }}
            >
              <Typography
                sx={{
                  fontFamily: "'Playfair Display', serif",
                  color: '#7d606c',
                  fontWeight: 300,
                  fontSize: { xs: '0.92rem', md: '0.98rem' },
                  lineHeight: 1.75,
                  maxWidth: 440,
                  mx: 'auto',
                }}
              >
                Vi önskar oss inga presenter. Det viktigaste för oss är att få umgås, fira och skapa
                minnen tillsammans med alla våra favoritmänniskor.
              </Typography>
              <Typography
                sx={{
                  fontFamily: "'Playfair Display', serif",
                  color: '#4a9d6f',
                  fontWeight: 400,
                  fontStyle: 'italic',
                  fontSize: { xs: '0.92rem', md: '0.98rem' },
                  lineHeight: 1.65,
                  mt: 1.5,
                  maxWidth: 440,
                  mx: 'auto',
                }}
              >
                Så kom redo att bjuda till och ha en rolig helg med oss!
              </Typography>
              <Box sx={dressCodeFrame}>
                <Typography
                  sx={{
                    fontFamily: "'Playfair Display', serif",
                    color: '#1f5c3a',
                    fontWeight: 400,
                    fontSize: { xs: '0.88rem', md: '0.92rem' },
                    lineHeight: 1.5,
                    letterSpacing: '0.02em',
                  }}
                >
                  Klädkod: kavaj / festfin
                </Typography>
              </Box>
            </Box>
          </motion.div>
        </Box>
      </Box>
    </Container>
  );
};

export default Home;

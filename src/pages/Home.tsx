import { useState, useEffect } from 'react';
import { Box, Typography, Container, Button } from '@mui/material';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const Home = () => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0
  });
  // Ange bröllopsdatumet här (format: YYYY, MM-1, DD, HH, MM)
  const weddingDate = new Date(2026, 8, 5, 15, 0); // 5 september 2026 kl 15:00

  useEffect(() => {
    const timer = setInterval(() => {
      const now = new Date().getTime();
      const distance = weddingDate.getTime() - now;

      setTimeLeft({
        days: Math.floor(distance / (1000 * 60 * 60 * 24))
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);



  // Konfetti vid sidladdning
  useEffect(() => {
    const confetti = (window as any).confetti;
    if (!confetti) return;
    confetti({ particleCount: 80, spread: 70, origin: { y: 0.2 } });
    setTimeout(() => {
      confetti({ particleCount: 60, angle: 60, spread: 55, origin: { x: 0 } });
      confetti({ particleCount: 60, angle: 120, spread: 55, origin: { x: 1 } });
    }, 250);
  }, []);

  return (
    <Container maxWidth="md">
      <Box sx={{ 
        py: { xs: 5, md: 9 },
        background: 'transparent',
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center'
      }}>
        {/* Innehåll med elegant ram */}
        <Box
          sx={{
            backgroundColor: '#f6dce6',
            borderRadius: '20px',
            p: { xs: 4, md: 6 },
            py: { xs: 5, md: 7 },
            position: 'relative',
            boxShadow: '0 10px 40px rgba(0, 0, 0, 0.08)',
            border: '1px solid rgba(179, 18, 75, 0.12)',
          }}
        >
          <Box
            component="svg"
            viewBox="0 0 100 100"
            preserveAspectRatio="none"
            xmlns="http://www.w3.org/2000/svg"
            sx={{
              position: 'absolute',
              inset: '-14px',
              width: 'calc(100% + 28px)',
              height: 'calc(100% + 28px)',
              pointerEvents: 'none',
              zIndex: 0,
            }}
          >
            <path
              d="M12,6 C18,2 24,10 30,6 C36,2 42,10 48,6 C54,2 60,10 66,6 C72,2 78,10 84,6 C90,4 92,10 92,14 C96,20 88,26 92,32 C96,38 88,44 92,50 C96,56 88,62 92,68 C96,74 88,80 92,86 C92,90 88,96 84,94 C78,90 72,98 66,94 C60,90 54,98 48,94 C42,90 36,98 30,94 C24,90 18,98 12,94 C8,92 4,88 6,84 C10,78 2,72 6,66 C10,60 2,54 6,48 C10,42 2,36 6,30 C10,24 2,18 6,12 C8,8 10,6 12,6 Z"
              fill="#ffffff"
              stroke="#b3124b"
              strokeWidth="1.2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </Box>

          <Box
            sx={{
              position: 'relative',
              zIndex: 1,
              bgcolor: 'transparent',
              borderRadius: '18px',
              pb: { xs: 2, md: 3 },
            }}
          >
          {/* Huvudrubrik - mer kompakt */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <Box
              sx={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                minHeight: { xs: 110, md: 130 },
                mt: { xs: 1, md: 1.5 },
                mb: { xs: 2, md: 2.5 },
                pl: { xs: 1.25, md: 1.75 },
              }}
            >
              <Typography
                component="h1"
                variant="h3"
                aria-label="Pelle och Matilda"
                sx={{
                  textAlign: 'center',
                  px: 1,
                  fontFamily: "'Playfair Display', serif",
                  color: '#1f5c3a',
                  fontWeight: 500,
                  letterSpacing: '0.08em',
                  fontSize: { xs: '2.15rem', md: '2.75rem' },
                  lineHeight: 1.3,
                }}
              >
                Pelle{' '}
                <Box
                  component="span"
                  sx={{
                    color: '#4a9d6f',
                    px: { xs: 0.35, md: 0.5 },
                    display: 'inline-block',
                    transform: 'translateY(-0.04em)',
                  }}
                  aria-hidden
                >
                  ♥
                </Box>{' '}
                Matilda
              </Typography>
            </Box>
          </motion.div>

          {/* Datum och tid – framsidetext */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <Box
              sx={{
                textAlign: 'center',
                mb: { xs: 3.5, md: 4.5 },
                mt: { xs: 1, md: 1.5 }
              }}
            >
              <Typography
                variant="body1"
                sx={{
                  fontFamily: "'Playfair Display', serif",
                  color: '#b58a9a',
                  fontWeight: 300,
                  fontSize: { xs: '1rem', md: '1.1rem' },
                  letterSpacing: '0.08em',
                  mb: 1
                }}
              >
                5 september 2026 kl 15:00
              </Typography>
              <Typography
                variant="body2"
                sx={{
                  fontFamily: "'Playfair Display', serif",
                  color: '#b58a9a',
                  fontWeight: 200,
                  fontSize: { xs: '0.8rem', md: '0.9rem' },
                  letterSpacing: '0.05em',
                  opacity: 0.8
                }}
              >
                Jonsereds Fabriksstråk
              </Typography>
            </Box>
          </motion.div>

          {/* Nedräkning */}
          <Box sx={{ mt: { xs: 2.5, md: 3.5 }, mb: { xs: 3, md: 4 } }} onClick={() => {
            const confetti = (window as any).confetti;
            if (confetti) confetti({ particleCount: 80, spread: 70, origin: { y: 0.3 } });
          }}>
            <Box sx={{ 
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              gap: 2,
              maxWidth: '300px',
              mx: 'auto'
            }}>
              <motion.div
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.5 }}
              >
                <Box
                  sx={{
                    py: { xs: 4.5, md: 5.5 },
                    px: 4,
                    textAlign: 'center',
                    borderBottom: '1px solid rgba(0, 0, 0, 0.08)',
                    minWidth: '120px'
                  }}
                >
                  <Typography 
                    variant="h3" 
                    sx={{ 
                      fontFamily: "'Playfair Display', serif",
                      color: '#b58a9a',
                      fontWeight: 300,
                      mb: 1,
                      fontSize: { xs: '2.5rem', md: '3rem' }
                    }}
                  >
                    {timeLeft.days}
                  </Typography>
                  <Typography 
                    variant="caption" 
                    sx={{ 
                      fontFamily: "'Playfair Display', serif",
                      color: '#9b7a86',
                      fontWeight: 400,
                      textTransform: 'uppercase',
                      letterSpacing: '0.1em',
                      fontSize: '0.8rem'
                    }}
                  >
                    dagar kvar
                  </Typography>
                </Box>
              </motion.div>
            </Box>
          </Box>

          {/* Sektion med boende + OSA tillsammans */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.0 }}
          >
            <Box
              sx={{
                textAlign: 'center',
                maxWidth: '520px',
                mx: 'auto',
                mt: { xs: 4, md: 5.5 },
                mb: { xs: 2.5, md: 3.5 },
                p: { xs: 3, md: 4 },
                pt: { xs: 4, md: 5 }
              }}
            >
              <Box
                sx={{
                  display: 'flex',
                  flexDirection: { xs: 'column', sm: 'row' },
                  justifyContent: 'center',
                  alignItems: 'flex-start',
                  gap: { xs: 3, sm: 4 }
                }}
              >
                <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', minWidth: 116 }}>
                  <Typography
                    sx={{
                      width: '100%',
                      textAlign: 'center',
                      transform: 'translateX(-10px)',
                      color: '#9b7a86',
                      fontFamily: "'Playfair Display', serif",
                      fontSize: '0.78rem',
                      letterSpacing: '0.02em',
                      wordSpacing: '0.35em',
                      mb: 0.25
                    }}
                  >
                    Boka hotell
                  </Typography>
                  <svg viewBox="0 0 70 44" width="76" height="34" aria-hidden="true" style={{ marginBottom: 4 }}>
                    <path
                      d="M4 6 C 23 7, 27 19, 34 34"
                      fill="none"
                      stroke="#b58a9a"
                      strokeWidth="1.4"
                      strokeLinecap="round"
                    />
                    <path d="M30 30 L34 36 L38 30" fill="none" stroke="#b58a9a" strokeWidth="1.4" strokeLinecap="round" />
                  </svg>
                  <Button
                    component={Link}
                    to="/accommodation"
                    variant="outlined"
                    sx={{
                      fontFamily: "'Playfair Display', serif",
                      color: '#b3124b',
                      borderColor: 'rgba(179, 18, 75, 0.35)',
                      fontWeight: 400,
                      fontSize: '0.88rem',
                      letterSpacing: '0.03em',
                      textTransform: 'none',
                      borderRadius: '8px',
                      px: 2.3,
                      py: 0.55,
                      minWidth: '100px',
                      lineHeight: 1.2,
                      '&:hover': {
                        borderColor: '#b3124b',
                        backgroundColor: 'rgba(179, 18, 75, 0.08)'
                      }
                    }}
                  >
                    Boende
                  </Button>
                </Box>

                <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', minWidth: 116 }}>
                  <Typography
                    sx={{
                      width: '100%',
                      textAlign: 'center',
                      transform: 'translateX(10px)',
                      color: '#9b7a86',
                      fontFamily: "'Playfair Display', serif",
                      fontSize: '0.78rem',
                      letterSpacing: '0.02em',
                      wordSpacing: '0.35em',
                      mb: 0.25
                    }}
                  >
                    Svara här
                  </Typography>
                  <svg viewBox="0 0 70 44" width="76" height="34" aria-hidden="true" style={{ marginBottom: 4 }}>
                    <path
                      d="M66 6 C 47 7, 43 19, 36 34"
                      fill="none"
                      stroke="#b58a9a"
                      strokeWidth="1.4"
                      strokeLinecap="round"
                    />
                    <path d="M32 30 L36 36 L40 30" fill="none" stroke="#b58a9a" strokeWidth="1.4" strokeLinecap="round" />
                  </svg>
                  <Button
                    component={Link}
                    to="/rsvp"
                    variant="outlined"
                    sx={{
                      fontFamily: "'Playfair Display', serif",
                      color: '#b3124b',
                      borderColor: 'rgba(179, 18, 75, 0.35)',
                      fontWeight: 400,
                      fontSize: '0.88rem',
                      letterSpacing: '0.03em',
                      textTransform: 'none',
                      borderRadius: '8px',
                      px: 2.3,
                      py: 0.55,
                      minWidth: '100px',
                      lineHeight: 1.2,
                      '&:hover': {
                        borderColor: '#b3124b',
                        backgroundColor: 'rgba(179, 18, 75, 0.08)'
                      }
                    }}
                  >
                    OSA
                  </Button>
                </Box>
              </Box>
            </Box>
          </motion.div>
          </Box>
        </Box>
      </Box>
    </Container>
  );
};

export default Home; 
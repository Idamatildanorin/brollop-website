import { useState, useEffect, useRef } from 'react';
import { Box, Typography, Container, Button } from '@mui/material';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const Home = () => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0
  });
  const logoRef = useRef<HTMLImageElement | null>(null);

  // Ange bröllopsdatumet här (format: YYYY, MM-1, DD, HH, MM)
  const weddingDate = new Date(2026, 8, 5, 15, 0); // 5 september 2026 kl 15:00

  // TODO-meddelande för gästerna (ändra här när ni vill uppdatera)
  const todoMessage = {
    title: 'Dags att boka boende',
    description: 'Vi har blockerat rum på Gibsons Hotell i Jonsered för 4-6 september. Vid nyår släpps allmänheten på att boka, så för att vara garanterad ett rum rekommenderar vi att boka innan dess.'
  };

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

  // Kontinuerligt "regn" av konfetti över loggan
  useEffect(() => {
    const confetti = (window as any).confetti;
    if (!confetti) return;
    const intervalId = setInterval(() => {
      const img = logoRef.current;
      const viewportW = window.innerWidth || 1;
      const viewportH = window.innerHeight || 1;
      let left = 0.4, right = 0.6, top = 0.15; // fallback mitt på
      if (img) {
        const rect = img.getBoundingClientRect();
        left = rect.left / viewportW;
        right = (rect.right) / viewportW;
        top = Math.max(0, (rect.top / viewportH) - 0.06); // lite ovanför loggan
      }
      // Släpp 3 små "droppar" per puls över loggans bredd
      for (let i = 0; i < 3; i++) {
        const x = left + Math.random() * Math.max(0.02, (right - left));
        confetti({
          particleCount: 4,
          angle: 90, // nedåt
          spread: 18,
          startVelocity: 4,
          gravity: 1.15,
          scalar: 0.8,
          ticks: 220,
          drift: (Math.random() - 0.5) * 0.6,
          origin: { x, y: top }
        });
      }
    }, 900);
    return () => clearInterval(intervalId);
  }, []);

  return (
    <Container maxWidth="md">
      <Box sx={{ 
        py: { xs: 3, md: 5 },
        background: '#ffffff',
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center'
      }}>
        {/* Innehåll med elegant ram */}
        <Box
          sx={{
            background: '#ffffff',
            borderRadius: '20px',
            p: { xs: 3, md: 4 },
            py: { xs: 3, md: 4 },
            position: 'relative',
            boxShadow: '0 10px 40px rgba(0, 0, 0, 0.08)',
            border: '1px solid rgba(0, 0, 0, 0.06)'
          }}
        >
          {/* Huvudrubrik - mer kompakt */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <Box sx={{ 
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              mb: 0
            }}>
              <img
                src="/images/ChatGPT Image 14 okt. 2025 19_49_39.png"
                alt="Pelle och Matilda"
                ref={logoRef}
                style={{
                  width: '100%',
                  height: 'auto',
                  maxWidth: '320px',
                  display: 'block',
                  filter: 'brightness(1.2) contrast(1.1)',
                  backgroundColor: '#ffffff'
                }}
              />
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
                mb: 2,
                mt: 1.5
              }}
            >
              <Typography
                variant="body1"
                sx={{
                  fontFamily: "'Playfair Display', serif",
                  color: '#e74c3c',
                  fontWeight: 300,
                  fontSize: { xs: '1rem', md: '1.1rem' },
                  letterSpacing: '0.08em',
                  mb: 0.5
                }}
              >
                5 september kl 15:00
              </Typography>
              <Typography
                variant="body2"
                sx={{
                  fontFamily: "'Playfair Display', serif",
                  color: '#95a5a6',
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

          {/* Nedräkning - mer kompakt */}
          <Box sx={{ mt: -1.5, mb: 1 }} onClick={() => {
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
                    p: 3,
                    textAlign: 'center',
                    borderBottom: '1px solid rgba(0, 0, 0, 0.08)',
                    minWidth: '120px'
                  }}
                >
                  <Typography 
                    variant="h3" 
                    sx={{ 
                      fontFamily: "'Playfair Display', serif",
                      color: '#e74c3c',
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
                      color: '#7f8c8d',
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

          {/* TODO: Hotellbokning */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.0 }}
          >
            <Box 
              sx={{ 
                textAlign: 'center',
                maxWidth: '500px',
                mx: 'auto',
                mt: 2.5,
                mb: 1.5,
                p: 2.5
              }}
            >
              <Typography 
                variant="h6" 
                sx={{ 
                  fontFamily: "'Playfair Display', serif",
                  color: '#e74c3c',
                  fontWeight: 400,
                  fontSize: '1.2rem',
                  letterSpacing: '0.02em',
                  mb: 1.5
                }}
              >
                {todoMessage.title}
              </Typography>
              <Typography 
                variant="body2" 
                sx={{ 
                  color: '#6b7280', 
                  fontFamily: "'Playfair Display', serif",
                  color: '#7f8c8d',
                  fontWeight: 300,
                  fontSize: '0.95rem',
                  lineHeight: 1.6,
                  mb: 2
                }}
              >
                {todoMessage.description}
              </Typography>
              <Button
                component={Link}
                to="/accommodation"
                variant="outlined"
                sx={{
                  fontFamily: "'Playfair Display', serif",
                  color: '#e74c3c',
                  borderColor: '#6b7280',
                  fontWeight: 300,
                  fontSize: '0.95rem',
                  textTransform: 'none',
                  borderRadius: '8px',
                  px: 3,
                  py: 1,
                  '&:hover': {
                    borderColor: '#c0392b',
                    backgroundColor: 'rgba(231, 76, 60, 0.08)'
                  }
                }}
              >
                Se boende →
              </Button>
            </Box>
          </motion.div>
        </Box>
      </Box>
    </Container>
  );
};

export default Home; 
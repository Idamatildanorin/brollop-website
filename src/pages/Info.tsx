import { Box, Typography, Container } from '@mui/material';
import { motion } from 'framer-motion';
import { contentCard, pageTitle, bodyText, dressCodeFrame } from '../styles';

const Info = () => {
  return (
    <Container maxWidth="md">
      <Box sx={{ 
        py: 1,
        background: 'transparent'
      }}>
        {/* Diskret ram runt allt innehåll */}
        <Box sx={{ ...contentCard, p: { xs: 4, md: 6 } }}>
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
                  ...pageTitle,
                  mb: 4,
                  fontSize: { xs: '2rem', md: '2.5rem' },
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
                  ...pageTitle,
                  mb: 1.5,
                  fontSize: '1.2rem',
                }}
              >
                När
              </Typography>
              <Typography
                variant="body1"
                sx={{
                  ...bodyText,
                  fontSize: '0.95rem',
                  mb: 2,
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
            <Box sx={{ mb: 4, textAlign: 'center' }}>
              <Box sx={{ ...dressCodeFrame, mt: 0 }}>
                <Typography
                  component="p"
                  sx={{
                    ...pageTitle,
                    fontSize: '0.78rem',
                    letterSpacing: '0.04em',
                    mb: 0.75,
                  }}
                >
                  Klädkod
                </Typography>
                <Typography
                  variant="body1"
                  sx={{
                    fontFamily: "'Playfair Display', serif",
                    color: '#1f5c3a',
                    fontWeight: 400,
                    fontSize: '0.95rem',
                    mb: 0,
                  }}
                >
                  Kavaj / festfin
                </Typography>
              </Box>
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
                sx={{ ...pageTitle, mb: 1.5, fontSize: '1.2rem' }}
              >
                Presenter
              </Typography>
              <Typography variant="body1" sx={{ ...bodyText, fontSize: '0.95rem', mb: 1.5 }}>
                Vi önskar oss inga presenter. Det viktigaste för oss är att få umgås, fira och skapa
                minnen tillsammans med alla våra favoritmänniskor.
              </Typography>
              <Typography
                variant="body1"
                sx={{
                  fontFamily: "'Playfair Display', serif",
                  color: '#4a9d6f',
                  fontWeight: 400,
                  fontStyle: 'italic',
                  fontSize: '0.95rem',
                  lineHeight: 1.65,
                  mb: 2,
                }}
              >
                Så kom redo att bjuda till och ha en rolig helg med oss!
              </Typography>
            </Box>
          </motion.div>

        </Box>
      </Box>
    </Container>
  );
};

export default Info;
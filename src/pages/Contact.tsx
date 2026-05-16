import { Container, Typography, Box } from '@mui/material';
import { motion } from 'framer-motion';
import { contentCard, pageTitle, bodyText } from '../styles';
import ToastmastersSection from '../components/ToastmastersSection';

const Contact = () => {
  return (
    <Container maxWidth="md" sx={{ px: { xs: 2, sm: 3 } }}>
      <Box sx={{ py: 1, background: 'transparent' }}>
        <Box sx={{ ...contentCard, p: { xs: 3, sm: 4, md: 6 } }}>
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
                fontSize: { xs: '1.8rem', sm: '2.2rem', md: '2.5rem' },
              }}
            >
              Våra fantastiska toastmasters
            </Typography>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <ToastmastersSection variant="cards" hideTitle />

              <Box
                sx={{
                  mt: 6,
                  pt: 4,
                  borderTop: '1px solid rgba(179, 18, 75, 0.1)',
                  textAlign: 'center',
                }}
              >
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                >
                  <Typography
                    sx={{
                      ...bodyText,
                      fontSize: '0.9rem',
                      mb: 3,
                    }}
                  >
                    För andra frågor om bröllopet, kontakta brudparet direkt
                  </Typography>

                  <Box
                    sx={{
                      display: 'flex',
                      justifyContent: 'center',
                      alignItems: 'center',
                      gap: 4,
                      flexWrap: 'wrap',
                    }}
                  >
                    <Box sx={{ textAlign: 'center' }}>
                      <Typography
                        sx={{
                          ...pageTitle,
                          fontSize: '0.95rem',
                          mb: 0.5,
                        }}
                      >
                        Matilda
                      </Typography>
                      <Typography
                        component="a"
                        href="tel:+46702786980"
                        sx={{
                          ...bodyText,
                          fontSize: '0.88rem',
                          textDecoration: 'none',
                          color: '#8a6d78',
                          '&:hover': { color: '#1f5c3a' },
                        }}
                      >
                        070-278 69 80
                      </Typography>
                    </Box>

                    <Box
                      sx={{
                        width: '1px',
                        height: 30,
                        bgcolor: 'rgba(179, 18, 75, 0.15)',
                        display: { xs: 'none', sm: 'block' },
                      }}
                    />

                    <Box sx={{ textAlign: 'center' }}>
                      <Typography
                        sx={{
                          ...pageTitle,
                          fontSize: '0.95rem',
                          mb: 0.5,
                        }}
                      >
                        Pelle
                      </Typography>
                      <Typography
                        component="a"
                        href="tel:+46738400914"
                        sx={{
                          ...bodyText,
                          fontSize: '0.88rem',
                          textDecoration: 'none',
                          color: '#8a6d78',
                          '&:hover': { color: '#1f5c3a' },
                        }}
                      >
                        073-840 09 14
                      </Typography>
                    </Box>
                  </Box>
                </motion.div>
              </Box>
            </motion.div>
          </motion.div>
        </Box>
      </Box>
    </Container>
  );
};

export default Contact;

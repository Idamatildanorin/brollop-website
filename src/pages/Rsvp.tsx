import React, { useState, useEffect } from 'react';
import {
  Container,
  Box,
  TextField,
  Button,
  FormControl,
  FormControlLabel,
  Radio,
  RadioGroup,
  Typography,
  Paper,
  Alert,
  CircularProgress
} from '@mui/material';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import emailjs from '@emailjs/browser';
import Confetti from 'react-confetti';

// Initialize EmailJS
emailjs.init("TrPdgkkOUYIHHEi6A");


interface CombinedForm {
  name: string;
  attending: string;
  dietaryRestrictions: string;
  danceSong: string;
  message: string;
}

const Rsvp = () => {
  const [formData, setFormData] = useState<CombinedForm>({
    name: '',
    attending: '',
    dietaryRestrictions: '',
    danceSong: '',
    message: ''
  });

  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [showConfetti, setShowConfetti] = useState(false);
  const [windowDimensions, setWindowDimensions] = useState({
    width: window.innerWidth,
    height: window.innerHeight
  });

  useEffect(() => {
    const handleResize = () => {
      setWindowDimensions({
        width: window.innerWidth,
        height: window.innerHeight
      });
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    if (showConfetti) {
      const timer = setTimeout(() => setShowConfetti(false), 8000);
      return () => clearTimeout(timer);
    }
  }, [showConfetti]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    try {
      const result = await emailjs.send(
        'service_fzp1zvi',
        'template_jvsuzlv',
        {
          to_name: 'Pelle & Matilda',
          from_name: formData.name,
          guest_name: formData.name,
          attending: formData.attending === 'yes' ? 'Ja, kommer' : 'Nej, kan inte komma',
          dietary_restrictions: formData.dietaryRestrictions || 'Inga',
          dance_song: formData.danceSong || 'Ingen låt vald',
          message: formData.message || 'Inget meddelande'
        },
        'TrPdgkkOUYIHHEi6A'
      );

      if (result.text === 'OK') {
        if (formData.attending === 'yes') {
          setShowConfetti(true);
        }
        setSubmitted(true);
      } else {
        setError('Något gick fel. Vänligen försök igen.');
      }
    } catch (error) {
      setError('Något gick fel. Vänligen försök igen.');
      console.error('EmailJS error:', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <Container maxWidth="md">
      {showConfetti && (
        <Confetti
          width={windowDimensions.width}
          height={windowDimensions.height}
          recycle={false}
          numberOfPieces={300}
          gravity={0.2}
          colors={['#e74c3c', '#c0392b', '#f39c12', '#e67e22', '#d35400']}
          initialVelocityY={-10}
          initialVelocityX={5}
        />
      )}
      

      <Box sx={{ 
        py: 1,
        background: 'linear-gradient(135deg, #fefefe 0%, #f8f6f0 100%)'
      }}>
        {/* Diskret ram runt allt innehåll */}
        <Box
          sx={{
            background: '#fff',
            borderRadius: '20px',
            p: { xs: 4, md: 6 },
            boxShadow: '0 8px 32px rgba(0, 0, 0, 0.08)',
            border: '1px solid rgba(231, 76, 60, 0.1)',
            position: 'relative',
            '&::before': {
              content: '""',
              position: 'absolute',
              top: 0,
              left: 0,
              right: 0,
              height: '3px',
              background: 'linear-gradient(90deg, #e74c3c, #c0392b)',
              borderRadius: '20px 20px 0 0'
            }
          }}
        >

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            {submitted ? (
              <Alert 
                severity="success" 
                sx={{ 
                  mt: 4,
                  '& .MuiAlert-message': {
                    fontSize: '1.1rem',
                    textAlign: 'center',
                    width: '100%'
                  }
                }}
              >
                {formData.attending === 'yes' 
                  ? "Hurra! Vi ser fram emot att fira tillsammans med dig! 🎉" 
                  : "Tack för ditt svar! Vi kommer att sakna dig! ❤️"}
              </Alert>
            ) : (
              <>
                <Typography 
                  variant="h3" 
                  component="h1" 
                  gutterBottom 
                  align="center" 
                  sx={{ 
                    color: '#e74c3c',
                    fontFamily: '"Cormorant Garamond", serif',
                    fontWeight: 400,
                    mb: 2,
                    letterSpacing: '0.05em'
                  }}
                >
                  OSA
                </Typography>
                
                <Typography variant="h6" align="center" gutterBottom sx={{ 
                  mb: 2, 
                  color: '#34495e',
                  fontFamily: '"Cormorant Garamond", serif',
                  fontWeight: 300,
                  fontStyle: 'italic'
                }}>
                  Vänligen svara senast den 5 juni 2026
                </Typography>

                <Typography variant="body2" align="center" sx={{ 
                  mb: 4, 
                  color: '#2c3e50',
                  fontFamily: '"Cormorant Garamond", serif',
                  fontWeight: 400,
                  fontStyle: 'italic',
                  fontSize: '0.95rem',
                  maxWidth: '400px',
                  mx: 'auto',
                  lineHeight: 1.4
                }}>
                  Vi älskar barn, men denna kväll vill vi fira tillsammans med våra vuxna vänner och familj. Ammande får självklart komma.
                </Typography>
              <Box sx={{ 
                background: 'transparent',
                borderRadius: '12px'
              }}>
                {error && (
                  <Alert severity="error" sx={{ mb: 3 }}>
                    {error}
                  </Alert>
                )}
                
                <form onSubmit={handleSubmit}>
                  <Box sx={{ display: 'flex', flexDirection: 'column', gap: 3 }}>
                    <TextField
                      required
                      label="Namn"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      fullWidth
                      disabled={loading}
                      sx={{
                        '& .MuiOutlinedInput-root': {
                          borderRadius: 0,
                          fontFamily: '"Cormorant Garamond", serif'
                        }
                      }}
                    />

                    <FormControl required>
                      <Typography variant="subtitle1" gutterBottom sx={{ 
                        color: '#34495e',
                        fontFamily: '"Cormorant Garamond", serif',
                        fontWeight: 400
                      }}>
                        Kommer du på bröllopet?
                      </Typography>
                      <RadioGroup
                        name="attending"
                        value={formData.attending}
                        onChange={handleChange}
                      >
                        <FormControlLabel
                          value="yes"
                          control={<Radio />}
                          label="JA, såklart jag vill komma!"
                          disabled={loading}
                          sx={{
                            fontFamily: '"Cormorant Garamond", serif',
                            fontWeight: 400
                          }}
                        />
                        <FormControlLabel
                          value="no"
                          control={<Radio />}
                          label="Nej, jag kan tyvärr inte komma"
                          disabled={loading}
                          sx={{
                            fontFamily: '"Cormorant Garamond", serif',
                            fontWeight: 400
                          }}
                        />
                      </RadioGroup>
                    </FormControl>



                    <AnimatePresence>
                      {formData.attending === 'yes' && (
                        <motion.div
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: 'auto' }}
                          exit={{ opacity: 0, height: 0 }}
                          transition={{ duration: 0.3 }}
                        >
                          <Box sx={{ display: 'flex', flexDirection: 'column', gap: 3 }}>
                            <TextField
                              label="Min bästa danslåt"
                              name="danceSong"
                              value={formData.danceSong}
                              onChange={handleChange}
                              fullWidth
                              placeholder="Låt och artist som får dig att dansa"
                              helperText="Hjälp oss skapa den bästa spellistan!"
                              disabled={loading}
                              sx={{
                                '& .MuiOutlinedInput-root': {
                                  borderRadius: 0,
                                  fontFamily: '"Cormorant Garamond", serif'
                                }
                              }}
                            />

                            <TextField
                              label="Allergier eller specialkost"
                              name="dietaryRestrictions"
                              value={formData.dietaryRestrictions}
                              onChange={handleChange}
                              fullWidth
                              multiline
                              rows={2}
                              disabled={loading}
                              sx={{
                                '& .MuiOutlinedInput-root': {
                                  borderRadius: 0,
                                  fontFamily: '"Cormorant Garamond", serif'
                                }
                              }}
                            />

                            <TextField
                              label="Hälsning till brudparet"
                              name="message"
                              value={formData.message}
                              onChange={handleChange}
                              fullWidth
                              multiline
                              rows={4}
                              placeholder="Skriv en personlig hälsning till Pelle & Matilda..."
                              helperText="Vi ser fram emot att läsa era fina meddelanden!"
                              disabled={loading}
                              sx={{
                                '& .MuiOutlinedInput-root': {
                                  borderRadius: 0,
                                  fontFamily: '"Cormorant Garamond", serif'
                                }
                              }}
                            />

                            {/* Toastmasters sektion */}
                            <Box sx={{ 
                              mt: 4, 
                              p: 3, 
                              backgroundColor: 'rgba(231, 76, 60, 0.05)', 
                              borderRadius: 2,
                              border: '1px solid rgba(231, 76, 60, 0.1)'
                            }}>
                              <Typography
                                variant="h6"
                                sx={{
                                  fontFamily: '"Cormorant Garamond", serif',
                                  fontWeight: 400,
                                  mb: 2,
                                  color: '#e74c3c',
                                  fontSize: { xs: '1rem', md: '1.1rem' }
                                }}
                              >
                                Vill du hålla tal eller bidra med underhållning?
                              </Typography>
                              
                              <Typography
                                variant="body1"
                                sx={{
                                  fontFamily: '"Cormorant Garamond", serif',
                                  fontWeight: 300,
                                  mb: 2,
                                  color: '#34495e',
                                  lineHeight: 1.6,
                                  fontSize: { xs: '0.9rem', md: '1rem' }
                                }}
                              >
                                Kontakta våra toastmasters Maja & Erik direkt:
                              </Typography>
                              
                              <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
                                <Typography
                                  variant="body1"
                                  sx={{
                                    fontFamily: '"Cormorant Garamond", serif',
                                    fontWeight: 400,
                                    color: '#e74c3c',
                                    fontSize: { xs: '0.9rem', md: '1rem' }
                                  }}
                                >
                                  Erik Karlsson
                                </Typography>
                                <Typography
                                  variant="body1"
                                  sx={{
                                    fontFamily: '"Cormorant Garamond", serif',
                                    fontWeight: 300,
                                    color: '#34495e',
                                    fontSize: { xs: '0.85rem', md: '0.9rem' }
                                  }}
                                >
                                  erik.axel.carlsson@gmail.com
                                </Typography>
                                <Typography
                                  variant="body1"
                                  sx={{
                                    fontFamily: '"Cormorant Garamond", serif',
                                    fontWeight: 300,
                                    color: '#34495e',
                                    fontSize: { xs: '0.85rem', md: '0.9rem' },
                                    mb: 1
                                  }}
                                >
                                  070-587 58 85
                                </Typography>
                                
                                <Typography
                                  variant="body1"
                                  sx={{
                                    fontFamily: '"Cormorant Garamond", serif',
                                    fontWeight: 400,
                                    color: '#e74c3c',
                                    fontSize: { xs: '0.9rem', md: '1rem' }
                                  }}
                                >
                                  Maja Häggström
                                </Typography>
                                <Typography
                                  variant="body1"
                                  sx={{
                                    fontFamily: '"Cormorant Garamond", serif',
                                    fontWeight: 300,
                                    color: '#34495e',
                                    fontSize: { xs: '0.85rem', md: '0.9rem' }
                                  }}
                                >
                                  majahagg@gmail.com
                                </Typography>
                                <Typography
                                  variant="body1"
                                  sx={{
                                    fontFamily: '"Cormorant Garamond", serif',
                                    fontWeight: 300,
                                    color: '#34495e',
                                    fontSize: { xs: '0.85rem', md: '0.9rem' }
                                  }}
                                >
                                  072-531 04 84
                                </Typography>
                              </Box>
                            </Box>
                          </Box>
                        </motion.div>
                      )}
                    </AnimatePresence>


                    <Button
                      type="submit"
                      variant="contained"
                      color="primary"
                      size="large"
                      disabled={loading}
                      sx={{ 
                        mt: 2,
                        position: 'relative',
                        minHeight: 48,
                        backgroundColor: '#e74c3c',
                        borderRadius: 0,
                        fontFamily: '"Cormorant Garamond", serif',
                        fontWeight: 400,
                        textTransform: 'none',
                        letterSpacing: '0.05em',
                        '&:hover': {
                          backgroundColor: '#c0392b'
                        }
                      }}
                    >
                      {loading ? (
                        <>
                          <CircularProgress
                            size={24}
                            sx={{
                              position: 'absolute',
                              top: '50%',
                              left: '50%',
                              marginTop: '-12px',
                              marginLeft: '-12px',
                            }}
                          />
                          Skickar...
                        </>
                      ) : (
                        'Skicka svar'
                      )}
                    </Button>
                  </Box>
                </form>
              </Box>
              </>
            )}
          </motion.div>
        </Box>
      </Box>
    </Container>
  );
};

export default Rsvp; 
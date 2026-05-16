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
  Alert,
  CircularProgress,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
} from '@mui/material';
import { motion, AnimatePresence } from 'framer-motion';
import emailjs from '@emailjs/browser';
import Confetti from 'react-confetti';
import { contentCard, pageTitle, bodyText, rsvpTextFieldSx } from '../styles';
import { emailjsConfig, isEmailJsConfigured } from '../config/emailjs';
import {
  RSVP_LIMITS,
  sanitizeRsvpField,
  validateRsvpInput,
  canSubmitRsvp,
  isValidGuestName,
} from '../lib/rsvpForm';
import ToastmastersSection from '../components/ToastmastersSection';


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
  const [fieldErrors, setFieldErrors] = useState<{ name?: string; attending?: string }>({});
  const [honeypot, setHoneypot] = useState('');
  const [confirmOpen, setConfirmOpen] = useState(false);
  const [pendingRsvp, setPendingRsvp] = useState<{
    trimmedName: string;
    attendingLabel: string;
    isAttending: boolean;
    dietaryLabel: string;
  } | null>(null);
  const [nameTouched, setNameTouched] = useState(false);
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

  const runValidation = () => {
    const { errors, trimmedName, isValid } = validateRsvpInput(formData.name, formData.attending);
    setFieldErrors(errors);
    return { errors, trimmedName, isValid };
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value,
    }));
    if (name === 'name') {
      if (nameTouched || fieldErrors.name) {
        const { errors } = validateRsvpInput(value, formData.attending);
        setFieldErrors((prev) => ({ ...prev, name: errors.name }));
      }
    }
    if (name === 'attending' && fieldErrors.attending) {
      setFieldErrors((prev) => ({ ...prev, attending: undefined }));
    }
  };

  const handleNameBlur = () => {
    setNameTouched(true);
    const { errors } = validateRsvpInput(formData.name, formData.attending);
    setFieldErrors((prev) => ({ ...prev, name: errors.name }));
  };

  const canSubmit = canSubmitRsvp(formData.name, formData.attending);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (loading) return;

    setError(null);
    setNameTouched(true);

    if (honeypot.trim()) {
      setSubmitted(true);
      return;
    }

    const { trimmedName, isValid } = runValidation();
    if (!isValid || !isValidGuestName(trimmedName)) {
      return;
    }

    if (!isEmailJsConfigured()) {
      setError('OSA är inte konfigurerat ännu. Kontakta brudparet direkt.');
      return;
    }

    const isAttending = formData.attending === 'yes';
    const attendingLabel = isAttending ? 'Ja, kommer' : 'Nej, kan inte komma';
    const dietarySanitized = sanitizeRsvpField(
      formData.dietaryRestrictions,
      RSVP_LIMITS.dietaryRestrictions,
    );

    setPendingRsvp({
      trimmedName,
      attendingLabel,
      isAttending,
      dietaryLabel: dietarySanitized || 'Inga',
    });
    setConfirmOpen(true);
  };

  const handleConfirmSend = async () => {
    if (!pendingRsvp || loading) return;

    const { trimmedName, attendingLabel } = pendingRsvp;

    if (!isValidGuestName(trimmedName)) {
      setConfirmOpen(false);
      setFieldErrors({ name: 'Skriv ett riktigt namn (minst två bokstäver)' });
      return;
    }

    setConfirmOpen(false);
    setLoading(true);
    setError(null);

    const payload = {
      to_name: 'Pelle & Matilda',
      guest_name: trimmedName,
      from_name: trimmedName,
      name: trimmedName,
      attending: attendingLabel,
      dietary_restrictions:
        sanitizeRsvpField(formData.dietaryRestrictions, RSVP_LIMITS.dietaryRestrictions) ||
        'Inga',
      dance_song:
        sanitizeRsvpField(formData.danceSong, RSVP_LIMITS.danceSong) || 'Ingen låt vald',
      message: sanitizeRsvpField(formData.message, RSVP_LIMITS.message) || 'Inget meddelande',
    };

    try {
      emailjs.init(emailjsConfig.publicKey);
      const result = await emailjs.send(
        emailjsConfig.serviceId,
        emailjsConfig.templateId,
        payload,
        emailjsConfig.publicKey,
      );

      if (result.text === 'OK') {
        if (formData.attending === 'yes') {
          setShowConfetti(true);
        }
        setSubmitted(true);
        setPendingRsvp(null);
      } else {
        setError('Något gick fel. Vänligen försök igen.');
      }
    } catch (err) {
      setError('Något gick fel. Vänligen försök igen.');
      console.error('EmailJS error:', err);
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
        background: 'transparent'
      }}>
        {/* Diskret ram runt allt innehåll */}
        <Box sx={{ ...contentCard, p: { xs: 4, md: 6 } }}>
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
                  component="h1"
                  align="center"
                  sx={{
                    ...pageTitle,
                    mb: 2,
                    fontSize: { xs: '2rem', md: '2.5rem' },
                  }}
                >
                  OSA
                </Typography>

                <Typography
                  align="center"
                  sx={{
                    fontFamily: "'Playfair Display', serif",
                    color: '#9b7a86',
                    fontWeight: 300,
                    letterSpacing: '0.02em',
                    mb: 2,
                    fontSize: { xs: '1rem', md: '1.08rem' },
                  }}
                >
                  Vänligen svara senast den 5 juni 2026
                </Typography>

                <Typography
                  align="center"
                  sx={{
                    fontFamily: "'Playfair Display', serif",
                    color: '#8a6d78',
                    fontWeight: 300,
                    letterSpacing: '0.01em',
                    lineHeight: 1.5,
                    mb: 4,
                    fontSize: '0.95rem',
                    maxWidth: 400,
                    mx: 'auto',
                  }}
                >
                  Vi älskar barn, men denna kväll vill vi fira tillsammans med våra vuxna vänner och familj. Ammande får självklart följa med.
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
                
                <form onSubmit={handleSubmit} noValidate>
                  <Box sx={{ display: 'flex', flexDirection: 'column', gap: 3 }}>
                    <Box
                      component="label"
                      aria-hidden
                      sx={{
                        position: 'absolute',
                        width: 1,
                        height: 1,
                        padding: 0,
                        margin: -1,
                        overflow: 'hidden',
                        clip: 'rect(0, 0, 0, 0)',
                        whiteSpace: 'nowrap',
                        border: 0,
                      }}
                    >
                      Lämna tomt
                      <input
                        type="text"
                        name="website"
                        value={honeypot}
                        onChange={(e) => setHoneypot(e.target.value)}
                        tabIndex={-1}
                        autoComplete="off"
                      />
                    </Box>

                    <TextField
                      required
                      label="Namn"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      onBlur={handleNameBlur}
                      fullWidth
                      disabled={loading}
                      error={Boolean(fieldErrors.name)}
                      helperText={fieldErrors.name}
                      inputProps={{
                        'aria-required': true,
                        maxLength: RSVP_LIMITS.name,
                        autoComplete: 'name',
                      }}
                      sx={rsvpTextFieldSx}
                    />

                    <FormControl required error={Boolean(fieldErrors.attending)}>
                      <Typography sx={{ ...bodyText, mb: 1, fontSize: '0.95rem' }}>
                        Kommer du på bröllopet?
                      </Typography>
                      <RadioGroup
                        name="attending"
                        value={formData.attending}
                        onChange={handleChange}
                        aria-required
                      >
                        <FormControlLabel
                          value="yes"
                          control={<Radio />}
                          label="JA, såklart jag vill komma!"
                          disabled={loading}
                        />
                        <FormControlLabel
                          value="no"
                          control={<Radio />}
                          label="Nej, jag kan tyvärr inte komma"
                          disabled={loading}
                        />
                      </RadioGroup>
                      {fieldErrors.attending && (
                        <Typography
                          sx={{
                            ...bodyText,
                            color: '#b3124b',
                            fontSize: '0.75rem',
                            mt: 0.5,
                            display: 'block',
                          }}
                        >
                          {fieldErrors.attending}
                        </Typography>
                      )}
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
                              inputProps={{ maxLength: RSVP_LIMITS.danceSong }}
                              sx={rsvpTextFieldSx}
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
                              inputProps={{ maxLength: RSVP_LIMITS.dietaryRestrictions }}
                              sx={rsvpTextFieldSx}
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
                              inputProps={{ maxLength: RSVP_LIMITS.message }}
                              sx={rsvpTextFieldSx}
                            />

                            <ToastmastersSection variant="inline" />
                          </Box>
                        </motion.div>
                      )}
                    </AnimatePresence>


                    <Button
                      type="submit"
                      variant="contained"
                      color="primary"
                      size="large"
                      disabled={loading || !canSubmit}
                      sx={{
                        mt: 2,
                        position: 'relative',
                        minHeight: 48,
                        backgroundColor: '#b3124b',
                        borderRadius: 0,
                        letterSpacing: '0.05em',
                        '&:hover': {
                          backgroundColor: '#8f0f3b',
                        },
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
                        'Granska och skicka'
                      )}
                    </Button>
                  </Box>
                </form>

                <Dialog
                  open={confirmOpen}
                  onClose={() => !loading && setConfirmOpen(false)}
                  aria-labelledby="rsvp-confirm-title"
                  PaperProps={{
                    sx: {
                      borderRadius: '12px',
                      p: 0.5,
                      maxWidth: 400,
                    },
                  }}
                >
                  <DialogTitle
                    id="rsvp-confirm-title"
                    sx={{
                      ...pageTitle,
                      fontSize: '1.1rem',
                      textAlign: 'center',
                      pb: 1,
                    }}
                  >
                    Innan du skickar, kolla så att din info stämmer
                  </DialogTitle>
                  <DialogContent sx={{ px: 3, pb: 1 }}>
                    <Box
                      sx={{
                        textAlign: 'center',
                        ...bodyText,
                        fontSize: '0.95rem',
                        lineHeight: 1.85,
                      }}
                    >
                      <Typography component="p" sx={{ mb: 1.5 }}>
                        Du osar för{' '}
                        <Box component="span" sx={{ color: '#1f5c3a', fontWeight: 500 }}>
                          {pendingRsvp?.trimmedName}
                        </Box>
                      </Typography>
                      <Typography component="p" sx={{ mb: pendingRsvp?.isAttending ? 1.5 : 0 }}>
                        Svar:{' '}
                        <Box component="span" sx={{ color: '#1f5c3a', fontWeight: 500 }}>
                          {pendingRsvp?.attendingLabel}
                        </Box>
                      </Typography>
                      {pendingRsvp?.isAttending && (
                        <Typography component="p">
                          Allergier/specialkost:{' '}
                          <Box component="span" sx={{ color: '#1f5c3a', fontWeight: 500 }}>
                            {pendingRsvp.dietaryLabel}
                          </Box>
                        </Typography>
                      )}
                    </Box>
                  </DialogContent>
                  <DialogActions
                    sx={{
                      justifyContent: 'center',
                      gap: 1,
                      pb: 2.5,
                      px: 2,
                    }}
                  >
                    <Button
                      onClick={() => setConfirmOpen(false)}
                      disabled={loading}
                      sx={{ color: '#8a6d78' }}
                    >
                      Ändra
                    </Button>
                    <Button
                      onClick={handleConfirmSend}
                      variant="contained"
                      disabled={loading || !pendingRsvp?.trimmedName}
                      sx={{
                        backgroundColor: '#b3124b',
                        px: 3,
                        '&:hover': { backgroundColor: '#8f0f3b' },
                      }}
                    >
                      {loading ? 'Skickar…' : 'Ja, skicka'}
                    </Button>
                  </DialogActions>
                </Dialog>
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
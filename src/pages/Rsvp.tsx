import React from 'react';
import { useState } from 'react';
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
  Alert
} from '@mui/material';
import { motion } from 'framer-motion';

interface GuestForm {
  name: string;
  email: string;
  attending: string;
  dietaryRestrictions: string;
  message: string;
}

const Rsvp = () => {
  const [formData, setFormData] = useState<GuestForm>({
    name: '',
    email: '',
    attending: '',
    dietaryRestrictions: '',
    message: ''
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Här kan du lägga till logik för att spara svaret i en databas
    console.log(formData);
    setSubmitted(true);
  };

  return (
    <Container maxWidth="md">
      <Box sx={{ py: 8 }}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Typography variant="h3" component="h1" gutterBottom align="center">
            OSA
          </Typography>
          <Typography variant="h6" align="center" gutterBottom sx={{ mb: 4 }}>
            Vänligen svara senast den 5 augusti 2026
          </Typography>

          {submitted ? (
            <Alert severity="success" sx={{ mt: 4 }}>
              Tack för ditt svar!
            </Alert>
          ) : (
            <Paper elevation={3} sx={{ p: 4 }}>
              <form onSubmit={handleSubmit}>
                <Box sx={{ display: 'flex', flexDirection: 'column', gap: 3 }}>
                  <TextField
                    required
                    label="Namn"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    fullWidth
                  />

                  <TextField
                    required
                    label="E-post"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    fullWidth
                  />

                  <FormControl required>
                    <Typography variant="subtitle1" gutterBottom>
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
                        label="Ja, jag kommer"
                      />
                      <FormControlLabel
                        value="no"
                        control={<Radio />}
                        label="Nej, jag kan tyvärr inte komma"
                      />
                    </RadioGroup>
                  </FormControl>

                  <TextField
                    label="Allergier eller specialkost"
                    name="dietaryRestrictions"
                    value={formData.dietaryRestrictions}
                    onChange={handleChange}
                    fullWidth
                    multiline
                    rows={2}
                  />

                  <TextField
                    label="Meddelande till brudparet"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    fullWidth
                    multiline
                    rows={4}
                  />

                  <Button
                    type="submit"
                    variant="contained"
                    color="primary"
                    size="large"
                    sx={{ mt: 2 }}
                  >
                    Skicka svar
                  </Button>
                </Box>
              </form>
            </Paper>
          )}
        </motion.div>
      </Box>
    </Container>
  );
};

export default Rsvp; 
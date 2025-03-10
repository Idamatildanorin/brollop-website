import React, { useState } from 'react';
import {
  Container,
  Typography,
  Box,
  Paper,
  TextField,
  Button,
  FormControl,
  FormControlLabel,
  Radio,
  RadioGroup,
  Alert,
  Grid
} from '@mui/material';
import { motion } from 'framer-motion';

interface SpeechForm {
  name: string;
  email: string;
  type: string;
  duration: string;
  description: string;
  equipment: string;
}

const Toastmasters = () => {
  const [formData, setFormData] = useState<SpeechForm>({
    name: '',
    email: '',
    type: '',
    duration: '',
    description: '',
    equipment: ''
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
    console.log(formData);
    setSubmitted(true);
  };

  return (
    <Container maxWidth="lg">
      <Box sx={{ py: 8 }}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Typography variant="h3" component="h1" gutterBottom align="center" sx={{ mb: 6 }}>
            Toastmasters
          </Typography>

          <Grid container spacing={4}>
            {/* Information */}
            <Grid item xs={12} md={6}>
              <Paper elevation={3} sx={{ p: 4, height: '100%', bgcolor: 'rgba(158, 118, 118, 0.05)' }}>
                <Typography variant="h5" gutterBottom color="primary">
                  Information om tal och uppträdanden
                </Typography>
                <Typography variant="body1" paragraph>
                  Vi ser fram emot alla fina tal och uppträdanden under kvällen! För att göra det så
                  smidigt som möjligt för alla ber vi er att anmäla ert tal eller uppträdande i förväg.
                </Typography>
                <Typography variant="body1" paragraph>
                  <strong>Kontakta våra toastmasters:</strong><br />
                  [Namn Efternamn]<br />
                  Tel: [Telefonnummer]<br />
                  E-post: [E-postadress]
                </Typography>
                <Typography variant="body1" paragraph>
                  <strong>Tips för tal:</strong>
                </Typography>
                <ul>
                  <li>
                    <Typography variant="body1">
                      Håll talet kort och koncist (ca 3-5 minuter)
                    </Typography>
                  </li>
                  <li>
                    <Typography variant="body1">
                      Blanda gärna humor med allvar
                    </Typography>
                  </li>
                  <li>
                    <Typography variant="body1">
                      Undvik interna skämt som få förstår
                    </Typography>
                  </li>
                </ul>
              </Paper>
            </Grid>

            {/* Formulär */}
            <Grid item xs={12} md={6}>
              <Paper elevation={3} sx={{ p: 4, bgcolor: 'rgba(158, 118, 118, 0.05)' }}>
                {submitted ? (
                  <Alert severity="success" sx={{ mt: 2 }}>
                    Tack för din anmälan! Toastmastern kommer att kontakta dig.
                  </Alert>
                ) : (
                  <>
                    <Typography variant="h5" gutterBottom color="primary">
                      Anmäl tal eller uppträdande
                    </Typography>
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
                            Typ av framträdande
                          </Typography>
                          <RadioGroup
                            name="type"
                            value={formData.type}
                            onChange={handleChange}
                          >
                            <FormControlLabel
                              value="tal"
                              control={<Radio />}
                              label="Tal"
                            />
                            <FormControlLabel
                              value="sang"
                              control={<Radio />}
                              label="Sång"
                            />
                            <FormControlLabel
                              value="uppradande"
                              control={<Radio />}
                              label="Annat uppträdande"
                            />
                          </RadioGroup>
                        </FormControl>

                        <TextField
                          required
                          label="Uppskattad längd (minuter)"
                          name="duration"
                          value={formData.duration}
                          onChange={handleChange}
                          fullWidth
                        />

                        <TextField
                          label="Kort beskrivning"
                          name="description"
                          value={formData.description}
                          onChange={handleChange}
                          multiline
                          rows={3}
                          fullWidth
                        />

                        <TextField
                          label="Behov av utrustning"
                          name="equipment"
                          value={formData.equipment}
                          onChange={handleChange}
                          multiline
                          rows={2}
                          fullWidth
                          helperText="T.ex. projektor, mikrofon, etc."
                        />

                        <Button
                          type="submit"
                          variant="contained"
                          color="primary"
                          size="large"
                        >
                          Skicka anmälan
                        </Button>
                      </Box>
                    </form>
                  </>
                )}
              </Paper>
            </Grid>
          </Grid>
        </motion.div>
      </Box>
    </Container>
  );
};

export default Toastmasters; 
import React from 'react';
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
  Alert
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
  const [formData, setFormData] = React.useState<SpeechForm>({
    name: '',
    email: '',
    type: '',
    duration: '',
    description: '',
    equipment: ''
  });

  const [submitted, setSubmitted] = React.useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
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
    <Container maxWidth="md">
      <Box sx={{ py: 8 }}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Typography 
            variant="h3" 
            component="h1" 
            gutterBottom 
            align="center" 
            sx={{ 
              mb: 2,
              color: '#1976d2'
            }}
          >
            Toastmasters
          </Typography>

          <Box sx={{ mb: 6, textAlign: 'center' }}>
            <Typography variant="h5" gutterBottom sx={{ color: '#0d47a1' }}>
              Maja & Erik
            </Typography>
            <Typography variant="body1" sx={{ mb: 3, color: '#0d47a1' }}>
              Vi är glada att presentera Maja och Erik som våra toastmasters för kvällen! 
            </Typography>
            <Typography variant="body1" sx={{ mb: 4, color: '#0d47a1' }}>
              Om du vill hålla tal, sjunga en sång eller bidra med någon annan form av underhållning under middagen, 
              vänligen fyll i formuläret nedan. Maja och Erik kommer att kontakta dig för att planera kvällens program.
            </Typography>
          </Box>

          {submitted ? (
            <Alert severity="success" sx={{ mt: 4 }}>
              Tack för din anmälan! Maja eller Erik kommer att kontakta dig inom kort.
            </Alert>
          ) : (
            <Paper elevation={2} sx={{ p: 4, background: 'linear-gradient(145deg, #ffffff 0%, #f8f8f8 100%)' }}>
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
                        value="annat"
                        control={<Radio />}
                        label="Annat framträdande"
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
                    label="Kort beskrivning av ditt framträdande"
                    name="description"
                    value={formData.description}
                    onChange={handleChange}
                    fullWidth
                    multiline
                    rows={3}
                  />

                  <TextField
                    label="Behov av utrustning (mikrofon, projektor etc.)"
                    name="equipment"
                    value={formData.equipment}
                    onChange={handleChange}
                    fullWidth
                    multiline
                    rows={2}
                  />

                  <Button
                    type="submit"
                    variant="contained"
                    color="primary"
                    size="large"
                    sx={{ mt: 2 }}
                  >
                    Skicka anmälan
                  </Button>
                </Box>
              </form>
            </Paper>
          )}

          <Box sx={{ mt: 6, textAlign: 'center' }}>
            <Typography variant="h6" gutterBottom sx={{ color: '#0d47a1' }}>
              Kontakta våra toastmasters
            </Typography>
            <Typography variant="body1" sx={{ mb: 3, color: '#0d47a1' }}>
              Du kan också kontakta Maja eller Erik direkt:
            </Typography>
            
            <Box sx={{ display: 'flex', justifyContent: 'center', gap: 4, flexWrap: 'wrap' }}>
              <Box sx={{ textAlign: 'center' }}>
                <Typography variant="h6" sx={{ color: '#1976d2', mb: 1 }}>
                  Erik Karlsson
                </Typography>
                <Typography variant="body1" sx={{ mb: 0.5 }}>
                  erik.axel.carlsson@gmail.com
                </Typography>
                <Typography variant="body1">
                  070-587 58 85
                </Typography>
              </Box>
              
              <Box sx={{ textAlign: 'center' }}>
                <Typography variant="h6" sx={{ color: '#1976d2', mb: 1 }}>
                  Maja Häggström
                </Typography>
                <Typography variant="body1" sx={{ mb: 0.5 }}>
                  majahagg@gmail.com
                </Typography>
                <Typography variant="body1">
                  072-531 04 84
                </Typography>
              </Box>
            </Box>
          </Box>
        </motion.div>
      </Box>
    </Container>
  );
};

export default Toastmasters; 
import React from 'react';
import { Container, Typography, Box, Paper, Grid } from '@mui/material';
import { motion } from 'framer-motion';

const PracticalInfo = () => {
  return (
    <Container maxWidth="lg">
      <Box sx={{ py: 8 }}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Typography variant="h3" component="h1" gutterBottom align="center" sx={{ mb: 6 }}>
            Praktisk Information
          </Typography>

          <Grid container spacing={3}>
            {/* Vigsel */}
            <Grid item xs={12} md={6}>
              <Paper elevation={3} sx={{ p: 3, bgcolor: 'rgba(158, 118, 118, 0.05)', height: 500, display: 'flex', flexDirection: 'column' }}>
                <Box sx={{ flex: 1 }}>
                  <Typography variant="h5" gutterBottom color="primary">
                    Vigseln
                  </Typography>
                  <Box sx={{ mb: 3 }}>
                    <Typography variant="body1" paragraph>
                      <strong>Plats:</strong> Hemlig plats i naturen
                    </Typography>
                    <Typography variant="body1" paragraph>
                      <strong>Tid:</strong> 14:00
                    </Typography>
                    <Typography variant="body1" paragraph>
                      Vi har valt en vacker plats i naturen för vår borgerliga vigsel. Exakt plats kommer att avslöjas närmare bröllopet. Vi kommer att ordna med transport från samlingsplatsen till vigselplatsen.
                    </Typography>
                  </Box>
                  <Typography variant="h6" gutterBottom>
                    Information
                  </Typography>
                  <Box sx={{ mb: 2 }}>
                    <Typography variant="body1" paragraph>
                      <strong>Samling:</strong> Mer information kommer
                    </Typography>
                    <Typography variant="body1" paragraph>
                      <strong>Transport:</strong> Transport ordnas från samlingsplatsen
                    </Typography>
                    <Typography variant="body1" paragraph>
                      <strong>Att tänka på:</strong> Då vigseln hålls utomhus rekommenderar vi bekväma skor och kläder anpassade efter väder
                    </Typography>
                  </Box>
                </Box>
              </Paper>
            </Grid>

            {/* Festlokalen */}
            <Grid item xs={12} md={6}>
              <Paper elevation={3} sx={{ p: 3, bgcolor: 'rgba(158, 118, 118, 0.05)', height: 500, display: 'flex', flexDirection: 'column' }}>
                <Box sx={{ flex: 1 }}>
                  <Typography variant="h5" gutterBottom color="primary">
                    Festen
                  </Typography>
                  <Box sx={{ mb: 3 }}>
                    <Typography variant="body1" paragraph>
                      <strong>Plats:</strong> Jonsereds Fabrikstråk
                    </Typography>
                    <Typography variant="body1" paragraph>
                      <strong>Adress:</strong> Fabriksstråket, Jonsered
                    </Typography>
                    <Typography variant="body1" paragraph>
                      <strong>Tid:</strong> Efter en kort paus från vigseln. Under pausen har ni möjlighet att checka in på hotellet och fräscha upp er inför kvällen.
                    </Typography>
                    <Typography variant="body1" paragraph>
                      <strong>Middagen serveras:</strong> [Tid för middag]
                    </Typography>
                  </Box>
                  <Typography variant="h6" gutterBottom>
                    Hitta hit
                  </Typography>
                  <Box sx={{ mb: 2 }}>
                    <Typography variant="body1" paragraph>
                      <strong>Med bil:</strong> [Vägbeskrivning för bil]
                    </Typography>
                    <Typography variant="body1" paragraph>
                      <strong>Parkering:</strong> [Information om parkering]
                    </Typography>
                    <Typography variant="body1" paragraph>
                      <strong>Transport från vigselplatsen:</strong> [Information om gemensam transport]
                    </Typography>
                  </Box>
                </Box>
              </Paper>
            </Grid>

            {/* Boende */}
            <Grid item xs={12}>
              <Paper elevation={3} sx={{ p: 3, bgcolor: 'rgba(158, 118, 118, 0.05)' }}>
                <Typography variant="h5" gutterBottom color="primary">
                  Boende
                </Typography>
                <Typography variant="body1" paragraph>
                  Vi har förbokat ett antal rum på hotellet där alla gäster kommer att bo. Hotellet ligger på perfekt krypavstånd till festlokalen, vilket gör det extra bekvämt för alla gäster. Gibsons Hotell är ett charmigt hotell med 27 smakfullt inredda rum i hjärtat av Jonsereds Fabriker.
                </Typography>
                <Box sx={{ mb: 4 }}>
                  <Typography variant="h6" gutterBottom>
                    Gibson Hotell
                  </Typography>
                  <Typography variant="body1" paragraph>
                    <strong>Adress:</strong> William Gibsons väg 1a, 433 76 Jonsered<br />
                    <strong>Telefon:</strong> 031-22 05 07<br />
                    <strong>E-post:</strong> info@gibsonshotell.se<br />
                    <strong>Webbplats:</strong> www.gibsonshotell.se<br />
                    <strong>Avstånd till festlokalen:</strong> Några minuters promenad
                  </Typography>
                  <Typography variant="body1" paragraph>
                    <strong>Faciliteter:</strong> Alla rum är utrustade med sköna sängar, gratis WiFi, platt-TV och skrivbord.
                  </Typography>
                </Box>
                <Box sx={{ bgcolor: 'primary.main', color: 'white', p: 3, borderRadius: 1 }}>
                  <Typography variant="h6" gutterBottom>
                    Bokningsinformation
                  </Typography>
                  <Typography variant="body1" paragraph>
                    Använd följande bokningskod för att få tillgång till vårt förbokade prispaket:
                  </Typography>
                  <Typography variant="h5" sx={{ fontFamily: 'monospace', letterSpacing: 1 }}>
                    [BOKNINGSKOD]
                  </Typography>
                  <Typography variant="body2" sx={{ mt: 2 }}>
                    Koden kan användas vid bokning via telefon eller på hotellets webbplats
                  </Typography>
                </Box>
                <Box sx={{ mt: 4 }}>
                  <Typography variant="body1" paragraph>
                    <strong>I paketet ingår:</strong>
                  </Typography>
                  <ul>
                    <li>
                      <Typography variant="body1">
                        Övernattning [datum]
                      </Typography>
                    </li>
                    <li>
                      <Typography variant="body1">
                        Frukostbuffé (serveras 07:30-10:30 på helger)
                      </Typography>
                    </li>
                    <li>
                      <Typography variant="body1">
                        Sen utcheckning till kl. 13:00
                      </Typography>
                    </li>
                  </ul>
                </Box>
              </Paper>
            </Grid>
          </Grid>
        </motion.div>
      </Box>
    </Container>
  );
};

export default PracticalInfo; 
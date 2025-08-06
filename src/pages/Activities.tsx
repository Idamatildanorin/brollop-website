import React from 'react';
import { Container, Typography, Box, Card, CardContent, Grid, IconButton, Link } from '@mui/material';
import { motion } from 'framer-motion';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import PhoneIcon from '@mui/icons-material/Phone';
import LanguageIcon from '@mui/icons-material/Language';

const activities = [
  {
    category: 'Restauranger & Caféer',
    items: [
      {
        name: 'Poppels Öl & Mat i Jonsered',
        description: 'En restaurang i anslutning till Poppels bryggeri som fokuserar på hantverksöl och mat inspirerad av amerikansk bryggerikulturen. Serverar lokalproducerade rätter med noggrant utvalda ölparningar i en avslappnad och hundvänlig miljö, bara några minuter från Jonsereds station.',
        address: 'Kanalstråket 5, 433 76 Jonsered',
        website: 'https://poppelsolochmat.se',
        phone: '0763-24 77 37',
        instagram: '@poppelsolochmat'
      },
      {
        name: 'Brödfabriken i Jonsered',
        description: 'Ett charmigt hantverksbageri och café beläget i de historiska Jonsereds Fabriker. Här kan du njuta av nybakat surdegsbröd, prisbelönta semlor och en mysig atmosfär. Perfekt för frukost, lunch eller fika. Förutom sitt hantverksbakat bröd erbjuder de även surdegspizza, soppluncher och ett brett utbud av bakverk.',
        address: 'Fabriksstråket 27, 43376 Jonsered',
        website: 'https://www.brodfabrikenijonsered.se',
        phone: '072-341 88 18',
        openingHours: 'Måndag–Fredag: 08:00–16:00, Lördag: 08:00–16:00, Söndag: 09:00–16:00'
      },
      {
        name: 'Lille Grisen Jonsered',
        description: 'En populär lunchrestaurang belägen i de historiska Jonsereds fabriker. Erbjuder vällagad husmanskost med en modern twist i en rustik och trivsam miljö. Maten tillagas med omsorg och serveras i en avslappnad atmosfär. Erbjuder även catering och festlokaler för privata evenemang.',
        address: 'Fabriksstråket 7, 433 76 Jonsered',
        website: 'https://lillegrisen.se/jonsered',
        phone: '0737-85 34 87',
        openingHours: 'Måndag–Fredag: 11:00–14:00'
      }
    ]
  },
  {
    category: 'Sevärdheter',
    items: [
      {
        name: 'Jonsereds Trädgårdar',
        description: 'En prisbelönt återskapad herrgårdsträdgård från 1800-talet, belägen vid Jonsereds Herrgård. Trädgården invigdes 2014 och utsågs året därpå till "Årets Park" i kategorin för återskapade parker. Den består av fyra trädgårdskvarter: Formträdgården, Köksträdgården, Engelska rosenträdgården och Utställningsträdgården. Trädgården är ekologisk och fokuserar på biologisk mångfald. Här finns även en mångfaldsstig med bisamhällen, insektshotell och dammar. Besökare kan njuta av fika på Jonsereds Trädgårdskafé och handla växter i den lilla butiken.',
        address: 'Jonsereds Herrgård, 433 76 Jonsered',
        website: 'https://www.jonseredstradgardar.se',
        phone: '031-44 44 44',
        openingHours: 'Vardagar: 10:00-17:00, Helger: 11:00-17:00'
      },
      {
        name: '[Sevärdhet 2]',
        description: 'Populärt museum',
        address: '[Adress]',
        website: '[Webbplats]',
        phone: '[Telefonnummer]'
      }
    ]
  },
  {
    category: 'Transport',
    items: [
      {
        name: 'Tåg till Göteborg',
        description: 'Jonsered har en egen station med snabba och regelbundna tågförbindelser till Göteborg. Resan tar endast cirka 15 minuter till Göteborg C, vilket gör det enkelt att utforska stadens många sevärdheter, restauranger och shoppingmöjligheter. Tågen går ofta och stationen ligger centralt i Jonsered, bara några minuter från Jonsereds Fabriker.',
        address: 'Jonsereds station, 433 76 Jonsered',
        website: 'https://www.vasttrafik.se',
        phone: '0771-41 43 00',
        additionalInfo: 'Köp biljetter via Västtrafik To Go-appen eller på stationen'
      }
    ]
  }
];

const Activities = () => {
  return (
    <Container maxWidth="lg">
      <Box sx={{ py: 8 }}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Typography 
            variant="h2" 
            component="h1" 
            gutterBottom 
            align="center" 
            sx={{ 
              mb: 4,
              fontWeight: 600,
              background: 'linear-gradient(45deg, #2196F3 30%, #21CBF3 90%)',
              backgroundClip: 'text',
              textFillColor: 'transparent',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent'
            }}
          >
            Aktiviteter & Sevärdheter
          </Typography>

          <Typography 
            variant="h6" 
            paragraph 
            align="center" 
            sx={{ 
              mb: 8,
              color: 'text.secondary',
              maxWidth: '800px',
              mx: 'auto'
            }}
          >
            Här hittar ni tips på aktiviteter och sevärdheter i området för er som vill
            utforska staden under er vistelse.
          </Typography>

          {activities.map((category, index) => (
            <Box key={category.category} sx={{ mb: 8 }}>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
              >
                <Typography 
                  variant="h4" 
                  gutterBottom 
                  sx={{ 
                    mb: 4,
                    color: 'primary.main',
                    fontWeight: 500,
                    borderBottom: '2px solid',
                    borderColor: 'primary.main',
                    pb: 1,
                    display: 'inline-block'
                  }}
                >
                  {category.category}
                </Typography>

                <Grid container spacing={4}>
                  {category.items.map((item, itemIndex) => (
                    <Grid item xs={12} md={6} key={item.name}>
                      <motion.div
                        whileHover={{ scale: 1.02 }}
                        transition={{ duration: 0.2 }}
                      >
                        <Card 
                          elevation={3}
                          sx={{
                            height: '100%',
                            background: 'linear-gradient(145deg, #ffffff 0%, #f5f5f5 100%)',
                            borderRadius: 2,
                            overflow: 'hidden',
                            '&:hover': {
                              boxShadow: '0 8px 16px rgba(0,0,0,0.1)'
                            }
                          }}
                        >
                          <CardContent sx={{ p: 3 }}>
                            <Typography 
                              variant="h5" 
                              gutterBottom
                              sx={{ 
                                fontWeight: 600,
                                color: 'primary.main'
                              }}
                            >
                              {item.name}
                            </Typography>
                            
                            <Typography 
                              variant="body1" 
                              paragraph
                              sx={{ 
                                color: 'text.secondary',
                                mb: 3
                              }}
                            >
                              {item.description}
                            </Typography>

                            <Box sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
                              <LocationOnIcon sx={{ mr: 1, color: 'primary.main' }} />
                              <Typography variant="body2" color="text.secondary">
                                {item.address}
                              </Typography>
                            </Box>

                            <Box sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
                              <PhoneIcon sx={{ mr: 1, color: 'primary.main' }} />
                              <Typography variant="body2" color="text.secondary">
                                {item.phone}
                              </Typography>
                            </Box>

                            <Box sx={{ display: 'flex', alignItems: 'center' }}>
                              <LanguageIcon sx={{ mr: 1, color: 'primary.main' }} />
                              <Link 
                                href={item.website} 
                                target="_blank" 
                                rel="noopener noreferrer"
                                sx={{ 
                                  color: 'primary.main',
                                  textDecoration: 'none',
                                  '&:hover': {
                                    textDecoration: 'underline'
                                  }
                                }}
                              >
                                {item.website}
                              </Link>
                            </Box>
                          </CardContent>
                        </Card>
                      </motion.div>
                    </Grid>
                  ))}
                </Grid>
              </motion.div>
            </Box>
          ))}

          <Box 
            sx={{ 
              mt: 8, 
              textAlign: 'center',
              p: 4,
              borderRadius: 2,
              bgcolor: 'rgba(33, 150, 243, 0.05)'
            }}
          >
            <Typography 
              variant="h5" 
              gutterBottom
              sx={{ 
                color: 'primary.main',
                fontWeight: 500
              }}
            >
              Fler tips?
            </Typography>
            <Typography 
              variant="body1"
              sx={{ 
                color: 'text.secondary',
                maxWidth: '600px',
                mx: 'auto'
              }}
            >
              Har ni några favoritplatser i området som ni vill tipsa andra gäster om?
              Kontakta oss så lägger vi till dem här!
            </Typography>
          </Box>
        </motion.div>
      </Box>
    </Container>
  );
};

export default Activities; 
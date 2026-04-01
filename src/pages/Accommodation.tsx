import { Box, Typography, Container } from '@mui/material';
import { motion } from 'framer-motion';

const Accommodation = () => {
  return (
    <Container maxWidth="md" sx={{ px: { xs: 2, sm: 3 } }}>
      <Box sx={{
        py: 1,
        background: 'transparent'
      }}>
        {/* Diskret ram runt allt innehåll */}
        <Box
          sx={{
            background: 'var(--content-surface-rose)',
            borderRadius: '20px',
            p: { xs: 3, sm: 4, md: 6 },
            boxShadow: '0 8px 32px rgba(0, 0, 0, 0.08)',
            border: '1px solid rgba(179, 18, 75, 0.18)',
            position: 'relative',
            '&::before': {
              content: '""',
              position: 'absolute',
              top: 0,
              left: 0,
              right: 0,
              height: '3px',
              background: 'linear-gradient(90deg, #b3124b, #d88faa)',
              borderRadius: '20px 20px 0 0'
            }
          }}
        >

          {/* Huvudrubrik */}
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
                fontFamily: '"Cormorant Garamond", serif',
                fontWeight: 400,
                mb: 4,
                color: '#b3124b',
                fontSize: { xs: '1.8rem', sm: '2.2rem', md: '2.8rem' },
                letterSpacing: '0.05em'
              }}
            >
              Boende
            </Typography>
          </motion.div>

          {/* Innehåll */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <Box sx={{ mb: 6 }}>
              <Typography
                variant="h5"
                component="h2"
                sx={{
                  fontFamily: '"Cormorant Garamond", serif',
                  fontWeight: 400,
                  mb: 3,
                  color: '#b3124b',
                  fontSize: '1.3rem'
                }}
              >
                Hotell & Boende
              </Typography>
              
              <Typography
                variant="body1"
                sx={{
                  fontFamily: '"Cormorant Garamond", serif',
                  fontWeight: 300,
                  mb: 3,
                  color: '#9b7a86',
                  lineHeight: 1.6,
                  fontSize: '1rem'
                }}
              >
                Vi kommer att bo på Gibson Hotell under helgen och skulle vara 
                så glada om ni alla kunde bo där tillsammans med oss! 
                Det blir så mycket roligare att kunna träffas i hotellobbyn 
                och dela dessa speciella dagar tillsammans. Hotellet ligger med 
                krypavstånd till festlokalen, så ni kan enkelt gå mellan dem.
              </Typography>

              <Box sx={{ 
                backgroundColor: 'rgba(179, 18, 75, 0.06)', 
                p: { xs: 2, md: 3 }, 
                borderRadius: 2, 
                mb: 3,
                border: '1px solid rgba(179, 18, 75, 0.18)',
                overflow: 'hidden'
              }}>
                <Typography
                  variant="h6"
                  sx={{
                    fontFamily: '"Cormorant Garamond", serif',
                    fontWeight: 400,
                    mb: 2,
                    color: '#b3124b',
                    fontSize: { xs: '1rem', md: '1.1rem' }
                  }}
                >
                  Bokningsinstruktioner:
                </Typography>
                <Typography
                  variant="body1"
                  sx={{
                    fontFamily: '"Cormorant Garamond", serif',
                    fontWeight: 300,
                    mb: 2,
                    color: '#9b7a86',
                    lineHeight: 1.6,
                    fontSize: { xs: '0.9rem', md: '1rem' },
                    wordBreak: 'break-all'
                  }}
                >
                  <strong>Bokningskod:</strong> MATILDAPELLE
                </Typography>
                <Typography
                  variant="body1"
                  sx={{
                    fontFamily: '"Cormorant Garamond", serif',
                    fontWeight: 300,
                    mb: 1,
                    color: '#9b7a86',
                    lineHeight: 1.6,
                    fontSize: { xs: '0.9rem', md: '1rem' },
                    wordBreak: 'break-word'
                  }}
                >
                  1. Gå till <a href="https://www.gibsonshotell.se/boka" target="_blank" rel="noopener noreferrer" style={{ color: '#b3124b', textDecoration: 'none' }}>www.gibsonshotell.se/boka</a>
                </Typography>
                <Typography
                  variant="body1"
                  sx={{
                    fontFamily: '"Cormorant Garamond", serif',
                    fontWeight: 300,
                    mb: 1,
                    color: '#9b7a86',
                    lineHeight: 1.6,
                    fontSize: { xs: '0.9rem', md: '1rem' }
                  }}
                >
                  2. Skriv in er bokningskod, tryck tillämpa
                </Typography>
                <Typography
                  variant="body1"
                  sx={{
                    fontFamily: '"Cormorant Garamond", serif',
                    fontWeight: 300,
                    mb: 1,
                    color: '#9b7a86',
                    lineHeight: 1.6,
                    fontSize: { xs: '0.9rem', md: '1rem' }
                  }}
                >
                  3. Välj datum, antal gäster, sök
                </Typography>
                <Typography
                  variant="body1"
                  sx={{
                    fontFamily: '"Cormorant Garamond", serif',
                    fontWeight: 300,
                    color: '#9b7a86',
                    lineHeight: 1.6,
                    fontSize: { xs: '0.9rem', md: '1rem' }
                  }}
                >
                  Därefter är det bara att välja rum och klicka sig vidare i en logisk ordning.
                </Typography>
              </Box>


              <Typography
                variant="body1"
                sx={{
                  fontFamily: '"Cormorant Garamond", serif',
                  fontWeight: 300,
                  mb: 3,
                  color: '#9b7a86',
                  lineHeight: 1.6,
                  fontSize: '1rem'
                }}
              >
                Om du behöver hjälp med bokningen eller har några frågor, 
                tveka inte att kontakta oss direkt. Vi hjälper gärna till!
              </Typography>
            </Box>

            <Box sx={{ mb: 6 }}>
              <Typography
                variant="h5"
                component="h2"
                sx={{
                  fontFamily: '"Cormorant Garamond", serif',
                  fontWeight: 400,
                  mb: 3,
                  color: '#b3124b',
                  fontSize: '1.3rem'
                }}
              >
                Transport
              </Typography>
              
              <Typography
                variant="body1"
                sx={{
                  fontFamily: '"Cormorant Garamond", serif',
                  fontWeight: 300,
                  mb: 3,
                  color: '#9b7a86',
                  lineHeight: 1.6,
                  fontSize: '1rem'
                }}
              >
                Det finns stor parkering vid både Gibson Hotell och festlokalen, 
                så bil är ett enkelt alternativ för er som kör.
              </Typography>


              <Typography
                variant="body1"
                sx={{
                  fontFamily: '"Cormorant Garamond", serif',
                  fontWeight: 300,
                  mb: 3,
                  color: '#9b7a86',
                  lineHeight: 1.6,
                  fontSize: '1rem'
                }}
              >
                Det går kollektivtrafik mellan Göteborg och Jonsered, 
                så det är också ett bekvämt alternativ för er som åker kollektivt.
              </Typography>
            </Box>

            {/* Karta över området */}
            <Box sx={{ mb: 6 }}>
              <Typography
                variant="h5"
                component="h2"
                sx={{
                  fontFamily: '"Cormorant Garamond", serif',
                  fontWeight: 400,
                  mb: 3,
                  color: '#b3124b',
                  fontSize: '1.3rem'
                }}
              >
                Karta över området
              </Typography>
              
              <Box sx={{ 
                width: '100%', 
                height: '400px', 
                borderRadius: 2,
                overflow: 'hidden',
                border: '1px solid rgba(179, 18, 75, 0.18)',
                boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                backgroundColor: 'rgba(179, 18, 75, 0.06)'
              }}>
                <Box sx={{ textAlign: 'center' }}>
                  <Typography
                    variant="h6"
                    sx={{
                      fontFamily: '"Cormorant Garamond", serif',
                      fontWeight: 400,
                      mb: 3,
                      color: '#b3124b',
                      fontSize: '1.1rem'
                    }}
                  >
                    Karta över området
                  </Typography>
                  
                  {/* Platser med pins */}
                  <Box sx={{ mb: 3 }}>
                    <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', mb: 1 }}>
                      <Box sx={{ 
                        width: 12, 
                        height: 12, 
                        backgroundColor: '#b3124b', 
                        borderRadius: '50%', 
                        mr: 1 
                      }} />
                      <Typography variant="body2" sx={{ 
                        fontFamily: '"Cormorant Garamond", serif',
                        fontWeight: 400,
                        color: '#9b7a86'
                      }}>
                        Gibson Hotell
                      </Typography>
                    </Box>
                    
                    <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', mb: 1 }}>
                      <Box sx={{ 
                        width: 12, 
                        height: 12, 
                        backgroundColor: '#8f0f3b', 
                        borderRadius: '50%', 
                        mr: 1 
                      }} />
                      <Typography variant="body2" sx={{ 
                        fontFamily: '"Cormorant Garamond", serif',
                        fontWeight: 400,
                        color: '#9b7a86'
                      }}>
                        Festlokalen (Fabriksstråket 36)
                      </Typography>
                    </Box>
                    
                  </Box>

                  <Box sx={{ display: 'flex', gap: 2, justifyContent: 'center', flexWrap: 'wrap' }}>
                    <a 
                      href="https://www.google.com/maps/dir/Gibsons+Hotell+Jonsered/Fabriksstråket+36+Jonsered" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      style={{
                        display: 'inline-block',
                        padding: '12px 24px',
                        backgroundColor: '#b3124b',
                        color: 'white',
                        textDecoration: 'none',
                        borderRadius: '4px',
                        fontFamily: '"Cormorant Garamond", serif',
                        fontSize: '1rem',
                        fontWeight: 400,
                        transition: 'background-color 0.3s ease'
                      }}
                      onMouseOver={(e) => ((e.currentTarget as HTMLAnchorElement).style.backgroundColor = '#8f0f3b')}
                      onMouseOut={(e) => ((e.currentTarget as HTMLAnchorElement).style.backgroundColor = '#b3124b')}
                    >
                      Se avstånd mellan platser
                    </a>
                  </Box>
                </Box>
              </Box>
              
            </Box>

          </motion.div>
        </Box>
      </Box>
    </Container>
  );
};

export default Accommodation; 
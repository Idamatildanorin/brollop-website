import { Container, Typography, Box } from '@mui/material';
import { motion } from 'framer-motion';
import { contentCard, pageTitle } from '../styles';

const scheduleItems = [
  {
    time: '14:30',
    title: 'Samling vid hotellet',
    description:
      'Vi samlas utanför hotellet för en gemensam mysig promenad ner till vigselplatsen.',
  },
  {
    time: '15:00',
    title: 'Vigsel',
    description:
      'Platsen ligger nere vid sjön aspen — en kort promenad ned från festlokalen (räkna med cirka 15 minuter till fots). Bekväma skor kan vara bra, och det finns tid att byta skor efter promenaden.',
  },
  {
    time: '16:00',
    title: 'Mingel',
    description: 'På uteplatsen vid festlokalen',
  },
  {
    time: '17.30',
    title: 'Middag',
  },
  {
    time: 'ca 22.00 - sent',
    title: 'Dansgolvet öppnar',
    description: 'och baren öppnar för drinkar',
  },
  {
    time: '01:00',
    title: 'Vickning',
  },
];

const Schedule = () => {
  return (
    <Container maxWidth="md">
      <Box sx={{ py: { xs: 2.5, md: 4 }, background: 'transparent' }}>
        <Box
          sx={{
            ...contentCard,
            p: { xs: 2.5, sm: 3.25, md: 4 },
            pb: { xs: 3.25, md: 4.25 },
            overflow: 'hidden',
          }}
        >
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55 }}
          >
            <Typography
              variant="h2"
              component="h1"
              align="center"
              sx={{
                ...pageTitle,
                mb: 0.4,
                fontSize: { xs: '1.55rem', md: '1.95rem' },
              }}
            >
              Tidsplan
            </Typography>
            <Typography
              align="center"
              sx={{
                fontFamily: "'Playfair Display', serif",
                color: '#9b7a86',
                fontWeight: 300,
                fontSize: { xs: '0.82rem', md: '0.9rem' },
                letterSpacing: '0.01em',
                mb: { xs: 1.9, md: 2.25 },
              }}
            >
              5 september 2026
            </Typography>
          </motion.div>

          <Box
            sx={{
              maxWidth: 640,
              mx: 'auto',
              borderRadius: '10px',
              px: { xs: 1.7, sm: 2.2 },
              py: { xs: 1.4, sm: 1.8 },
              background: 'rgba(255, 255, 255, 0.45)',
            }}
          >
            {scheduleItems.map((item, index) => (
              <motion.div
                key={`${index}-${item.title}`}
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.45, delay: 0.04 * index }}
              >
                <Box
                  sx={{
                    display: 'grid',
                    gridTemplateColumns: { xs: '1fr', sm: '118px 1fr' },
                    gap: { xs: 0.5, sm: 0.8 },
                    py: { xs: 1.35, sm: 1.55 },
                    borderBottom:
                      index === scheduleItems.length - 1
                        ? 'none'
                        : '1px solid rgba(31, 92, 58, 0.16)',
                  }}
                >
                  <Box
                    sx={{
                      textAlign: { xs: 'left', sm: 'right' },
                      pr: { sm: 1.2 },
                    }}
                  >
                    <Typography
                      component="span"
                      sx={{
                        fontFamily: "'Playfair Display', serif",
                        color: '#b3124b',
                        fontWeight: 500,
                        fontSize: { xs: '0.88rem', sm: '0.92rem' },
                        letterSpacing: '0.03em',
                        display: 'block',
                      }}
                    >
                      {item.time}
                    </Typography>
                  </Box>

                  <Box
                    sx={{
                      p: 0,
                    }}
                  >
                    {item.title && (
                      <Typography
                        component="h2"
                        sx={{
                          fontFamily: "'Playfair Display', serif",
                          color: '#1f5c3a',
                          fontSize: { xs: '0.97rem', sm: '1.03rem' },
                          fontWeight: 500,
                          letterSpacing: '0.03em',
                          mb: item.description ? 0.3 : 0,
                          lineHeight: 1.34,
                        }}
                      >
                        {item.title}
                      </Typography>
                    )}
                    {item.description && (
                      <Typography
                        sx={{
                          fontFamily: "'Playfair Display', serif",
                          color: '#7d606c',
                          fontWeight: 300,
                          fontSize: { xs: '0.82rem', sm: '0.87rem' },
                          lineHeight: 1.48,
                          letterSpacing: '0.02em',
                        }}
                      >
                        {item.description}
                      </Typography>
                    )}
                  </Box>
                </Box>
              </motion.div>
            ))}
          </Box>
        </Box>
      </Box>
    </Container>
  );
};

export default Schedule;

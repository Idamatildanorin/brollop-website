import { Box, Typography, Container } from '@mui/material';
import { motion } from 'framer-motion';
import { contentCard, pageTitle, bodyText } from '../styles';

const tips = [
  {
    title: 'Brödfabriken',
    description:
      'Ligger precis vid festlokalen. Värt ett besök! Det finns grymt fika och lunch!',
  },
  {
    title: 'Jonsereds trädgårdar',
    description: 'Strosa runt eller ta en fika i caféet.',
  },
  {
    title: 'Östhjälpen second hand',
    description: 'Öppet 10–13 på lördagar.',
  },
  {
    title: 'Promenad i skogen',
    description:
      'Skogarna är otroliga runt Jonsered. Så ett tips är att bara ta en promenad.',
  },
] as const;

const Tips = () => {
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
                mb: 2,
                fontSize: { xs: '1.55rem', sm: '1.9rem', md: '2.2rem' },
              }}
            >
              Tips på saker att göra runt Jonsered
            </Typography>
            <Typography
              align="center"
              sx={{
                ...bodyText,
                mb: 4,
                fontSize: '0.85rem',
                maxWidth: 480,
                mx: 'auto',
              }}
            >
              Detta är vad vi gillar att göra när vi är i Jonsered
            </Typography>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.35 }}
          >
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 3.5 }}>
              {tips.map((tip) => (
                <Box key={tip.title}>
                  <Typography
                    sx={{
                      ...pageTitle,
                      fontSize: { xs: '1.05rem', md: '1.15rem' },
                      mb: 0.75,
                    }}
                  >
                    {tip.title}
                  </Typography>
                  {tip.description && (
                    <Typography sx={{ ...bodyText, fontSize: '0.88rem' }}>
                      {tip.description}
                    </Typography>
                  )}
                </Box>
              ))}
            </Box>

            <Typography
              align="center"
              sx={{
                ...bodyText,
                mt: 4.5,
                pt: 2.5,
                borderTop: '1px solid rgba(179, 18, 75, 0.08)',
                fontSize: '0.82rem',
                opacity: 0.85,
              }}
            >
              Tågen in till Göteborg går en gång i timmen och tar ca 14 minuter.
            </Typography>
          </motion.div>
        </Box>
      </Box>
    </Container>
  );
};

export default Tips;

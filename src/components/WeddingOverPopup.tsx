import { Box, Typography } from '@mui/material';
import { motion } from 'framer-motion';

const WeddingOverPopup = () => {
  return (
    <Box
      sx={{
        position: 'fixed',
        inset: 0,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        px: 2,
        background:
          'linear-gradient(165deg, #f9e8ef 0%, #f6dce6 45%, #f4e4ea 100%)',
      }}
      role="dialog"
      aria-labelledby="wedding-over-title"
    >
      <Box
        component={motion.div}
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        sx={{
          width: '100%',
          maxWidth: 380,
          textAlign: 'center',
          px: { xs: 3.5, md: 4 },
          py: { xs: 4, md: 4.5 },
          borderRadius: '16px',
          background: '#fff9fc',
          boxShadow: '0 12px 36px rgba(179, 18, 75, 0.12)',
        }}
      >
        <Typography
          aria-hidden
          sx={{ fontSize: '1.8rem', lineHeight: 1, mb: 1.5 }}
        >
          ♥
        </Typography>

        <Typography
          id="wedding-over-title"
          sx={{
            fontFamily: "'Playfair Display', serif",
            color: '#1f5c3a',
            fontWeight: 400,
            fontSize: { xs: '1.4rem', md: '1.55rem' },
            letterSpacing: '0.02em',
            lineHeight: 1.4,
          }}
        >
          TACK till alla som firade oss!
        </Typography>

        <Typography
          sx={{
            fontFamily: "'Playfair Display', serif",
            color: '#b58a9a',
            fontWeight: 300,
            fontSize: '0.85rem',
            mt: 2,
            fontStyle: 'italic',
          }}
        >
          Pelle & Matilda
        </Typography>
      </Box>
    </Box>
  );
};

export default WeddingOverPopup;

/** Delade ytor och typografi – mjuk, inbjudande känsla */
export const contentCard = {
  background: 'linear-gradient(165deg, #fffefb 0%, #fff9fc 45%, #fef6f9 100%)',
  borderRadius: { xs: '10px', md: '12px' },
  boxShadow: '0 6px 28px rgba(179, 18, 75, 0.06), 0 1px 2px rgba(0, 0, 0, 0.03)',
  border: 'none',
} as const;

export const pageTitle = {
  fontFamily: "'Playfair Display', serif",
  fontWeight: 400,
  color: '#1f5c3a',
  letterSpacing: '0.02em',
} as const;

export const bodyText = {
  fontFamily: "'Playfair Display', serif",
  color: '#8a6d78',
  fontWeight: 300,
  lineHeight: 1.7,
  letterSpacing: '0.01em',
} as const;

export const dressCodeFrame = {
  display: 'inline-block',
  mt: 2,
  px: { xs: 2.5, md: 3 },
  py: { xs: 1.15, md: 1.35 },
  borderRadius: '6px',
  border: '1px solid rgba(74, 157, 111, 0.28)',
  bgcolor: 'rgba(255, 255, 255, 0.5)',
  boxShadow: '0 2px 12px rgba(31, 92, 58, 0.06)',
} as const;

export const rsvpTextFieldSx = {
  '& .MuiOutlinedInput-root': {
    borderRadius: 0,
  },
} as const;

export const softButton = {
  fontFamily: "'Playfair Display', serif",
  textTransform: 'none' as const,
  borderRadius: '8px',
  fontSize: '0.92rem',
  fontWeight: 400,
  letterSpacing: '0.01em',
  px: 2.75,
  py: 0.85,
  boxShadow: 'none',
  transition: 'background-color 0.2s ease, transform 0.15s ease',
  '&:hover': {
    boxShadow: 'none',
    transform: 'translateY(-1px)',
  },
};

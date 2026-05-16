import { Box, Link, Stack, Typography } from '@mui/material';
import { bodyText, pageTitle } from '../styles';

const TOASTMASTERS = [
  {
    name: 'Erik Karlsson',
    email: 'erik.axel.carlsson@gmail.com',
    phone: '070-587 58 85',
    phoneHref: 'tel:+46705875885',
  },
  {
    name: 'Maja Häggström',
    email: 'majahagg@gmail.com',
    phone: '072-531 04 84',
    phoneHref: 'tel:+46725310484',
  },
] as const;

const introText =
  'Vill du hålla tal, sjunga eller bidra med underhållning under middagen? Hör av dig till våra toastmasters.';

const inlineIntroText =
  'Vill du hålla tal eller bidra med underhållning? Hör av dig till toastmasterna.';

type ToastmastersSectionProps = {
  variant?: 'cards' | 'inline';
  hideTitle?: boolean;
};

const contactLinkSx = {
  fontFamily: "'Playfair Display', serif",
  color: '#8a6d78',
  fontWeight: 300,
  fontSize: '0.92rem',
  textDecoration: 'none',
  '&:hover': { color: '#1f5c3a', textDecoration: 'underline' },
};

const compactContactLinkSx = {
  ...contactLinkSx,
  fontSize: '0.78rem',
  lineHeight: 1.4,
};

function PersonContact({ name, email, phone, phoneHref }: (typeof TOASTMASTERS)[number]) {
  return (
    <Box sx={{ textAlign: 'center' }}>
      <Typography sx={{ ...pageTitle, fontSize: '1rem', mb: 0.75 }}>{name}</Typography>
      <Link href={`mailto:${email}`} sx={{ ...contactLinkSx, display: 'block', mb: 0.35 }}>
        {email}
      </Link>
      <Link href={phoneHref} sx={contactLinkSx}>
        {phone}
      </Link>
    </Box>
  );
}

function PersonList() {
  return (
    <Stack spacing={3} alignItems="center" sx={{ maxWidth: 360, mx: 'auto' }}>
      {TOASTMASTERS.map((person) => (
        <PersonContact key={person.email} {...person} />
      ))}
    </Stack>
  );
}

function CompactPersonContact({ name, email, phone, phoneHref }: (typeof TOASTMASTERS)[number]) {
  return (
    <Box sx={{ textAlign: 'center', minWidth: 0, flex: '1 1 140px', maxWidth: 200 }}>
      <Typography
        sx={{
          ...bodyText,
          color: '#1f5c3a',
          fontWeight: 400,
          fontSize: '0.82rem',
          mb: 0.4,
        }}
      >
        {name}
      </Typography>
      <Link href={`mailto:${email}`} sx={{ ...compactContactLinkSx, display: 'block' }}>
        {email}
      </Link>
      <Link href={phoneHref} sx={compactContactLinkSx}>
        {phone}
      </Link>
    </Box>
  );
}

function InlinePersonList() {
  const [erik, maja] = TOASTMASTERS;

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: { xs: 'column', sm: 'row' },
        justifyContent: 'center',
        alignItems: 'center',
        gap: { xs: 1.5, sm: 0 },
        maxWidth: 480,
        mx: 'auto',
      }}
    >
      <CompactPersonContact {...erik} />
      <Box
        aria-hidden
        sx={{
          width: { xs: 40, sm: '1px' },
          height: { xs: '1px', sm: 44 },
          bgcolor: 'rgba(179, 18, 75, 0.1)',
          mx: { sm: 2.5 },
          my: { xs: 0.5, sm: 0 },
          flexShrink: 0,
        }}
      />
      <CompactPersonContact {...maja} />
    </Box>
  );
}

export default function ToastmastersSection({
  variant = 'cards',
  hideTitle = false,
}: ToastmastersSectionProps) {
  if (variant === 'inline') {
    return (
      <Box
        sx={{
          mt: 2,
          pt: 2,
          borderTop: '1px solid rgba(179, 18, 75, 0.08)',
        }}
      >
        <Typography
          sx={{
            ...bodyText,
            fontSize: '0.82rem',
            textAlign: 'center',
            mb: 1.5,
            lineHeight: 1.5,
            opacity: 0.9,
          }}
        >
          {inlineIntroText}
        </Typography>
        <InlinePersonList />
      </Box>
    );
  }

  return (
    <Box sx={{ mb: 2 }}>
      {!hideTitle && (
        <Typography
          sx={{
            ...pageTitle,
            fontSize: { xs: '1.15rem', md: '1.25rem' },
            textAlign: 'center',
            mb: 1.5,
          }}
        >
          Våra fantastiska toastmasters
        </Typography>
      )}
      <Typography
        sx={{
          ...bodyText,
          textAlign: 'center',
          maxWidth: 520,
          mx: 'auto',
          mb: 3,
          fontSize: '0.95rem',
        }}
      >
        {introText}
      </Typography>
      <PersonList />
    </Box>
  );
}

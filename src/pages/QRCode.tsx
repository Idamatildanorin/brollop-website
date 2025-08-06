import React from 'react';
import { Container, Typography, Box } from '@mui/material';
import QRCode from 'react-qr-code';

const QRCodePage = () => {
  // Här kan du ändra URL:en till din faktiska hemsida
  const websiteUrl = window.location.origin;

  return (
    <Container maxWidth="sm">
      <Box sx={{ 
        py: 8, 
        textAlign: 'center',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: 3
      }}>
        <Typography 
          variant="h4" 
          gutterBottom 
          sx={{ 
            color: '#2c3e50',
            fontFamily: '"Playfair Display", serif',
            fontWeight: 600
          }}
        >
          QR-kod för hemsidan
        </Typography>

        <Typography 
          variant="body1" 
          sx={{ 
            color: '#7f8c8d',
            mb: 2
          }}
        >
          Skanna för att besöka vår bröllopshemsida
        </Typography>

        <Box sx={{ 
          p: 4,
          bgcolor: 'white',
          borderRadius: 2,
          boxShadow: 3,
          border: '2px solid #ecf0f1'
        }}>
          <QRCode 
            value={websiteUrl}
            size={300}
            level="H"
            style={{ 
              background: 'white',
              padding: '10px'
            }}
          />
        </Box>

        <Typography 
          variant="body2" 
          sx={{ 
            color: '#95a5a6',
            fontStyle: 'italic',
            wordBreak: 'break-all'
          }}
        >
          {websiteUrl}
        </Typography>
      </Box>
    </Container>
  );
};

export default QRCodePage; 
import React from 'react';
import { useState } from 'react';
import { Container, Typography, Box, Modal } from '@mui/material';
import { motion, AnimatePresence } from 'framer-motion';

// Lägg till dina bilder här
// Bilderna ska placeras i public/images-mappen
// och refereras till med /images/filnamn.jpg
const photos = [
  { src: '/images/engagement1.jpg', width: 4, height: 3, title: 'Förlovningen' },
  { src: '/images/rut1.jpg', width: 4, height: 3, title: 'Rut' },
  { src: '/images/rut2.jpg', width: 4, height: 3, title: 'Rut' },
  { src: '/images/vanlife_beach.jpg', width: 4, height: 3, title: 'Vanlife' },
  { src: '/images/vanlife_mountain.jpg', width: 4, height: 3, title: 'Fjäll' },
  // Nya uppladdade bilder
  { src: '/images/468822617_10162772963163413_6430739565414732441_n.jpg', width: 4, height: 3, title: '' },
  { src: '/images/468042298_10162632577363413_8770442690666789542_n.jpg', width: 4, height: 3, title: '' },
  { src: '/images/472211300_10163057887953413_1861285274298366542_n.jpg', width: 4, height: 3, title: '' },
  { src: '/images/472032881_10163081597678413_7006011210373281061_n.jpg', width: 4, height: 3, title: '' },
  { src: '/images/471873848_10163022352893413_6471546301548460484_n.jpg', width: 4, height: 3, title: '' },
  { src: '/images/468972081_10162878167963413_2351330846835839363_n.jpg', width: 4, height: 3, title: '' },
  { src: '/images/468936457_10162848086513413_2774617505489923067_n.jpg', width: 4, height: 3, title: '' },
  { src: '/images/468841563_10162847315998413_2146630582485362512_n.jpg', width: 4, height: 3, title: '' },
  { src: '/images/468801874_10162833937098413_983283881458179574_n.jpg', width: 4, height: 3, title: '' },
];

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);

  const handleOpen = (index: number) => {
    setSelectedImage(index);
  };

  const handleClose = () => {
    setSelectedImage(null);
  };

  return (
    <Container maxWidth="lg">
      <Box sx={{ py: 8 }}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Typography variant="h3" component="h1" gutterBottom align="center" sx={{ mb: 6 }}>
            Vårt Liv i Bilder
          </Typography>

          <Box
            sx={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fill, minmax(240px, 1fr))',
              gap: 0.5,
              padding: 0
            }}
          >
            {photos.map((photo, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: index * 0.05 }}
                whileHover={{ scale: 1.08, zIndex: 2 }}
                onClick={() => handleOpen(index)}
                style={{ cursor: 'pointer' }}
              >
                <Box
                  sx={{
                    position: 'relative',
                    paddingTop: '72%',
                    overflow: 'hidden',
                    borderRadius: 0,
                    boxShadow: 0
                  }}
                >
                  <Box
                    component="img"
                    src={photo.src}
                    alt={photo.title}
                    loading="lazy"
                    sx={{
                      position: 'absolute',
                      top: 0,
                      left: 0,
                      width: '100%',
                      height: '100%',
                      objectFit: 'cover',
                      transition: 'transform 220ms ease',
                      '&:hover': { transform: 'scale(1.06)' }
                    }}
                  />
                </Box>
                
              </motion.div>
            ))}
          </Box>

          <AnimatePresence>
            {selectedImage !== null && (
              <Modal
                open={true}
                onClose={handleClose}
                sx={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center'
                }}
              >
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.8 }}
                  onClick={handleClose}
                  style={{
                    outline: 'none',
                    maxWidth: '90vw',
                    maxHeight: '90vh'
                  }}
                >
                  <Box
                    component="img"
                    src={photos[selectedImage].src}
                    alt={photos[selectedImage].title}
                    sx={{
                      width: '100%',
                      height: '100%',
                      objectFit: 'contain'
                    }}
                  />
                </motion.div>
              </Modal>
            )}
          </AnimatePresence>
        </motion.div>
      </Box>
    </Container>
  );
};

export default Gallery; 
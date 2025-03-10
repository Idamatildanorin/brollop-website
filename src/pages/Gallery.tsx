import React from 'react';
import { useState } from 'react';
import { Container, Typography, Box, Modal } from '@mui/material';
import { motion, AnimatePresence } from 'framer-motion';

// Lägg till dina bilder här
// Bilderna ska placeras i public/images-mappen
// och refereras till med /images/filnamn.jpg
const photos = [
  {
    src: '/images/photo1.jpg', // Exempel: /images/forlovning.jpg
    width: 4,
    height: 3,
    title: 'Första dejten'
  },
  {
    src: '/images/photo2.jpg', // Exempel: /images/semester.jpg
    width: 1,
    height: 1,
    title: 'Förlovningen'
  },
  // Kopiera och klistra in fler bildobjekt här
  // {
  //   src: '/images/din-bild.jpg',
  //   width: 4, // Bildens bredd-förhållande
  //   height: 3, // Bildens höjd-förhållande
  //   title: 'Bildtext'
  // },
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
              gridTemplateColumns: 'repeat(auto-fill, minmax(250px, 1fr))',
              gap: 3,
              padding: 2
            }}
          >
            {photos.map((photo, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ scale: 1.05 }}
                onClick={() => handleOpen(index)}
                style={{ cursor: 'pointer' }}
              >
                <Box
                  sx={{
                    position: 'relative',
                    paddingTop: '75%',
                    overflow: 'hidden',
                    borderRadius: 2,
                    boxShadow: 3
                  }}
                >
                  <Box
                    component="img"
                    src={photo.src}
                    alt={photo.title}
                    sx={{
                      position: 'absolute',
                      top: 0,
                      left: 0,
                      width: '100%',
                      height: '100%',
                      objectFit: 'cover'
                    }}
                  />
                </Box>
                <Typography
                  variant="subtitle1"
                  align="center"
                  sx={{ mt: 1, color: 'text.secondary' }}
                >
                  {photo.title}
                </Typography>
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
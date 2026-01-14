import React from 'react';
import { useState, useEffect } from 'react';
import { Container, Typography, Box, Modal, IconButton } from '@mui/material';
import { motion, AnimatePresence } from 'framer-motion';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

// Lägg till dina bilder här
// Bilderna ska placeras i public/images-mappen
// och refereras till med /images/filnamn.jpg
const photos = [
  // Förlovning och speciella stunder
  { src: '/images/engagement1.jpg', width: 4, height: 3, title: '' },
  { src: '/images/rut1.jpg', width: 4, height: 3, title: '' },
  { src: '/images/rut2.jpg', width: 4, height: 3, title: '' },
  
  // Resor och äventyr
  { src: '/images/vanlife_beach.jpg', width: 4, height: 3, title: '' },
  { src: '/images/vanlife_mountain.jpg', width: 4, height: 3, title: '' },
  { src: '/images/IMG_0322.JPG', width: 4, height: 3, title: '' },
  { src: '/images/IMG_9994.JPG', width: 4, height: 3, title: '' },
  { src: '/images/IMG_0189.HEIC', width: 4, height: 3, title: '' },
  { src: '/images/IMG_0260.HEIC', width: 4, height: 3, title: '' },
  { src: '/images/IMG_0280.HEIC', width: 4, height: 3, title: '' },
  { src: '/images/IMG_0297.HEIC', width: 4, height: 3, title: '' },
  { src: '/images/IMG_0332.HEIC', width: 4, height: 3, title: '' },
  { src: '/images/IMG_9968.HEIC', width: 4, height: 3, title: '' },
  { src: '/images/IMG_9981.HEIC', width: 4, height: 3, title: '' },
  
  // Med vänner och minnen
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
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedImage, setSelectedImage] = useState<number | null>(null);
  const [touchStart, setTouchStart] = useState(0);
  const [touchEnd, setTouchEnd] = useState(0);

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % photos.length);
  };

  const handlePrevious = () => {
    setCurrentIndex((prev) => (prev - 1 + photos.length) % photos.length);
  };

  const handleOpen = (index: number) => {
    setSelectedImage(index);
  };

  const handleClose = () => {
    setSelectedImage(null);
  };

  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchStart(e.targetTouches[0].clientX);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = () => {
    if (!touchStart || !touchEnd) return;
    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > 50;
    const isRightSwipe = distance < -50;

    if (isLeftSwipe) {
      handleNext();
    }
    if (isRightSwipe) {
      handlePrevious();
    }
  };

  // Tangentbordsnavigering
  useEffect(() => {
    const handleKeyPress = (e: KeyboardEvent) => {
      if (e.key === 'ArrowLeft') {
        setCurrentIndex((prev) => (prev - 1 + photos.length) % photos.length);
      } else if (e.key === 'ArrowRight') {
        setCurrentIndex((prev) => (prev + 1) % photos.length);
      } else if (e.key === 'Escape') {
        setSelectedImage(null);
      }
    };

    window.addEventListener('keydown', handleKeyPress);
    return () => window.removeEventListener('keydown', handleKeyPress);
  }, []);

  return (
    <Container maxWidth="lg">
      <Box sx={{ py: 8 }}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Typography 
            variant="h3" 
            component="h1" 
            gutterBottom 
            align="center" 
            sx={{ 
              mb: 6,
              fontFamily: "'Playfair Display', serif",
              fontWeight: 400,
              color: '#2c3e50'
            }}
          >
            Vårt Liv i Bilder
          </Typography>

          {/* Karusell */}
          <Box
            sx={{
              position: 'relative',
              maxWidth: '700px',
              mx: 'auto',
              mb: 4,
              overflow: 'hidden'
            }}
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
          >
            {/* Bildcontainer med synliga sidobilder */}
            <Box
              sx={{
                position: 'relative',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: 2,
                px: { xs: 4, md: 8 }
              }}
            >
              {/* Föregående bild (vänster) */}
              <motion.div
                key={`prev-${currentIndex}`}
                initial={{ opacity: 0.3, scale: 0.75 }}
                animate={{ opacity: 0.5, scale: 0.8 }}
                transition={{ 
                  duration: 0.8,
                  ease: [0.4, 0.0, 0.2, 1]
                }}
                style={{
                  width: '20%',
                  position: 'relative',
                  cursor: 'pointer'
                }}
                onClick={handlePrevious}
                whileHover={{ opacity: 0.7, scale: 0.85 }}
              >
                <Box
                  sx={{
                    width: '100%',
                    paddingTop: '75%',
                    position: 'relative',
                    overflow: 'hidden',
                    borderRadius: '8px'
                  }}
                >
                  <Box
                    component="img"
                    src={photos[(currentIndex - 1 + photos.length) % photos.length].src}
                    alt={`Bild ${((currentIndex - 1 + photos.length) % photos.length) + 1}`}
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
              </motion.div>

              {/* Huvudbild (mitten) */}
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentIndex}
                  initial={{ opacity: 0, x: 50 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -50 }}
                  transition={{ 
                    duration: 0.8,
                    ease: [0.4, 0.0, 0.2, 1]
                  }}
                  style={{
                    width: '60%',
                    position: 'relative'
                  }}
                >
                  <Box
                    sx={{
                      width: '100%',
                      paddingTop: '75%',
                      position: 'relative',
                      overflow: 'hidden',
                      borderRadius: '12px',
                      boxShadow: '0 8px 32px rgba(0, 0, 0, 0.15)',
                      cursor: 'pointer',
                      bgcolor: '#f5f5f5'
                    }}
                    onClick={() => handleOpen(currentIndex)}
                  >
                    <Box
                      component="img"
                      src={photos[currentIndex].src}
                      alt={photos[currentIndex].title || `Bild ${currentIndex + 1}`}
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
                </motion.div>
              </AnimatePresence>

              {/* Nästa bild (höger) */}
              <motion.div
                key={`next-${currentIndex}`}
                initial={{ opacity: 0.3, scale: 0.75 }}
                animate={{ opacity: 0.5, scale: 0.8 }}
                transition={{ 
                  duration: 0.8,
                  ease: [0.4, 0.0, 0.2, 1]
                }}
                style={{
                  width: '20%',
                  position: 'relative',
                  cursor: 'pointer'
                }}
                onClick={handleNext}
                whileHover={{ opacity: 0.7, scale: 0.85 }}
              >
                <Box
                  sx={{
                    width: '100%',
                    paddingTop: '75%',
                    position: 'relative',
                    overflow: 'hidden',
                    borderRadius: '8px'
                  }}
                >
                  <Box
                    component="img"
                    src={photos[(currentIndex + 1) % photos.length].src}
                    alt={`Bild ${((currentIndex + 1) % photos.length) + 1}`}
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
              </motion.div>
            </Box>

            {/* Navigeringspilar */}
            <IconButton
              onClick={handlePrevious}
              sx={{
                position: 'absolute',
                left: { xs: 4, md: -50 },
                top: '50%',
                transform: 'translateY(-50%)',
                bgcolor: 'rgba(255, 255, 255, 0.95)',
                color: '#e74c3c',
                '&:hover': {
                  bgcolor: 'rgba(255, 255, 255, 1)',
                  transform: 'translateY(-50%) scale(1.1)'
                },
                boxShadow: '0 4px 12px rgba(0, 0, 0, 0.15)',
                zIndex: 3,
                width: { xs: 36, md: 40 },
                height: { xs: 36, md: 40 }
              }}
            >
              <ArrowBackIosIcon sx={{ fontSize: { xs: '1rem', md: '1.2rem' } }} />
            </IconButton>

            <IconButton
              onClick={handleNext}
              sx={{
                position: 'absolute',
                right: { xs: 4, md: -50 },
                top: '50%',
                transform: 'translateY(-50%)',
                bgcolor: 'rgba(255, 255, 255, 0.95)',
                color: '#e74c3c',
                '&:hover': {
                  bgcolor: 'rgba(255, 255, 255, 1)',
                  transform: 'translateY(-50%) scale(1.1)'
                },
                boxShadow: '0 4px 12px rgba(0, 0, 0, 0.15)',
                zIndex: 3,
                width: { xs: 36, md: 40 },
                height: { xs: 36, md: 40 }
              }}
            >
              <ArrowForwardIosIcon sx={{ fontSize: { xs: '1rem', md: '1.2rem' } }} />
            </IconButton>

            {/* Indikatorer */}
            <Box
              sx={{
                display: 'flex',
                justifyContent: 'center',
                gap: 1,
                mt: 3
              }}
            >
              {photos.map((_, index) => (
                <Box
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  sx={{
                    width: index === currentIndex ? 32 : 8,
                    height: 8,
                    borderRadius: 4,
                    bgcolor: index === currentIndex ? '#e74c3c' : 'rgba(231, 76, 60, 0.3)',
                    cursor: 'pointer',
                    transition: 'all 0.3s ease',
                    '&:hover': {
                      bgcolor: index === currentIndex ? '#c0392b' : 'rgba(231, 76, 60, 0.5)'
                    }
                  }}
                />
              ))}
            </Box>

            {/* Bildräknare */}
            <Typography
              variant="body2"
              align="center"
              sx={{
                mt: 1,
                color: '#7f8c8d',
                fontFamily: "'Playfair Display', serif",
                fontSize: '0.9rem'
              }}
            >
              {currentIndex + 1} / {photos.length}
            </Typography>
          </Box>

          {/* Fullskärmsmodal */}
          <AnimatePresence>
            {selectedImage !== null && (
              <Modal
                open={true}
                onClose={handleClose}
                sx={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  bgcolor: 'rgba(0, 0, 0, 0.9)'
                }}
              >
                <Box
                  sx={{
                    position: 'relative',
                    maxWidth: '95vw',
                    maxHeight: '95vh',
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
                      cursor: 'pointer'
                    }}
                  >
                    <Box
                      component="img"
                      src={photos[selectedImage].src}
                      alt={photos[selectedImage].title || `Bild ${selectedImage + 1}`}
                      sx={{
                        maxWidth: '95vw',
                        maxHeight: '95vh',
                        objectFit: 'contain'
                      }}
                    />
                  </motion.div>
                  
                  {/* Stäng-knapp */}
                  <IconButton
                    onClick={handleClose}
                    sx={{
                      position: 'absolute',
                      top: 16,
                      right: 16,
                      bgcolor: 'rgba(255, 255, 255, 0.9)',
                      color: '#e74c3c',
                      '&:hover': {
                        bgcolor: 'rgba(255, 255, 255, 1)'
                      }
                    }}
                  >
                    ✕
                  </IconButton>
                </Box>
              </Modal>
            )}
          </AnimatePresence>
        </motion.div>
      </Box>
    </Container>
  );
};

export default Gallery; 
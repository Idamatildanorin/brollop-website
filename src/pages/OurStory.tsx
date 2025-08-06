import React, { useState } from 'react';
import { Container, Typography, Box, Paper, Grid, IconButton } from '@mui/material';
import { motion } from 'framer-motion';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';

// Typdefinitioner
interface ImageItem {
  src: string;
  alt: string;
}

interface StoryItem {
  year: string;
  title: string;
  description: string;
  images: ImageItem[];
}

interface ImageCarouselProps {
  images: ImageItem[];
}

const storyItems: StoryItem[] = [
  {
    year: '2013',
    title: 'Vårt första möte',
    description: 'Vi träffas i Umeå',
    images: [
      { src: '/images/photo1.jpg', alt: 'Vårt första möte i Umeå 1' },
      { src: '/images/photo1b.jpg', alt: 'Vårt första möte i Umeå 2' },
      { src: '/images/photo1c.jpg', alt: 'Vårt första möte i Umeå 3' }
    ]
  },
  {
    year: '2018',
    title: 'Nytt kapitel',
    description: 'Vi flyttar tillsammans till Trollhättan',
    images: [
      { src: '/images/photo2.jpg', alt: 'Flytt till Trollhättan 1' },
      { src: '/images/photo2b.jpg', alt: 'Flytt till Trollhättan 2' }
    ]
  },
  {
    year: '2019',
    title: 'Vårt första hem',
    description: 'Vi köper vår första lägenhet och flyttar till Göteborg',
    images: [
      { src: '/images/photo3.jpg', alt: 'Vårt första hem i Göteborg 1' },
      { src: '/images/photo3b.jpg', alt: 'Vårt första hem i Göteborg 2' },
      { src: '/images/photo3c.jpg', alt: 'Vårt första hem i Göteborg 3' }
    ]
  },
  {
    year: '2020',
    title: 'Äventyr i sikte',
    description: 'Vi bygger vår drömvan tillsammans',
    images: [
      { src: '/images/photo4.jpg', alt: 'Bygger drömvanen 1' },
      { src: '/images/photo4b.jpg', alt: 'Bygger drömvanen 2' }
    ]
  },
  {
    year: '2021',
    title: 'Vanlife Äventyr',
    description: 'Vi utforskar världen och upplever fantastiska platser tillsammans',
    images: [
      { src: '/images/vanlife_mountain.jpg', alt: 'Vandring i bergen' },
      { src: '/images/vanlife_beach.jpg', alt: 'Solnedgång vid stranden' },
      { src: '/images/photo5c.jpg', alt: 'Äventyr på vägarna 3' }
    ]
  },
  {
    year: '2022',
    title: 'Familjen växer',
    description: 'Rut kommer till oss ❤️',
    images: [
      { src: '/images/rut1.jpg', alt: 'Rut kommer till familjen 1' },
      { src: '/images/rut2.jpg', alt: 'Rut kommer till familjen 2' }
    ]
  },
  {
    year: '2024',
    title: 'För alltid tillsammans',
    description: 'Vi förlovar oss ❤️',
    images: [
      { src: '/images/engagement1.jpg', alt: 'Vår förlovning 1' },
      { src: '/images/photo7b.jpg', alt: 'Vår förlovning 2' },
      { src: '/images/photo7c.jpg', alt: 'Vår förlovning 3' }
    ]
  }
];

// ImageCarousel-komponent för att visa flera bilder
const ImageCarousel: React.FC<ImageCarouselProps> = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = (e: React.MouseEvent) => {
    e.stopPropagation();
    setCurrentIndex((prevIndex) => (prevIndex > 0 ? prevIndex - 1 : images.length - 1));
  };

  const handleNext = (e: React.MouseEvent) => {
    e.stopPropagation();
    setCurrentIndex((prevIndex) => (prevIndex < images.length - 1 ? prevIndex + 1 : 0));
  };

  const goToSlide = (index: number, e: React.MouseEvent) => {
    e.stopPropagation();
    setCurrentIndex(index);
  };

  return (
    <Box sx={{ position: 'relative', height: '100%', width: '100%' }}>
      {/* Bilder */}
      <Box
        sx={{
          position: 'relative',
          height: '100%',
          width: '100%',
          overflow: 'hidden',
          borderRadius: 'inherit'
        }}
      >
        {images.map((image: ImageItem, index: number) => (
          <Box
            key={index}
            component="img"
            src={image.src}
            alt={image.alt}
            onError={() => console.error(`Failed to load image: ${image.src}`)}
            onLoad={() => console.log(`Successfully loaded image: ${image.src}`)}
            sx={{
              position: 'absolute',
              top: 0,
              left: 0,
              width: '100%',
              height: '100%',
              objectFit: 'cover',
              opacity: index === currentIndex ? 1 : 0,
              transition: 'opacity 0.5s ease-in-out',
              zIndex: index === currentIndex ? 1 : 0
            }}
          />
        ))}
      </Box>

      {/* Endast visa navigationskontroller om det finns fler än 1 bild */}
      {images.length > 1 && (
        <>
          {/* Navigationsknappar */}
          <IconButton
            onClick={handlePrev}
            sx={{
              position: 'absolute',
              left: 8,
              top: '50%',
              transform: 'translateY(-50%)',
              bgcolor: 'rgba(255, 255, 255, 0.7)',
              '&:hover': { bgcolor: 'rgba(255, 255, 255, 0.9)' },
              zIndex: 2,
              boxShadow: '0 2px 4px rgba(0,0,0,0.2)'
            }}
            size="small"
          >
            <ArrowBackIosNewIcon fontSize="small" />
          </IconButton>
          
          <IconButton
            onClick={handleNext}
            sx={{
              position: 'absolute',
              right: 8,
              top: '50%',
              transform: 'translateY(-50%)',
              bgcolor: 'rgba(255, 255, 255, 0.7)',
              '&:hover': { bgcolor: 'rgba(255, 255, 255, 0.9)' },
              zIndex: 2,
              boxShadow: '0 2px 4px rgba(0,0,0,0.2)'
            }}
            size="small"
          >
            <ArrowForwardIosIcon fontSize="small" />
          </IconButton>

          {/* Indikatorer för bilder */}
          <Box
            sx={{
              position: 'absolute',
              bottom: 10,
              left: '50%',
              transform: 'translateX(-50%)',
              display: 'flex',
              gap: 1,
              zIndex: 2
            }}
          >
            {images.map((_: ImageItem, index: number) => (
              <IconButton 
                key={index} 
                onClick={(e: React.MouseEvent) => goToSlide(index, e)}
                sx={{ 
                  p: 0.5,
                  color: index === currentIndex ? '#1976d2' : 'rgba(255, 255, 255, 0.7)'
                }}
                size="small"
              >
                <FiberManualRecordIcon 
                  sx={{ 
                    fontSize: index === currentIndex ? 12 : 8,
                    filter: index === currentIndex ? 'none' : 'drop-shadow(0px 0px 1px rgba(0, 0, 0, 0.5))'
                  }} 
                />
              </IconButton>
            ))}
          </Box>
        </>
      )}
    </Box>
  );
};

const OurStory = () => {
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
              color: '#1976d2'
            }}
          >
            Vår Historia
          </Typography>

          <Box sx={{ position: 'relative', maxWidth: '1000px', mx: 'auto' }}>
            {/* Vertikal tidslinje */}
            <Box
              sx={{
                position: 'absolute',
                left: '50%',
                top: 0,
                bottom: 0,
                width: 3,
                transform: 'translateX(-50%)',
                background: 'linear-gradient(180deg, #1976d2 0%, #1976d2 30%, rgba(25, 118, 210, 0.7) 70%, rgba(25, 118, 210, 0.4) 100%)',
                boxShadow: '0 0 8px rgba(25, 118, 210, 0.2)',
                display: { xs: 'none', md: 'block' }
              }}
            />

            {/* Mobil tidslinje (endast synlig på små skärmar) */}
            <Box
              sx={{
                position: 'absolute',
                left: { xs: 80, sm: 100 },
                top: 0,
                bottom: 0,
                width: 3,
                background: 'linear-gradient(180deg, #1976d2 0%, #1976d2 30%, rgba(25, 118, 210, 0.7) 70%, rgba(25, 118, 210, 0.4) 100%)',
                boxShadow: '0 0 8px rgba(25, 118, 210, 0.2)',
                display: { xs: 'block', md: 'none' }
              }}
            />

            {/* Story items med bilder */}
            {storyItems.map((item: StoryItem, index: number) => (
              <motion.div
                key={item.year}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.7, delay: index * 0.15 }}
                style={{ marginBottom: '80px' }}
              >
                {/* Desktop layout (sidväxlande layout) */}
                <Box
                  sx={{
                    display: { xs: 'none', md: 'flex' },
                    flexDirection: index % 2 === 0 ? 'row' : 'row-reverse',
                    justifyContent: 'center',
                    alignItems: 'center',
                    position: 'relative',
                  }}
                >
                  {/* År och punkt på tidslinjen (alltid i mitten) */}
                  <Box 
                    sx={{ 
                      position: 'absolute',
                      left: '50%',
                      top: '50%',
                      transform: 'translate(-50%, -50%)',
                      zIndex: 2,
                      textAlign: 'center',
                      bgcolor: '#fff', 
                      borderRadius: '50%',
                      width: 60,
                      height: 60,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      border: '3px solid #1976d2',
                      boxShadow: '0 0 0 4px rgba(25, 118, 210, 0.15), 0 2px 8px rgba(0,0,0,0.15)'
                    }}
                  >
                    <Typography
                      variant="h6"
                      sx={{ 
                        color: '#1976d2',
                        fontWeight: 600
                      }}
                    >
                      {item.year}
                    </Typography>
                  </Box>

                  {/* Vänster eller höger innehåll */}
                  <Grid container spacing={2}>
                    {/* Text-innehåll (50% bredd) */}
                    <Grid item xs={12} md={5}>
                      <Paper
                        elevation={3}
                        sx={{
                          p: 3,
                          height: '100%',
                          background: 'linear-gradient(145deg, #ffffff 0%, #f8f8f8 100%)',
                          borderRadius: 2,
                          mr: index % 2 === 0 ? { md: 4 } : 0,
                          ml: index % 2 !== 0 ? { md: 4 } : 0,
                          position: 'relative',
                          display: 'flex',
                          flexDirection: 'column',
                          justifyContent: 'center'
                        }}
                      >
                        <Typography 
                          variant="h5" 
                          gutterBottom
                          sx={{ 
                            color: '#0d47a1',
                            fontWeight: 500
                          }}
                        >
                          {item.title}
                        </Typography>
                        <Typography 
                          variant="body1"
                          sx={{ 
                            color: '#0d47a1',
                            opacity: 0.9,
                            fontSize: '1.05rem',
                            lineHeight: 1.6
                          }}
                        >
                          {item.description}
                        </Typography>
                      </Paper>
                    </Grid>
                    
                    {/* Tom grid cell för att skapa mellanrum i mitten (tidslinje) */}
                    <Grid item xs={12} md={2}></Grid>
                    
                    {/* Bild (50% bredd) */}
                    <Grid item xs={12} md={5}>
                      <motion.div
                        whileHover={{ scale: 1.03 }}
                        transition={{ duration: 0.3 }}
                      >
                        <Paper
                          elevation={4}
                          sx={{
                            overflow: 'hidden',
                            borderRadius: 3,
                            mb: 2,
                            height: 280,
                            boxShadow: '0 8px 20px rgba(0,0,0,0.1)'
                          }}
                        >
                          <ImageCarousel images={item.images} />
                        </Paper>
                      </motion.div>
                    </Grid>
                  </Grid>
                </Box>

                {/* Mobil layout (endast text åt höger) */}
                <Box
                  sx={{
                    display: { xs: 'flex', md: 'none' },
                    mb: 4,
                    position: 'relative'
                  }}
                >
                  {/* Årtal */}
                  <Box
                    sx={{
                      width: { xs: 80, sm: 100 },
                      pr: 3,
                      textAlign: 'right',
                      pt: 1
                    }}
                  >
                    <Typography
                      variant="h6"
                      sx={{ 
                        color: '#1976d2',
                        fontSize: '1.1rem',
                        fontWeight: 600
                      }}
                    >
                      {item.year}
                    </Typography>
                  </Box>

                  {/* Punkt på tidslinjen */}
                  <Box
                    sx={{
                      position: 'absolute',
                      left: { xs: 71, sm: 91 },
                      top: '30px',
                      width: 20,
                      height: 20,
                      borderRadius: '50%',
                      bgcolor: '#fff',
                      border: '3px solid #1976d2',
                      transform: 'translateY(-50%)',
                      boxShadow: '0 0 0 4px rgba(25, 118, 210, 0.15), 0 2px 4px rgba(0,0,0,0.1)',
                      zIndex: 1
                    }}
                  />

                  {/* Innehåll med bild */}
                  <Box sx={{ flex: 1, ml: 4 }}>
                    {/* Bild */}
                    <Paper
                      elevation={3}
                      sx={{
                        overflow: 'hidden',
                        borderRadius: 2,
                        mb: 2,
                        height: 200
                      }}
                    >
                      <ImageCarousel images={item.images} />
                    </Paper>
                    
                    {/* Text */}
                    <Paper
                      elevation={2}
                      sx={{
                        p: 2,
                        background: 'linear-gradient(145deg, #ffffff 0%, #f8f8f8 100%)',
                        borderRadius: 2
                      }}
                    >
                      <Typography 
                        variant="h6" 
                        gutterBottom
                        sx={{ 
                          color: '#0d47a1',
                          fontSize: '1.1rem',
                          fontWeight: 500
                        }}
                      >
                        {item.title}
                      </Typography>
                      <Typography 
                        variant="body1"
                        sx={{ 
                          color: '#0d47a1',
                          opacity: 0.8
                        }}
                      >
                        {item.description}
                      </Typography>
                    </Paper>
                  </Box>
                </Box>
              </motion.div>
            ))}
          </Box>
        </motion.div>
      </Box>
    </Container>
  );
};

export default OurStory; 
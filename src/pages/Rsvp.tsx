import React, { useState, useEffect, useCallback } from 'react';
import {
  Container,
  Box,
  TextField,
  Button,
  FormControl,
  FormControlLabel,
  Radio,
  RadioGroup,
  Typography,
  Paper,
  Alert,
  CircularProgress,
  Collapse,
  Dialog,
  IconButton
} from '@mui/material';
import { motion, AnimatePresence } from 'framer-motion';
import emailjs from '@emailjs/browser';
import Confetti from 'react-confetti';
import CloseIcon from '@mui/icons-material/Close';

// Initialize EmailJS
emailjs.init("TrPdgkkOUYIHHEi6A");

// Roliga meddelanden för bubblorna
const BUBBLE_MESSAGES = [
  "Dags att dansa! 💃",
  "Kärlek är i luften! ❤️",
  "Skål för brudparet! 🥂",
  "Fest och glädje! 🎉",
  "Kärlek & dans! 💕",
  "Champagne! 🍾",
  "Tårta kommer! 🎂",
  "Dags att fira! 🎊",
  "Kärlek vinner! 💑",
  "Dans hela natten! 🌙"
];

interface Bubble {
  id: number;
  x: number;
  y: number;
  size: number;
  speed: number;
  message: string;
}

interface PlayerScore {
  name: string;
  score: number;
}

const BubblePopper = ({ onClose, playerName }: { onClose: () => void; playerName: string }) => {
  const [bubbles, setBubbles] = useState<Bubble[]>([]);
  const [score, setScore] = useState(0);
  const [gameStarted, setGameStarted] = useState(false);
  const [timeLeft, setTimeLeft] = useState(30);
  const [hasPlayed, setHasPlayed] = useState(() => {
    const playedPlayers = localStorage.getItem('bubbleGamePlayers');
    if (!playedPlayers) return false;
    return JSON.parse(playedPlayers).includes(playerName);
  });
  const [topScores, setTopScores] = useState<PlayerScore[]>(() => {
    const saved = localStorage.getItem('bubbleGameScores');
    return saved ? JSON.parse(saved) : [];
  });
  const [isLeader, setIsLeader] = useState(false);

  // Skapa nya bubblor
  const createBubble = useCallback(() => {
    const newBubble: Bubble = {
      id: Math.random(),
      x: Math.random() * (window.innerWidth - 100),
      y: window.innerHeight,
      size: Math.random() * (60 - 30) + 30,
      speed: Math.random() * (4 - 2) + 2,
      message: BUBBLE_MESSAGES[Math.floor(Math.random() * BUBBLE_MESSAGES.length)]
    };
    setBubbles(prev => [...prev, newBubble]);
  }, []);

  // Starta spelet
  const startGame = () => {
    if (hasPlayed) return;
    setGameStarted(true);
    setScore(0);
    setTimeLeft(30);
  };

  // Spara poäng och uppdatera topplistan
  const saveScore = (finalScore: number) => {
    const newScore: PlayerScore = { name: playerName, score: finalScore };
    const updatedScores = [...topScores, newScore].sort((a, b) => b.score - a.score);
    setTopScores(updatedScores);
    localStorage.setItem('bubbleGameScores', JSON.stringify(updatedScores));
    
    // Markera spelaren som har spelat
    const playedPlayers = localStorage.getItem('bubbleGamePlayers');
    const players = playedPlayers ? JSON.parse(playedPlayers) : [];
    players.push(playerName);
    localStorage.setItem('bubbleGamePlayers', JSON.stringify(players));
    setHasPlayed(true);

    // Kolla om spelaren leder
    setIsLeader(updatedScores[0].name === playerName);
  };

  // Uppdatera bubblor
  useEffect(() => {
    if (!gameStarted) return;

    const bubbleInterval = setInterval(createBubble, 800);
    const gameInterval = setInterval(() => {
      setBubbles(prev => 
        prev.map(bubble => ({
          ...bubble,
          y: bubble.y - bubble.speed
        })).filter(bubble => bubble.y > -100)
      );
    }, 16);

    const timer = setInterval(() => {
      setTimeLeft(prev => {
        if (prev <= 1) {
          clearInterval(bubbleInterval);
          clearInterval(gameInterval);
          clearInterval(timer);
          setGameStarted(false);
          saveScore(score);
        }
        return prev - 1;
      });
    }, 1000);

    return () => {
      clearInterval(bubbleInterval);
      clearInterval(gameInterval);
      clearInterval(timer);
    };
  }, [gameStarted, createBubble, score, playerName]);

  // Poppa en bubbla
  const popBubble = (id: number) => {
    setBubbles(prev => prev.filter(bubble => bubble.id !== id));
    setScore(prev => prev + 1);
  };

  return (
    <Dialog
      open={true}
      maxWidth="md"
      fullWidth
      onClose={onClose}
      PaperProps={{
        sx: {
          background: 'linear-gradient(145deg, #ffffff 0%, #f8f8f8 100%)',
          height: '80vh',
          position: 'relative',
          overflow: 'hidden'
        }
      }}
    >
      <Box sx={{ p: 2, textAlign: 'center', position: 'relative' }}>
        <IconButton
          onClick={onClose}
          sx={{ position: 'absolute', right: 8, top: 8 }}
        >
          <CloseIcon />
        </IconButton>
        
        <Typography variant="h4" sx={{ mb: 2, color: '#9E7676' }}>
          Bubbel-tävlingen! 🍾
        </Typography>

        {!gameStarted ? (
          <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 2 }}>
            {hasPlayed ? (
              <>
                <Typography variant="h6" sx={{ color: '#594545', mb: 2 }}>
                  Du poppade {score} bubblor!
                </Typography>
                {isLeader && (
                  <motion.div
                    initial={{ scale: 1 }}
                    animate={{ scale: [1, 1.2, 1] }}
                    transition={{ duration: 0.5, repeat: 3 }}
                  >
                    <Typography variant="h5" sx={{ color: '#9E7676', fontWeight: 'bold', mb: 1 }}>
                      🎉 DU LEDER TÄVLINGEN! 🍾
                    </Typography>
                    <Typography variant="body1" sx={{ color: '#594545', mb: 2 }}>
                      En bubbelflaska väntar på dig på bröllopet om du vinner!
                    </Typography>
                  </motion.div>
                )}
              </>
            ) : (
              <>
                <Typography variant="h6" sx={{ color: '#594545', mb: 2 }}>
                  Välkommen till bubbel-tävlingen! Du har EN chans att vinna en bubbelflaska!
                </Typography>
                <Button
                  variant="contained"
                  color="primary"
                  onClick={startGame}
                  sx={{ mt: 2 }}
                >
                  Starta spelet!
                </Button>
              </>
            )}

            <Box sx={{ mt: 3, width: '100%', maxWidth: 400 }}>
              <Typography variant="h6" sx={{ color: '#9E7676', mb: 2 }}>
                Topplista 🏆
              </Typography>
              {topScores.slice(0, 5).map((player, index) => (
                <Box
                  key={index}
                  sx={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    p: 1,
                    backgroundColor: player.name === playerName ? 'rgba(158, 118, 118, 0.1)' : 'transparent',
                    borderRadius: 1,
                    mb: 1
                  }}
                >
                  <Typography sx={{ color: '#594545' }}>
                    {index + 1}. {player.name}
                  </Typography>
                  <Typography sx={{ color: '#594545', fontWeight: 'bold' }}>
                    {player.score} bubblor
                  </Typography>
                </Box>
              ))}
            </Box>
          </Box>
        ) : (
          <Box sx={{ mb: 2 }}>
            <Typography variant="h6" sx={{ color: '#594545' }}>
              Poäng: {score} | Tid kvar: {timeLeft}s
            </Typography>
          </Box>
        )}

        <Box
          sx={{
            position: 'relative',
            width: '100%',
            height: '60vh',
            overflow: 'hidden',
            background: 'linear-gradient(180deg, #f0f8ff 0%, #e6f0ff 100%)'
          }}
        >
          {bubbles.map(bubble => (
            <motion.div
              key={bubble.id}
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              style={{
                position: 'absolute',
                left: bubble.x,
                top: bubble.y,
                width: bubble.size,
                height: bubble.size,
                borderRadius: '50%',
                background: 'radial-gradient(circle at 30% 30%, rgba(255,255,255,0.8), rgba(255,255,255,0.4))',
                border: '1px solid rgba(255,255,255,0.6)',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: bubble.size * 0.2,
                textAlign: 'center',
                padding: '5px',
                boxShadow: '0 0 10px rgba(255,255,255,0.5)',
                userSelect: 'none'
              }}
              onClick={() => popBubble(bubble.id)}
            >
              {bubble.message}
            </motion.div>
          ))}
        </Box>
      </Box>
    </Dialog>
  );
};

interface GuestForm {
  name: string;
  email: string;
  attending: string;
  dietaryRestrictions: string;
  message: string;
  danceSong: string;
}

const Rsvp = () => {
  const [formData, setFormData] = useState<GuestForm>({
    name: '',
    email: '',
    attending: '',
    dietaryRestrictions: '',
    message: '',
    danceSong: ''
  });

  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [showConfetti, setShowConfetti] = useState(false);
  const [showBubbleGame, setShowBubbleGame] = useState(false);
  const [windowDimensions, setWindowDimensions] = useState({
    width: window.innerWidth,
    height: window.innerHeight
  });

  useEffect(() => {
    const handleResize = () => {
      setWindowDimensions({
        width: window.innerWidth,
        height: window.innerHeight
      });
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    if (showConfetti) {
      const timer = setTimeout(() => setShowConfetti(false), 5000);
      return () => clearTimeout(timer);
    }
  }, [showConfetti]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    try {
      const result = await emailjs.send(
        'service_fzp1zvi',
        'template_jvsuzlv',
        {
          to_name: 'Pelle & Matilda',
          from_name: formData.name,
          from_email: formData.email,
          attending: formData.attending === 'yes' ? 'Ja, kommer' : 'Nej, kan inte komma',
          dietary_restrictions: formData.dietaryRestrictions || 'Inga',
          message: formData.message || 'Inget meddelande',
          dance_song: formData.danceSong || 'Ingen låt vald'
        },
        'TrPdgkkOUYIHHEi6A'
      );

      if (result.text === 'OK') {
        if (formData.attending === 'yes') {
          setShowConfetti(true);
          // Visa spelet efter en längre stund (4 sekunder)
          setTimeout(() => setShowBubbleGame(true), 4000);
        }
        setSubmitted(true);
      } else {
        setError('Något gick fel. Vänligen försök igen.');
      }
    } catch (error) {
      setError('Något gick fel. Vänligen försök igen.');
      console.error('EmailJS error:', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <Container maxWidth="md">
      {showConfetti && (
        <Confetti
          width={windowDimensions.width}
          height={windowDimensions.height}
          recycle={false}
          numberOfPieces={200}
          gravity={0.3}
        />
      )}
      
      {showBubbleGame && (
        <BubblePopper 
          onClose={() => setShowBubbleGame(false)} 
          playerName={formData.name}
        />
      )}

      <Box sx={{ py: 8 }}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Typography variant="h3" component="h1" gutterBottom align="center" sx={{ 
            color: '#9E7676',
            fontFamily: 'inherit',
            letterSpacing: 'initial'
          }}>
            OSA
          </Typography>
          <Typography variant="h6" align="center" gutterBottom sx={{ 
            mb: 4, 
            color: '#594545',
            fontStyle: 'normal'
          }}>
            Vänligen svara senast den 5 maj 2026
          </Typography>

          {submitted ? (
            <Alert 
              severity="success" 
              sx={{ 
                mt: 4,
                '& .MuiAlert-message': {
                  fontSize: '1.1rem',
                  textAlign: 'center',
                  width: '100%'
                }
              }}
            >
              {formData.attending === 'yes' 
                ? "Hurra! Vi ser fram emot att fira tillsammans med dig! 🎉" 
                : "Tack för ditt svar! Vi kommer att sakna dig! ❤️"}
            </Alert>
          ) : (
            <Paper 
              elevation={2} 
              sx={{ 
                p: 4, 
                background: 'linear-gradient(145deg, #ffffff 0%, #f8f8f8 100%)',
                borderRadius: '12px',
                boxShadow: '0 4px 20px rgba(0,0,0,0.05)'
              }}
            >
              {error && (
                <Alert severity="error" sx={{ mb: 3 }}>
                  {error}
                </Alert>
              )}
              
              <form onSubmit={handleSubmit}>
                <Box sx={{ display: 'flex', flexDirection: 'column', gap: 3 }}>
                  <TextField
                    required
                    label="Namn"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    fullWidth
                    disabled={loading}
                  />

                  <TextField
                    required
                    label="E-post"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    fullWidth
                    disabled={loading}
                  />

                  <FormControl required>
                    <Typography variant="subtitle1" gutterBottom sx={{ color: '#594545' }}>
                      Kommer du på bröllopet?
                    </Typography>
                    <RadioGroup
                      name="attending"
                      value={formData.attending}
                      onChange={handleChange}
                    >
                      <FormControlLabel
                        value="yes"
                        control={<Radio />}
                        label="Ja, jag kommer"
                        disabled={loading}
                      />
                      <FormControlLabel
                        value="no"
                        control={<Radio />}
                        label="Nej, jag kan tyvärr inte komma"
                        disabled={loading}
                      />
                    </RadioGroup>
                  </FormControl>

                  <AnimatePresence>
                    {formData.attending === 'yes' && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3 }}
                      >
                        <TextField
                          label="Min bästa danslåt"
                          name="danceSong"
                          value={formData.danceSong}
                          onChange={handleChange}
                          fullWidth
                          placeholder="Låt och artist som får dig att dansa"
                          helperText="Hjälp oss skapa den bästa spellistan!"
                          disabled={loading}
                        />
                      </motion.div>
                    )}
                  </AnimatePresence>

                  <TextField
                    label="Allergier eller specialkost"
                    name="dietaryRestrictions"
                    value={formData.dietaryRestrictions}
                    onChange={handleChange}
                    fullWidth
                    multiline
                    rows={2}
                    disabled={loading}
                  />

                  <TextField
                    label="Meddelande till brudparet"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    fullWidth
                    multiline
                    rows={4}
                    disabled={loading}
                  />

                  <Button
                    type="submit"
                    variant="contained"
                    color="primary"
                    size="large"
                    disabled={loading}
                    sx={{ 
                      mt: 2,
                      position: 'relative',
                      minHeight: 48
                    }}
                  >
                    {loading ? (
                      <>
                        <CircularProgress
                          size={24}
                          sx={{
                            position: 'absolute',
                            top: '50%',
                            left: '50%',
                            marginTop: '-12px',
                            marginLeft: '-12px',
                          }}
                        />
                        Skickar...
                      </>
                    ) : (
                      'Skicka svar'
                    )}
                  </Button>
                </Box>
              </form>
            </Paper>
          )}
        </motion.div>
      </Box>
    </Container>
  );
};

export default Rsvp; 
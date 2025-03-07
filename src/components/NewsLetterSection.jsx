import React, { useState } from 'react';
import { 
  Box, 
  Typography, 
  TextField, 
  Button 
} from '@mui/material';

const NewsletterSection= () => {
  const [email, setEmail] = useState('');

  const handleSubscribe = () => {
    // Implement newsletter subscription logic
    console.log('Subscribing with email:', email);
    // Reset email after submission
    setEmail('');
  };

  return (
    <Box
      sx={{
        background: '#000', 
        p: 4,
        borderRadius: 2,
        mt: 4,
        color: 'white',
        textAlign: 'center',
      }}
    >
      <Typography variant="h5" gutterBottom>
        Stay Updated
      </Typography>
      <Typography variant="body1" paragraph>
        Subscribe to my newsletter for the latest articles and updates
      </Typography>
      <Box
        sx={{ display: 'flex', gap: 1, maxWidth: '500px', mx: 'auto' }}
      >
        <TextField
          placeholder="Your email address"
          variant="outlined"
          fullWidth
          size="small"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          sx={{
            backgroundColor: 'rgba(22, 28, 36, 0.9)',
            borderRadius: 1,
            
          }}
        />
        <Button
          variant="contained"
          onClick={handleSubscribe}
          sx={{
            bgcolor: '#fff',
            color: '#000',
            '&:hover': { bgcolor: '#f0f0f0' },
          }}
        >
          Subscribe
        </Button>
      </Box>
    </Box>
  );
};

export default NewsletterSection;
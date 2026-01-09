import { Box, Typography, useMediaQuery } from '@mui/material';
import React from 'react';

const BeyondWork = () => {
  const isMobile = useMediaQuery('(max-width:600px)');

  return (
    <Box
      sx={{
        width: '100%',
        mt: 2,
        color: 'rgba(255,255,255,0.85)',
        borderRadius: 2,
        p: 2,
        border: '1px solid rgba(255,255,255,0.08)',
      }}
    >
     

      {/* Currently Reading */}
      <Box sx={{ mb: 4 }}>
        <Typography
          sx={{
            fontFamily: "'Roboto Slab', serif",
            fontSize: '18px',
            letterSpacing: '1px',
            // textTransform: 'uppercase',
            opacity: 0.5,
            mb: 1,
          }}
        >
          currently reading
        </Typography>

        <Typography
          sx={{
            fontFamily: "'Roboto Slab', serif",
            fontSize: '18px',
            fontStyle: 'italic',
            // opacity: 0.85,
          }}
        >
          Days at the Morisaki Bookshop - Satoshi Yagisawa
        </Typography>
      </Box>

      {/* I Love */}
      <Box>
        <Typography
          sx={{
            fontFamily: "'Roboto Slab', serif",
            fontSize: '18px',
            letterSpacing: '1px',
            // textTransform: 'uppercase',
            opacity: 0.5,
            mb: 1,
          }}
        >
          i love
        </Typography>

        <Box
          component="ul"
          sx={{
            listStyle: 'none',
            p: 0,
            m: 0,
            display: 'flex',
            flexDirection: 'column',
            gap: 1.2,
          }}
        >
          {[
            'fast bowling in cricket',
             'fantasy worlds: Star Wars to LOTR',
            'researching medieval history and geopolitics',
            
            'stand-up comedy',
            'walking round and round in my campus',
            'pop music',
          ].map((item, idx) => (
            <Box
              component="li"
              key={idx}
              sx={{
                fontFamily: "'Roboto Slab', serif",
                fontSize: '17px',
                // opacity: 0.8,
                position: 'relative',
                pl: 2,
                '&::before': {
                  content: '"—"',
                  position: 'absolute',
                  left: 0,
                  opacity: 0.4,
                },
              }}
            >
              {item}
            </Box>
          ))}
        </Box>
      </Box>
    </Box>
  );
};

export default BeyondWork;

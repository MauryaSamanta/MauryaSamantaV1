import React from 'react'
import { Box, Typography, Button, useMediaQuery } from '@mui/material'
import LaunchIcon from '@mui/icons-material/Launch'

const BlogBoxes = ({ id, name, description, date, link }) => {
      const isMobile = useMediaQuery('(max-width:600px)');
  return (
    <Box
      sx={{
        width: '100%',
        maxWidth: 600,
        borderBottomRightRadius: id === 4 && '10px',
        borderBottomLeftRadius: id === 4 && '10px',
        borderTopRightRadius: id === 1 && '10px',
        borderTopLeftRadius: id === 1 && '10px',
        p: 2,
        bgcolor: 'rgba(255,255,255,0.03)',
        color: 'white',
        boxShadow: '0 0 15px rgba(255,255,255,0.05)',
        border: '0.5px solid rgba(255,255,255,0.1)',
        fontFamily: "'Roboto Slab', serif",
        position: 'relative',
      }}
    >
      {/* Date at top-right */}
     {!isMobile&&( <Typography
        variant="caption"
        sx={{
          color: '#aaa',
          position: 'absolute',
          top: 12,
          right: 16,
           fontFamily: "'Roboto Slab', serif",
          fontSize: '11px',
        }}
      >
        {date}
      </Typography>
)}
      {/* Title */}
      <Typography
        variant="h6"
        fontWeight={600}
        mb={0.5}
        sx={{ fontFamily: "'Roboto Slab', serif" }}
      >
        {name}
      </Typography>

      {/* Description */}
      <Typography
        variant="body2"
        color="grey.400"
        mb={1.2}
        sx={{ fontFamily: "'Roboto Slab', serif" }}
      >
        {description}
      </Typography>

      {/* Read Blog Button */}
      <Box mt={2} sx={{
          mt: 'auto',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}>
        <Button
          variant="outlined"
          href={link}
          target="_blank"
          startIcon={<LaunchIcon />}
          sx={{
            color: '#000',
            backgroundColor: '#fff',
            textTransform: 'none',
            fontWeight: 500,
            fontSize: '12px',
            borderRadius: '6px',
            px: 1.5,
            py: 0.5,
            '&:hover': {
              backgroundColor: '#f2f2f2',
            },
          }}
        >
          Read Blog
        </Button>
             {isMobile && (
          <Typography
            variant="caption"
            sx={{
              color: '#aaa',
              fontFamily: "'Roboto Slab', serif",
              fontSize: '11px',
            }}
          >
            {date}
          </Typography>
        )}
      </Box>
    </Box>
  )
}

export default BlogBoxes

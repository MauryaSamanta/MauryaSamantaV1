import { Box, Typography, useMediaQuery } from '@mui/material'
import React from 'react'

const IntoText = () => {
    const isMobile = useMediaQuery('(max-width:600px)');
    return (
        <Box>
            <Typography sx={{ fontFamily: "'Roboto Slab', serif", mt:4, fontSize:"20px"}}>
                21 year old Full stack Developer
            </Typography>
            <Typography sx={{ fontFamily: "'Roboto Slab', serif", mt:1, fontSize:!isMobile?"20px":"16px"}}>
                B.E. Final Year @ Jadavpur University, Kolkata
            </Typography>
        </Box>
    )
}

export default IntoText

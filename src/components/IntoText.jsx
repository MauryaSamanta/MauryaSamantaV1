import { Box, Typography } from '@mui/material'
import React from 'react'

const IntoText = () => {
    return (
        <Box>
            <Typography sx={{ fontFamily: "'Roboto Slab', serif", mt:4}}>
                21 year old Full stack Developer
            </Typography>
            <Typography sx={{ fontFamily: "'Roboto Slab', serif", mt:1}}>
                Senior year @ Jadavpur University
            </Typography>
        </Box>
    )
}

export default IntoText

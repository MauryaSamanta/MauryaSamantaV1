import { Box, Typography } from '@mui/material'
import React from 'react'

const IntoText = () => {
    return (
        <Box>
            <Typography sx={{ fontFamily: "'Roboto Slab', serif", mt:4, fontSize:"20px"}}>
                21 year old Full stack Developer
            </Typography>
            <Typography sx={{ fontFamily: "'Roboto Slab', serif", mt:1, fontSize:"20px"}}>
                B.E. Final Year @ Jadavpur University, Kolkata
            </Typography>
        </Box>
    )
}

export default IntoText

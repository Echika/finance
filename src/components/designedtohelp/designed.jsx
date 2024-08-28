import React from 'react'
import { Box, Divider, Typography } from '@mui/material'

const Designed = () => {
  return (
    <Box sx={{
        alignItems: 'center',
        textAlign: 'center',
        margin: '40px 80px',
        
    }}>
        <Typography variant='h2'>Designed to help you save</Typography>
        <Typography variant='h6' sx={{
            margin: '20px 20px',
            padding: '30px 20px'
        }}>Businesses have saved $600M and 8.5M hours with an average savings of 3.5% per customer with us </Typography>
        <Divider/>
    </Box>
  )
}

export default Designed

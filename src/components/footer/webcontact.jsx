import React from 'react'
import { Box, Typography } from '@mui/material'
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

import {Link} from 'react-router-dom'
import XIcon from '@mui/icons-material/X';

const WebContact = () => {
  return (
     <Box sx={{
        margin: '50px 30px'
     }}>
        <Typography variant='h4'>THRIFT</Typography>
        <Box component='address' sx={{
            padding: '20px 0'
        }}>
            <Typography variant='body1'>Technology Village</Typography>
            <Typography variant='body1'>10-16, Albert Chuks Str.</Typography>
            <Typography variant='body1'>031467</Typography>
        </Box>
        <Typography variant='body1' component='a' href='#'>thrift@gmail.com</Typography>
        <Box sx={{
            display: 'flex',
            marginTop: '20px',
            justifyContent: 'space-between'
        }}>

        <Link to='/'><InstagramIcon /></Link>
         <Link><LinkedInIcon /></Link>
        <Link><XIcon /></Link>
        </Box>
     </Box>
  )
}

export default WebContact

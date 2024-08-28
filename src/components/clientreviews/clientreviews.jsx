import React from 'react'
import { Box, Button, Divider, Typography } from '@mui/material'
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';

const ClientReviews = () => {
  return (
    <Box sx={{
        margin: '30px'
    }}>
        <Box sx={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center'

        }}>
      <Typography variant='h3'>What our client says</Typography>
      <Button>{ <ArrowRightAltIcon/> }</Button>
        </Box>
        <Box sx={{
            display: 'flex',
            justifyContent: 'space-between'
        }}>
            <Box>

            <Typography variant='h4'>"Before now, it was a process from the dark ages. We had people
                just doing expenses full time. It was difficult. There was no integration, everything was manual."   
            </Typography>
            <Typography variant='h6' sx={{
                marginTop: '15px'
            }}>Aregbesola Bolorunduro</Typography>
            <Typography variant='body1'>Agbara, Lagos.</Typography>
            </Box>
            <Box>image</Box>
        </Box>
        <Divider sx={{marginTop: '10px'}}/>
    </Box>
  )
}

export default ClientReviews

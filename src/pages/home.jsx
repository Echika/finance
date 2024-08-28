import React from 'react'

import { Box } from "@mui/material";
import TakeCharge from '../components/takecharge/takeChargeImageDashboard'
import Statistics from '../components/statistics/statistics'
import Designed from '../components/designedtohelp/designed'
import Faq from '../components/faq/faq'
import ItsEasy from "../components/getstartedeasy/itseasy";
import WebContact from '../components/footer/webcontact'
import Footer from '../components/footer/footer'
import ClientReviews from "../components/clientreviews/clientreviews";


const Home = () => {
  return (
    <>
    <TakeCharge />
   <Statistics />
   <ClientReviews />
   <Designed />
   <Faq />
   <ItsEasy />
   <Box display='flex'>
    <WebContact />
   <Footer />
  
   </Box>
   
    </>
  )
}

export default Home

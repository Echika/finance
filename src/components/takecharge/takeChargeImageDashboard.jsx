import React from "react";
import { styled } from "@mui/system";
import { Box, Typography, Button } from "@mui/material";
import {Link} from 'react-router-dom'

import mainImage from "../../assets/images/mainimage.jpg";
import Navbar from "./navbar";

const MyOverLayContent = styled(Box)(({ theme }) => ({
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  color: "#fff",
  textAlign: "center",
  zIndex: 2,
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
}));

const TakeCharge = () => {
  return (
    <Box sx={{ display: "flex", flexDirection: "column", minHeight: "100vh" }}>
      <Box sx={{ position: "absolute", top: 0, left: 0, right: 0, zIndex: 3 }}>
        <Navbar />
      </Box>

      <Box
        sx={{
          position: "relative",
          width: "100%",
          flexGrow: 1,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Box
          component="img"
          alt="backgroundImage"
          src={mainImage}
          sx={{
            position: "absolute",
            top: 0,
            left: 0,
            height: "100%",
            width: "100%",
            objectFit: "cover",
            objectPosition: "center",
          }}
        />
        <Box
          sx={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            backgroundColor: "rgba(0, 0, 0, 0.6)",
          }}
        />

        <MyOverLayContent>
          <Typography
            color="white"
            variant="h1"
            sx={{ mb: 5, color: "whitesmoke" }}
          >
            Take absolute charge of your finances with ease.
          </Typography>
          <Typography
            variant="h4"
            sx={{
              color: "white",
              marginBottom: "20px",
            }}
          >
            Earn 5%* or more yield on your idle cash, and simplify your finances
            in one unified platform.
          </Typography>
          <Box display="flex" sx={{
            mt:5,
            gap: 5,
          
          }}>
            <Button variant="contained">
              <Link to='/signup' style={{
                textDecoration: 'none',
                color: 'black'
              }}>Get Started</Link>
            </Button>
            <Button variant="outlined" color="secondary">
              Try Demo
            </Button>
          </Box>
        </MyOverLayContent>
      </Box>
    </Box>
  );
};

export default TakeCharge;

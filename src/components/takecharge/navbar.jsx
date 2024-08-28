import React from "react";
import { AppBar, Toolbar, Typography, Button, Box, useMediaQuery } from "@mui/material";
import { Link } from "react-router-dom";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  const isMobile = useMediaQuery((theme) => theme.breakpoints.down('sm'))
  return (
    <AppBar
      position="static"
      sx={{ backgroundColor: "transparent", boxShadow: "none",
        display: "flex",
        color: "whitesmoke",
     
       }}
    >
      <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
        <Typography variant="body1" component="div" sx={{
          color: 'white'
        }}>
          
          <NavLink style={{
            textDecoration: 'none',
            color: 'white'
          }}>Finance.</NavLink>
        </Typography>
        {!isMobile && (

        <Box
          component="nav"
          sx={{
            display: "flex",
            color: "whitesmoke",
          }}
        >
          <Button color="inherit" component={Link} to="/">
            Home
          </Button>
          <Button color="inherit" component={Link} to="/about">
            About Us
          </Button>
          <Button color="inherit" component={Link} to="/company">
            Company
          </Button>
          <Button color="inherit" component={Link} to="/contact">
            Contact Us
          </Button>
        </Box>
        )}
      <Link to='/signin' style={{
        color: 'white'
      }}> <Button variant="outlined">Sign In</Button></Link>
      
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;

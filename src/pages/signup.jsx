import React from "react";
import { NavLink } from "react-router-dom";
import {styled} from '@mui/system'
import '../theme'

import {
  Box,
  Typography,
  TextField,
  Button,
  Divider,
  AppBar,
} from "@mui/material";

import GoogleIcon from "@mui/icons-material/Google";

const Signup = () => {
  return (
    <Box sx={{ maxWidth: 400, mx: "auto", mt: 4, p: 3 }}>
      <AppBar
        position="static"
        gutterBottom
        sx={{
          color: "#fff",
          backgroundColor: "#556b2e",
          fontFamily: "Poppins",
          borderRadius: "10px",
        }}
      >
        THRIFT FINANCE
      </AppBar>
      <Typography variant="h4" gutterBottom sx={{ mt: 4 }}>
        Create Account
      </Typography>
      <Button
        variant="outlined"
        fullWidth
        startIcon={<GoogleIcon />}
        sx={{ mt: 2, mb: 2 }}
      >
        Sign up with Google
      </Button>

      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          my: 2,
        }}
      >
        <Divider sx={{ flex: 1 }} />
        <Typography variant="body1">OR</Typography>
        <Divider sx={{ flex: 1 }} />
      </Box>
      <Box className="textField">
        <Typography variant="h6" component="label">
          First Name*
        </Typography>
        <TextField required placeholder="Enter your first name" fullWidth />
      </Box>
      <Box className="textField">
        <Typography variant="h6" component="label">
          Email*
        </Typography>
        <TextField required placeholder="Enter your email" fullWidth />
      </Box>
      <Box className="textField">
        <Typography variant="h6" component="label">
          Password*
        </Typography>
        <TextField
          required
          placeholder="Enter a password"
          type="password"
          fullWidth
          helperText="Must be at least 8 characters."
        />
      </Box>
      <Button variant="contained" fullWidth>
        Create Account
      </Button>
      <Typography
        variant="h6"
        sx={{
          textAlign: "center",
          mt: 2,
        }}
      >
        Already have an account? <NavLink style={{
          textDecoration: 'none'
        }} to="/signin">Log in</NavLink>
      </Typography>
    </Box>
  );
};

export default Signup;

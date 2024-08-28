import React from "react";
import { Box, Button, Grid, TextField, Typography, Paper } from "@mui/material";
import PhoneIphoneIcon from "@mui/icons-material/PhoneIphone";
import MailIcon from "@mui/icons-material/Mail";
import SendIcon from "@mui/icons-material/Send";

const ContactUs = () => {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        minHeight: "100vh",
        backgroundColor: "#f0f0f0",
        padding: "2rem",
      }}
    >
      <Paper
        elevation={3}
        sx={{
          display: "flex",
          maxWidth: 1000,
          width: "100%",
          overflow: "hidden",
          borderRadius: "15px",
        }}
      >
        <Box
          sx={{
            backgroundColor: "#000480",
            width: "50%",
            padding: "2rem",
            color: "white",
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
          }}
        >
          <div>
            <Typography variant="h3" sx={{ mb: 4, color: 'white', fontWeight: "bold" }}>
              Get in touch
            </Typography>
            <Typography variant="h6" sx={{ mb: 4, color: 'white' }}>
              Your message matters! Drop us a line and we'll respond as soon as
              possible. We value your feedback.
            </Typography>
          </div>
          <Box>
            <Typography variant="body1" sx={{ color: 'white', mb: 2, display: "flex", alignItems: "center" }}>
              <PhoneIphoneIcon sx={{ mr: 1, color: 'white' }} /> +2347085706889
            </Typography>
            <Typography variant="body1" sx={{ display: "flex", color: 'white', alignItems: "center" }}>
              <MailIcon sx={{ mr: 1 }} /> echikaraphael@gmail.com
            </Typography>
          </Box>
        </Box>
        <Box
          sx={{
            width: "50%",
            padding: "2rem",
            display: "flex",
            flexDirection: "column",
          }}
        >
          <Typography variant="h4" sx={{ mb: 3, color: "#000080" }}>
            Send us a message
          </Typography>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <TextField fullWidth label="Name" variant="outlined" />
            </Grid>
            <Grid item xs={12}>
              <TextField fullWidth label="Email" variant="outlined" />
            </Grid>
            <Grid item xs={12}>
              <TextField
                fullWidth
                label="Message"
                variant="outlined"
                multiline
                rows={4}
              />
            </Grid>
            <Grid item xs={12}>
              <Button
                variant="outlined"
                endIcon={<SendIcon />}
              >
                Send Message
              </Button>
            </Grid>
          </Grid>
        </Box>
      </Paper>
    </Box>
  );
};

export default ContactUs;
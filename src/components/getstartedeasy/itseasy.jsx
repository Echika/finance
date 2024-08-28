import { Box, Typography } from "@mui/material";
import React from "react";
import mainImage from "../../assets/images/mainimage.jpg";

const ItsEasy = () => {
  return (
    <Box>
      <Box
        sx={{
          backgroundImage: `url('${mainImage}')`,
          height: "300px",
          width: "100%",
          textAlign: "center",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
        }}
      >
        <Typography
          variant="h1"
          sx={{
            color: "white",
            margin: "10px auto",
          }}
        >
          It's easy to get started
        </Typography>
        <Typography
          variant="h6"
          sx={{
            color: "white",
            padding: "10px",
            margin: " 0 80px",
          }}
        >
          Get the app to explore the world of premium cars, get fast and safe
          transactions to help you find your dream rent.
        </Typography>
      </Box>
    </Box>
  );
};

export default ItsEasy;

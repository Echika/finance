import React from "react";
import { Box, Divider, Grid, Typography, useMediaQuery } from "@mui/material";

const stat = [
  {
    id: 1,
    quantity: "20K+",
    description: "In 38 countries, we work as one global team to help clients",
  },
  {
    id: 2,
    quantity: "98%",
    description: "We have worked with 98% of global 500 companies",
  },
  {
    id: 3,
    quantity: "85%",
    description: "We started with an ebellious mindset and set ourselves the challenge",
  },
];

const Statistics = () => {
  console.log("Statistics component rendering:", stat);
  return (
    <Box
      sx={{
        backgroundColor: "rgba(17, 30, 108, .1)",
        padding: "40px",
      }}
    >
      <Grid container spacing={2} justifyContent="center" alignItems="center">
        {stat.map((item, index) => (
          <React.Fragment key={item.id}>
            <Grid item xs={12} sm={3.5} md={3.5} lg={3.5} sx={{ textAlign: 'center' }}>
              <Typography variant='h1' sx={{
                margin: '20px 0px',
                fontWeight: 100,
                fontSize: '4rem'
              }}>{item.quantity}</Typography>
              <Typography variant='body1'>{item.description}</Typography>
            </Grid>
            {index < stat.length - 1 && (
              <Grid item sx={{ display: { xs: 'none', sm: 'block' } }}>
                <Divider orientation="vertical" flexItem />
              </Grid>
            )}
          </React.Fragment>
        ))}
      </Grid>
    </Box>
  );
};

export default Statistics;
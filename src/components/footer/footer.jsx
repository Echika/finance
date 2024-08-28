import React from "react";
import { Box, Grid, Typography } from "@mui/material";
import { Link } from "react-router-dom";
const Footer = () => {
  const foots = [
    {
      id: 1,
      header: "Platform",
      childelements: [
        "Analytics",
        "Planning",
        "Collaboration",
        "Data Management",
        "Integrations",
        "Security",
      ],
    },
    {
      id: 2,
      header: "Resources",
      childelements: [
        "Customers",
        "Strategic Finance",
        "E-books & Guides",
        "Webinars & Events",
        "Podcasts & Videos",
      ],
    },
    {
      id: 3,
      header: "Solutions",
      childelements: [
        "Financial",
        "Investors & CEOs",
        "Revenue operatives",
        "Sales & Marketing",
        "Human Resources",
      ],
    },
  ];
  return (
    <Box sx={{
      margin: '50px 30px',

    }}>
      <Grid container spacing={4}>
        {foots.map((foot) => (
          <Grid item key={foot.id} sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
            <Typography variant="h6">{foot.header}</Typography>
            <Typography variant="body1" component="ul">
              {foot.childelements.map((element, index) => (
                <Box
                  component="li"
                  key={index}
                  sx={{
                    marginBottom: "10px",
                    listStyle: "none",
                    textDecoration: "none",
                  }}
                >
                  <Link
                    to={`/${foot.header.toLowerCase()}/${element
                      .toLowerCase()
                      .replace(/ /g, "-")}`}
                    variant="body1"
                    component="li"
                    key={index}
                    style={{
                      listStyle: "none",
                      color: "inherit",
                      cursor: "pointer",
                      textDecoration: 'none'
                    }}
                  >
                    {element}
                  </Link>
                </Box>
              ))}
            </Typography>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default Footer;

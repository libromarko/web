import React from "react";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import FeatureCard from "../FeatureCard";

export default function Feature() {
  return (
    <React.Fragment>
      <Box sx={{ bgcolor: "#9575cd" }}>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
          <path
            fill="#ffffff"
            fill-opacity="1"
            d="M0,96L30,106.7C60,117,120,139,180,133.3C240,128,300,96,360,69.3C420,43,480,21,540,26.7C600,32,660,64,720,64C780,64,840,32,900,69.3C960,107,1020,213,1080,256C1140,299,1200,277,1260,229.3C1320,181,1380,107,1410,69.3L1440,32L1440,0L1410,0C1380,0,1320,0,1260,0C1200,0,1140,0,1080,0C1020,0,960,0,900,0C840,0,780,0,720,0C660,0,600,0,540,0C480,0,420,0,360,0C300,0,240,0,180,0C120,0,60,0,30,0L0,0Z"
          ></path>
        </svg>
        <Container maxWidth="xl">
          <Grid
            container
            direction="row"
            justifyContent="flex-start"
            alignItems="center"
          >
            <FeatureCard />
          </Grid>
          <Grid
            container
            direction="row"
            justifyContent="center"
            alignItems="center"
          >
            <FeatureCard />
          </Grid>
          <Grid
            container
            direction="row"
            justifyContent="flex-end"
            alignItems="center"
          >
            <FeatureCard />
          </Grid>
        </Container>
      </Box>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
        <path
          fill="#9575cd"
          fill-opacity="1"
          d="M0,32L30,58.7C60,85,120,139,180,181.3C240,224,300,256,360,245.3C420,235,480,181,540,170.7C600,160,660,192,720,213.3C780,235,840,245,900,256C960,267,1020,277,1080,266.7C1140,256,1200,224,1260,213.3C1320,203,1380,213,1410,218.7L1440,224L1440,0L1410,0C1380,0,1320,0,1260,0C1200,0,1140,0,1080,0C1020,0,960,0,900,0C840,0,780,0,720,0C660,0,600,0,540,0C480,0,420,0,360,0C300,0,240,0,180,0C120,0,60,0,30,0L0,0Z"
        ></path>
      </svg>
    </React.Fragment>
  );
}

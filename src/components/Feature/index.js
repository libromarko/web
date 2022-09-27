import React from "react";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import FeatureCard from "../FeatureCard";

export default function Feature() {
  return (
    <Box sx={{ flexGrow: 1, mt: 10, mb: 10 }}>
      <Grid container spacing={2} justifyContent="center" alignItems="center">
        <FeatureCard />
      </Grid>
    </Box>
  );
}

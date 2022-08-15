import React from "react";
import { Grid, Typography } from "@mui/material";
import { Container } from "@mui/system";

export default function Landing() {
  return (
    <Container>
      <Grid container spacing={4}>
        <Grid item xs={4}>
          <Typography variant="h2" component="h2">
            Freedom for bookmarks.
          </Typography>
        </Grid>
        <Grid item xs={8}>
          <Typography variant="h1" component="h1">
            h1. Landing
          </Typography>
        </Grid>
      </Grid>
    </Container>
  );
}

import React from "react";
import { Grid, Container, Box } from "@mui/material";
import Group from "../../components/Group";

export default function Dashboard() {
  return (
    <Container maxWidth="xl" style={{ height: "100vh" }}>
      <Box sx={{ flexGrow: 1, mt: 10, mb: 10 }}>
        <Grid container spacing={2}>
          <Grid item xs={4}>
            <Group />
          </Grid>
          <Grid item xs={8}></Grid>
        </Grid>
      </Box>
    </Container>
  );
}

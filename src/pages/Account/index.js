import React from "react";
import { Typography, Container, Box } from "@mui/material";

export default function Account() {
  return (
    <Container maxWidth="xs">
      <Box
        sx={{
          marginTop: 8,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          height: "100vh",
        }}
      >
        <Typography variant="h1" component="h1">
          h1. Account
        </Typography>
      </Box>
    </Container>
  );
}

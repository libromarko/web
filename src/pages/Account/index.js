import React from "react";
import { Typography, Container, Box, Grid, Button } from "@mui/material";
import { useApi } from "../../hooks/useApi";
import { logout } from "../../store/services/auth.service";
import { useDispatch } from "react-redux";

export default function Account({ user }) {
  const { del } = useApi();
  const dispatch = useDispatch();

  const handleDeleteAccount = () => {
    del("user", user.id).then((response) => {
      if (response.id) {
        dispatch(logout());
      }
    });
  };

  return (
    <Container maxWidth="xl" style={{ height: "100vh" }}>
      <Box
        sx={{
          marginTop: 8,
          display: "flex",
          flexDirection: "column",
          height: "100vh",
        }}
      >
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <Typography variant="h2" component="h2">
              Account Settings
            </Typography>
          </Grid>
          <Grid item xs={12}>
            <Button
              variant="outlined"
              color="error"
              onClick={() => handleDeleteAccount()}
            >
              Delete Account
            </Button>
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
}

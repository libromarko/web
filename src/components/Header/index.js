import React from "react";
import { styled } from "@mui/material/styles";
import { Grid, Typography, Paper, Box } from "@mui/material";
import Typed from "react-typed";

const Item = styled(Paper)(({ theme }) => ({
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

const sequence = ["browser.", "mobile.", "anywhere."];

export default function Header() {
  return (
    <Box sx={{ flexGrow: 1, mt: 10, mb: 10 }}>
      <Grid container spacing={4}>
        <Grid item xs={12}>
          <Item elevation={0}>
            <Typography variant="h2" component="h2">
              Freedom for bookmarks.
            </Typography>
          </Item>
        </Grid>
        <Grid item xs={12}>
          <Item elevation={0}>
            <Typography variant="h3" component="h3">
              Access your bookmarks from{" "}
              <span style={{ backgroundColor: "#9575cd", color: "white" }}>
              &nbsp;
                <Typed
                  strings={sequence}
                  typeSpeed={100}
                  backSpeed={50}
                  smartBackspace={true}
                />
                &nbsp;
              </span>
            </Typography>
          </Item>
        </Grid>
      </Grid>
    </Box>
  );
}

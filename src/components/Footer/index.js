import React from "react";
import { Typography, Link, Grid } from "@mui/material";
import GitHubIcon from "@mui/icons-material/GitHub";

export default function Footer({ props }) {
  return (
    <Grid container style={{ backgroundColor: '#ede7f6' }}>
      <Grid item xs={4}>
        <Typography
          variant="h6"
          color="text.secondary"
          align="center"
          {...props}
        >
          {"No bullshit 💩"}
        </Typography>
      </Grid>
      <Grid item xs={4}>
        <Typography
          variant="h6"
          color="text.secondary"
          align="center"
          {...props}
        >
          <Link color="inherit" href="/">
            libromarko
          </Link>{" "}
          {new Date().getFullYear()}
        </Typography>
      </Grid>
      <Grid item xs={4}>
        <Typography
          variant="h6"
          color="text.secondary"
          align="center"
          {...props}
        >
          <Link
            color="inherit"
            href="https://github.com/libromarko"
            target={"_blank"}
          >
            <GitHubIcon />
          </Link>
        </Typography>
      </Grid>
    </Grid>
  );
}

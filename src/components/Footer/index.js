import React from "react";
import { Typography, Link, Grid, Box } from "@mui/material";
import GitHubIcon from "@mui/icons-material/GitHub";

export default function Footer({ props }) {
  return (
    <Box
      component="footer"
      sx={{
        py: 3,
        px: 2,
        mt: "auto",
        backgroundColor: "#ede7f6",
      }}
    >
      <Grid container>
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
            {" - v: "}
            {process.env.REACT_APP_VERSION}
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
    </Box>
  );
}

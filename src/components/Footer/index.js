import React from "react";
import { Typography, Link, Grid, Box } from "@mui/material";
import GitHubIcon from "@mui/icons-material/GitHub";
import MonitorHeartIcon from "@mui/icons-material/MonitorHeart";

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
            {" - "}
            <Link color="inherit" href="/privacy-policy">
              Privacy Policy
            </Link>
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
        <Grid xs={4} direction="row">
          <Typography
            variant="h6"
            color="text.secondary"
            align="center"
            {...props}
          >
            <Link
              color="inherit"
              href="https://github.com/libromarko"
              target="_blank"
            >
              <GitHubIcon />
            </Link>
          </Typography>
          <Typography
            variant="h6"
            color="text.secondary"
            align="center"
            {...props}
          >
            <Link
              color="inherit"
              href="https://doc.libromarko.xyz"
              target="_blank"
            >
              Documentation
            </Link>
          </Typography>
          <Typography
            variant="h6"
            color="text.secondary"
            align="center"
            {...props}
          >
            <Link
              color="inherit"
              href="https://doc.libromarko.xyz/blog"
              target="_blank"
            >
              Blog
            </Link>
          </Typography>
        </Grid>
      </Grid>
      <Grid
        container
        direction="row"
        justifyContent="center"
        alignItems="center"
      >
        <Typography
          variant="h6"
          color="text.secondary"
          align="center"
          {...props}
        >
          <Link
            color="inherit"
            href="https://status.libromarko.xyz/status/libromarko"
            target="_blank"
          >
            <div
              style={{
                display: "flex",
                alignItems: "center",
                flexWrap: "wrap",
              }}
            >
              <MonitorHeartIcon /> <span>{"Status"}</span>
            </div>
          </Link>
        </Typography>
      </Grid>
    </Box>
  );
}

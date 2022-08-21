import React from "react";
import { Typography, Link } from "@mui/material";
import GitHubIcon from "@mui/icons-material/GitHub";

export default function Footer({ props }) {
  return (
    <Typography variant="h6" color="text.secondary" align="center" {...props}>
      {"No bullshit 💩"}
      {" - "}
      <Link color="inherit" href="/">
        libromarko
      </Link>{" "}
      {new Date().getFullYear()}
      {" - "}
      <Link
        color="inherit"
        href="https://github.com/libromarko"
        target={"_blank"}
      >
        <GitHubIcon />
      </Link>{" "}
    </Typography>
  );
}

import React from "react";
import { styled } from "@mui/material/styles";
import { Grid, Typography, Paper, Box } from "@mui/material";
import Button from "@mui/material/Button";
import Typed from "react-typed";
import { useNavigate } from "react-router-dom";
import landingImage from "./absurd-design-Chapter1-33.png";

const Item = styled(Paper)(({ theme }) => ({
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

const sequence = ["browser.", "mobile.", "anywhere."];

export default function Header() {
  let navigate = useNavigate();

  return (
    <Box sx={{ flexGrow: 1, mt: 10, mb: 10 }}>
      <Grid container spacing={1} alignItems="center">
        <Grid item xs>
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
              </Typography>
            </Item>
          </Grid>
          <Grid item xs={12}>
            <Item elevation={0}>
              <Typography variant="h3" component="h3">
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
          <Grid item xs={12} mt={5}>
            <Item elevation={0}>
              <Button
                variant="contained"
                size="large"
                onClick={() => navigate("/signup", { replace: true })}
              >
                Sign Up
              </Button>
            </Item>
          </Grid>
        </Grid>
        <Grid item xs>
          <img src={landingImage} alt="libromarko" width={750} />
        </Grid>
      </Grid>
    </Box>
  );
}

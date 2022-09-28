import * as React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import devicesImage from "./undraw_devices_re_dxae.svg";

export default function FeatureCard() {
  return (
    <Card sx={{ display: "flex" }}>
      <Box sx={{ display: "flex", flexDirection: "column" }}>
        <CardContent sx={{ flex: "1 0 auto", width: 300 }}>
          <Typography component="div" variant="h5">
            Using multiple devices and multiple browsers?
          </Typography>
          <Typography
            variant="subtitle1"
            color="text.secondary"
            component="div"
          >
            Mac Miller
          </Typography>
        </CardContent>
        <Box sx={{ display: "flex", pl: 1, pb: 1 }}>
          <Button size="small" color="primary">
            Learn more
          </Button>
        </Box>
      </Box>
      <CardMedia
        component="img"
        sx={{ width: "100%", height: 350 }}
        image={devicesImage}
        alt="Live from space album cover"
      />
    </Card>
  );
}

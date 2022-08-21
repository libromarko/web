import React from "react";
import { Grid, Box, Link } from "@mui/material";

const stores = [
  {
    name: "Chrome Web Store",
    href: "#",
    imagePath: "/stores/webstore-chrome.png",
  },
  {
    name: "Play Store",
    href: "#",
    imagePath: "/stores/google-play.svg",
  },
  {
    name: "Firefox Add-ons",
    href: "#",
    imagePath: "/stores/webstore-firefox.svg",
  },
];

export default function Stores() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={4}>
        {stores.map((store) => (
          <Grid item xs={4}>
            <Link href={store.href}>
              <img
                width={340}
                height={96}
                src={store.imagePath}
                alt={store.name}
                loading="lazy"
              />
            </Link>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}

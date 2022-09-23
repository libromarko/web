import React from "react";
import { Grid, Box, Link } from "@mui/material";

const stores = [
  {
    name: "Chrome Web Store",
    href: "https://chrome.google.com/webstore/detail/libromarko/jpbjepefiibjgekgaloekkfbjciigcfg",
    imagePath: "/stores/webstore-chrome.png",
  },
  {
    name: "Play Store",
    href: "https://play.google.com/store/apps/details?id=xyz.libromarko.app",
    imagePath: "/stores/google-play.svg",
  },
  {
    name: "Firefox Add-ons",
    href: "https://addons.mozilla.org/en-US/firefox/addon/libromarko/",
    imagePath: "/stores/webstore-firefox.svg",
  },
];

export default function Stores() {
  return (
    <Box sx={{ flexGrow: 1 }} alignItems="center" justifyContent="center">
      <Grid container spacing={2}>
        {stores.map((store, i) => (
          <Grid
            key={i}
            item
            md={12 / stores.length}
            style={{ textAlign: "center" }}
          >
            <Link href={store.href} target="_blank">
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

import * as React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import Link from "@mui/material/Link";
import EmailSubscribe from "../EmailSubscribe";

export default function FeatureCard({ cardItem }) {
  return (
    <Grid
      container
      direction="row"
      justifyContent={cardItem.grid}
      alignItems="center"
      sx={{ mb: 10 }}
      key={cardItem.id}
    >
      <Card sx={{ display: "flex", backgroundColor: "#EDE7F6" }} elevation={3}>
        <Box sx={{ display: "flex", flexDirection: "column" }}>
          <CardContent sx={{ flex: "1 0 auto", maxWidth: 300 }}>
            <Typography component="div" variant="h5">
              {cardItem.title}
            </Typography>
            <Typography variant="h6" color="text.secondary" component="div">
              {cardItem.description}
            </Typography>
          </CardContent>
          <Box sx={{ display: "flex", pl: 1, pb: 1, pt: 5 }}>
            <Link
              size="small"
              underline="none"
              color="primary"
              href={cardItem.learnMore}
              target="_blank"
            >
              Learn more
            </Link>
          </Box>
        </Box>
        <CardMedia
          component="img"
          sx={{ Width: "100%", height: 350, padding: 3, objectFit: 'fill' }}
          image={cardItem.img}
          alt={cardItem.title}
        />
      </Card>
      {cardItem.id === 3 && <EmailSubscribe />}
    </Grid>
  );
}

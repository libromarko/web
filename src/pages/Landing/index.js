import React from "react";
import { Container, Box } from "@mui/system";
import Divider from "@mui/material/Divider";
import Typography from "@mui/material/Typography";
import HeaderComponent from "../../components/Header";
import StoresComponent from "../../components/Stores";
import FeaturedPost from "../../components/FeaturedPost";

const featuredPost = {
  title: "libromarko Is Now Available As Alpha Release",
  description:
    "We couldn't take it anymore and we are here with our first working version.",
  image:
    "https://images.unsplash.com/photo-1636819488524-1f019c4e1c44?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1632&q=80",
  imageText: "main image description",
  linkText: "Continue reading…",
};

export default function Landing() {
  return (
    <Container maxWidth={"xl"}>
      <Box sx={{ minHeight: "100vh" }}>
        <HeaderComponent />
        <StoresComponent />
        <Typography variant="h6" gutterBottom style={{ marginTop: 50 }}>
          Featured Post
        </Typography>
        <Divider />
        <FeaturedPost post={featuredPost} />
      </Box>
    </Container>
  );
}

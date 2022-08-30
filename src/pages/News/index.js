import React from "react";
import { Container, Box } from "@mui/system";
import Posts from "../../components/Markdown/Posts";
import posts from "../../posts";

export default function News() {
  return (
    <Container maxWidth={"xl"}>
      <Box sx={{ minHeight: '100vh', mt: 5 }}>
        <Posts title="News" posts={posts} />
      </Box>
    </Container>
  );
}

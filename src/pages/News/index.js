import React from "react";
import { Container, Box } from "@mui/system";
import Posts from "../../components/Markdown/Posts";

import alpharelase from "../../posts/alpha-release.md.js";

const posts = [alpharelase];

export default function News() {
  console.log("Posts", posts);
  return (
    <Container maxWidth={"xl"}>
      <Box sx={{ height: "100vh", mt: 5}}>
        <Posts title="News" posts={posts} />
      </Box>
    </Container>
  );
}

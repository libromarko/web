import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Container, Box } from "@mui/system";
import Posts from "../../components/Markdown/Posts";
import posts from "../../posts";

export default function NewsItem() {
  let params = useParams();
  let navigate = useNavigate();

  const [post, setPost] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (params.newsId) {
      const post = posts.find((post) => post.id === params.newsId);
      if (post) {
        setPost(post);
        setIsLoading(false);
      } else {
        navigate("/news", { replace: true });
      }
    }
  }, [params.newsId]);

  return (
    <Container maxWidth={"xl"}>
      <Box sx={{ minHeight: "100vh", mt: 5 }}>
        {!isLoading && <Posts title="News" posts={[post]} />}
      </Box>
    </Container>
  );
}

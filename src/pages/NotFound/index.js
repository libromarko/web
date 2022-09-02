import React from "react";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import notFoundImage from "./undraw_Page_not_found_re_e9o6.png";

export default function NotFound() {
  return (
    <Container component="main" maxWidth="xs" style={{ minHeight: '100vh'}}>
      <Box
        sx={{
          marginTop: 8,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <img src={notFoundImage} alt="Not Found" />
      </Box>
    </Container>
  );
}

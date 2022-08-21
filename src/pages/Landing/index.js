import React from "react";
import { Container, Box } from "@mui/system";
import HeaderComponent from "../../components/Header";
import StoresComponent from "../../components/Stores";

export default function Landing() {
  return (
    <Container maxWidth={"xl"}>
      <Box sx={{ height: "100vh" }}>
        <HeaderComponent />
        <StoresComponent />
      </Box>
    </Container>
  );
}

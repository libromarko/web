import React from "react";
import { Container, Box } from "@mui/system";
import HeaderComponent from "../../components/Header";
import StoresComponent from "../../components/Stores";
import Feature from "../../components/Feature";

export default function Landing() {
  return (
    <Box sx={{ minHeight: "100vh" }}>
      <Container maxWidth={"xl"}>
        <HeaderComponent />
        <StoresComponent />
      </Container>
      <Feature />
    </Box>
  );
}

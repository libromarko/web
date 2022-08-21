import React from "react";
import { Container } from "@mui/system";
import HeaderComponent from "../../components/Header";
import StoresComponent from "../../components/Stores";

export default function Landing() {
  return (
    <Container style={{ height: '100vh'}}>
      <HeaderComponent />
      <StoresComponent />
    </Container>
  );
}

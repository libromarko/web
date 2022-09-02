import React, { useState, useEffect } from "react";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import { useParams, useNavigate } from "react-router-dom";
import { useApi } from "../../hooks/useApi";
import emailImage from "./undraw_Mail_sent_re_0ofv.png";

export default function Activation() {
  let params = useParams();
  let navigate = useNavigate();
  const { get } = useApi();

  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    get("activation", params.id).then((response) => {
      if (!response.id) {
        navigate("/not-found", { replace: true });
      }
      setIsLoading(false);
    });
  }, []);

  return (
    <Container component="main" maxWidth="xs" style={{ minHeight: "100vh" }}>
      {!isLoading && (
        <Box
          sx={{
            marginTop: 8,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <img src={emailImage} alt="Email Activation" />
          <Typography component="h6" variant="h6">
            Email activation successful!
          </Typography>
        </Box>
      )}
    </Container>
  );
}

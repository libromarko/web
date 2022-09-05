import React from "react";
import Alert from "@mui/material/Alert";
import AlertTitle from "@mui/material/AlertTitle";

export default function SignupSuccessAlert() {
  return (
    <Alert severity="success" style={{ marginTop: 10 }}>
      <AlertTitle>Success</AlertTitle>
      Your registration has been successfully created. And an activation e-mail
      has been sent to your e-mail address.
      <strong>You can log in now.</strong>
    </Alert>
  );
}

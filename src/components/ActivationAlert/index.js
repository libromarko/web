import React from "react";
import Alert from "@mui/material/Alert";
import AlertTitle from "@mui/material/AlertTitle";

export default function ActivationAlert() {
  return (
    <Alert severity="warning" style={{ marginTop: 10 }}>
      <AlertTitle>Warning</AlertTitle>
      If you cannot perform the <strong>email activation</strong>, your account{" "}
      <strong>will be deleted 7 days</strong> after your registration.
    </Alert>
  );
}

import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Alert from "@mui/material/Alert";
import { useApi } from "../../hooks/useApi";
import "./email.css";

export default function EmailSubscribe() {
  const { post } = useApi();

  const [firstName, setFirstName] = useState("");
  const [email, setEmail] = useState("");
  const [alert, setAlert] = useState({ content: null, message: "message" });

  const handleSubmit = () => {
    const data = {
      name: firstName,
      email: email,
    };

    post("mail/subscription", data).then((response) => {
      const { statusCode } = response;

      if (statusCode === 400 || statusCode === 403) {
        setAlert({
          content: "error",
          message: statusCode === 400 ? response.message[0] : response.message,
        });
      } else if (statusCode === 500 || statusCode === 404) {
        setAlert({
          content: "error",
          message: "An error was encountered during the operation.",
        });
      } else {
        setFirstName("");
        setEmail("");
        setAlert({
          content: "success",
          message: "Your mail subscription has been started.",
        });
      }
    });
  };

  return (
    <Card sx={{ maxWidth: 345, m: 1 }} className="email">
      <CardContent>
        <Typography
          textAlign="center"
          gutterBottom
          variant="h5"
          component="div"
        >
          Join the newsletter!
        </Typography>
        <Typography textAlign="center" variant="body2" color="text.secondary">
          Subscribe to get latest content by email.
        </Typography>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignContent: "center",
          }}
        >
          <TextField
            sx={{ mt: 1 }}
            id="outlined-basic"
            label="First Name"
            variant="outlined"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
          />
          <TextField
            sx={{ mt: 1, mb: 1 }}
            id="outlined-basic"
            label="Email"
            type="email"
            variant="outlined"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        {alert.content && (
          <Alert
            onClose={() => setAlert({ content: null, message: null })}
            severity={alert.content}
          >
            {alert.message}
          </Alert>
        )}
        <CardActions className="cardAction">
          <Button
            disabled={!email || !firstName}
            onClick={() => handleSubmit()}
            variant="contained"
          >
            Subscribe
          </Button>
        </CardActions>
        <Typography variant="body2" color="text.secondary">
          We will send you an email only when new content is posted. Unsubscribe
          at any time.
        </Typography>
      </CardContent>
    </Card>
  );
}

import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import "./email.css";

export default function EmailSubscribe() {
  const [firstName, setFirstName] = useState("");
  const [email, setEmail] = useState("");

  const handleSubmit = () => {
    console.log(firstName, email);
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
          Subscirbe to get latest content by email.
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
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <TextField
            sx={{ mt: 1, mb: 1 }}
            id="outlined-basic"
            label="Email"
            variant="outlined"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
          />
        </div>
        <Typography variant="body2" color="text.secondary">
          We will send you an email only when new contents is posted.
          Unsubscribe at any time.
        </Typography>
      </CardContent>
      <CardActions className="cardAction">
        <Button disabled={!email && !firstName} onClick={() => handleSubmit()} size="small">
          Subscribe
        </Button>
      </CardActions>
    </Card>
  );
}

import React, { useState } from "react";
import { Container, Typography, Box, Button } from "@mui/material";
import RoundedTextField from "../components/RoundedTextField";
import RoundedButton from "../components/RoundedButton";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    // Implement your login logic here
    console.log("Login with:", email, password);
  };

  return (
    <Container>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          justifyItems: "center",
          height: "100vh",
        }}
      >
        <Typography
          component="h1"
          variant="h5"
          sx={{ typography: { sm: "h2", xs: "h3" } }}
        >
          Sign in
        </Typography>
        <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 6 }}>
          <RoundedTextField
            required
            id="email"
            label="Email Address"
            name="email"
            autoComplete="email"
            autoFocus
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <RoundedTextField
            required
            name="password"
            label="Password"
            type="password"
            id="password"
            autoComplete="current-password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <Button
            variant="text"
            sx={{ mb: 2 }}
            onClick={() => {
              console.log("Forgot Password Clicked");
            }}
          >
            Forgot Password?
          </Button>

          <RoundedButton
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 6, mb: 2 }}
          >
            Sign in
          </RoundedButton>
        </Box>
      </Box>
    </Container>
  );
}

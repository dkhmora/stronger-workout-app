import React, { useState } from "react";
import { Container, Typography, Box, Button } from "@mui/material";
import RoundedTextField from "../components/RoundedTextField";
import RoundedButton from "../components/RoundedButton";
import { useMutation } from "@apollo/client";
import { LOGIN_USER } from "../graphql/mutations";
import { useDispatch } from "react-redux";
import { SET_USER_DETAILS, SET_USER_TOKEN } from "../store/general";
import { useNavigate } from "react-router-dom";

export default function LoginPage() {
  const [mutateFunction, { data, loading, error }] = useMutation(LOGIN_USER);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    mutateFunction({ variables: { email, password } })
      .then((res) => {
        dispatch(SET_USER_DETAILS(res.data.loginUser.user));
        dispatch(SET_USER_TOKEN(res.data.loginUser.token));
      })
      .then(() => {
        navigate("/profile");
      })
      .catch((e) => {
        console.error(e);
      });
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

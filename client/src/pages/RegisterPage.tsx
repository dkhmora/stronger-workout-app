import React, { useState } from "react";
import { Container, Typography, Box } from "@mui/material";
import RoundedTextField from "../components/RoundedTextField";
import RoundedButton from "../components/RoundedButton";

export default function RegistrationPage() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    birthDate: "",
    bodyWeight: "",
    height: "",
    password: "",
    confirmPassword: "",
  });

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setForm((prevForm) => ({
      ...prevForm,
      [name]: value,
    }));
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    // Implement your registration logic here
    console.log("Register with:", form);
    // Make sure to include validation, e.g., matching passwords, valid email, etc.
  };

  return (
    <Container maxWidth="sm">
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
          Sign Up
        </Typography>
        <Box
          component="form"
          onSubmit={handleSubmit}
          noValidate
          sx={{ mt: 6, width: "100%" }}
        >
          {/* Adjusted each field to use form state and handleChange */}
          <RoundedTextField
            required
            id="name"
            label="Name"
            name="name"
            autoComplete="name"
            value={form.name}
            onChange={handleChange}
            fullWidth
          />
          <RoundedTextField
            required
            id="email"
            label="Email Address"
            name="email"
            autoComplete="email"
            value={form.email}
            onChange={handleChange}
            fullWidth
          />
          <RoundedTextField
            required
            id="birthDate"
            label="Birth Date"
            name="birthDate"
            type="date"
            autoComplete="bday"
            InputLabelProps={{ shrink: true }}
            value={form.birthDate}
            onChange={handleChange}
            fullWidth
          />
          <RoundedTextField
            required
            id="bodyWeight"
            label="Body Weight (kg)"
            name="bodyWeight"
            type="number"
            autoComplete="off"
            value={form.bodyWeight}
            onChange={handleChange}
            fullWidth
          />
          <RoundedTextField
            required
            id="height"
            label="Height (cm)"
            name="height"
            type="number"
            autoComplete="off"
            value={form.height}
            onChange={handleChange}
            fullWidth
          />
          <RoundedTextField
            required
            name="password"
            label="Password"
            type="password"
            id="password"
            autoComplete="new-password"
            value={form.password}
            onChange={handleChange}
            fullWidth
          />
          <RoundedTextField
            required
            name="confirmPassword"
            label="Confirm Password"
            type="password"
            id="confirmPassword"
            autoComplete="new-password"
            value={form.confirmPassword}
            onChange={handleChange}
            fullWidth
          />

          <RoundedButton
            type="submit"
            variant="contained"
            sx={{ mt: 6, mb: 2 }}
            fullWidth
          >
            Sign Up
          </RoundedButton>
        </Box>
      </Box>
    </Container>
  );
}

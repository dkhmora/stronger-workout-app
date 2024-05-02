import React from "react";
import TextField, { TextFieldProps } from "@mui/material/TextField";

export default function RoundedTextField(
  RoundedTextFieldProps: TextFieldProps
) {
  return (
    <TextField
      variant="outlined"
      margin="normal"
      fullWidth
      sx={{
        "& .MuiOutlinedInput-root": {
          borderRadius: "30px",
        },
      }}
      {...RoundedTextFieldProps}
    />
  );
}

import React from "react";
import Button, { ButtonProps } from "@mui/material/Button";
import { styled } from "@mui/material/styles";

const StyledRoundedButton = styled(Button)({
  borderRadius: "50px",
  padding: "12px 24px",
});

export default function RoundedButton(RoundedButtonProps: ButtonProps) {
  const { children, ...restRoundedButtonProps } = RoundedButtonProps;
  return (
    <StyledRoundedButton
      variant="contained"
      color="primary"
      {...restRoundedButtonProps}
    >
      {children}
    </StyledRoundedButton>
  );
}

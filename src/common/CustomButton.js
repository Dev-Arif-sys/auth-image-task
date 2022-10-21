import { Button } from "@mui/material";
import React from "react";
import { COLORS } from "../theme";

const CustomButton = ({ text, type, onClick,disabled }) => {
    
  return (
    <Button
      onClick={onClick}
      type={type}
      variant="contained"
      fullWidth
      disableElevation
      disabled={disabled}
      sx={{
        padding: "10px ",
        backgroundColor: COLORS.action,
        "&:hover": {
          background: COLORS.primary,
        },
      }}
    >
      {text}
    </Button>
  );
};

export default CustomButton;

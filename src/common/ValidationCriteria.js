import { Box, Typography } from "@mui/material";
import React from "react";
import { COLORS } from "../theme";

const ValidationCriteria = ({ type }) => {
  if (type === "email") {
    return (
      <Typography
        variant="span"
        sx={{
          fontSize: "14px",
          
        }}
        color='error'
      >
        Please, provide a valid email address.
      </Typography>
    );
  }
  return (
    <Box
      sx={{
        fontSize: "14px",
        border:`2px solid ${COLORS.secondary}`,
        mt:1,
        borderRadius:"10px",
        padding:"5px 10px",
        color:COLORS.black
      }}
    >
      <Typography
        sx={{
          fontSize: "14px",
          color:COLORS.black
        }}
      >
        Your password must
      </Typography>
      <ul>
        <li>
          Contain at least{" "}
          <span style={{ fontWeight: "bold" }}>8 characters</span>
        </li>

        <li>Contain one uppercase letter, one lowercase letter</li>
        <li>Contain one number and one special character</li>
      </ul>
    </Box>
  );
};

export default ValidationCriteria;

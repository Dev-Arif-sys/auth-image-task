import { InputAdornment, TextField } from "@mui/material";
import React from "react";

const CustomTextField = ({ placeholder, name, onChange, value, type,endIcon }) => {
  return (
    <TextField
      sx={{
        width: "100%",
        md:1
      }}
      value={value}
      placeholder={placeholder}
      variant="outlined"
      onChange={onChange}
      type={type}
      name={name}
      InputProps={{
        endAdornment: <InputAdornment position="end">{endIcon}</InputAdornment>,
      }}
     
    />
  );
};

export default CustomTextField;

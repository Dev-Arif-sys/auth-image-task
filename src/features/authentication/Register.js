import DoneIcon from "@mui/icons-material/Done";
import ErrorOutlineIcon from "@mui/icons-material/ErrorOutline";
import { Box, Typography } from "@mui/material";
import React, { useState } from "react";
import AuthPaper from "../../common/AuthPaper";
import CustomButton from "../../common/CustomButton";
import CustomTextField from "../../common/CustomTextField";
import ValidationCriteria from "../../common/ValidationCriteria";
import { COLORS } from "../../theme";
import { formValidation } from "../../Utlis/helpers";
import {Link,useNavigate} from 'react-router-dom'
import {useDispatch,useSelector} from "react-redux"
import { userRegister } from "./authSlice";

const Register = () => {
  
  const [userInfo, setUserInfo] = useState({
    name: "",
    email: "",
    password: "",
  });
  const [validation, setValidation] = useState({
    email: false,
    password: false,
  });
  const navigate=useNavigate()
  const dispatch=useDispatch()

  const ChangeInputHandler = (e) => {
    const { name, value } = e.target;
    setUserInfo((prev) => ({
      ...prev,
      [name]: value,
    }));

    setValidation((prev) => ({
      ...prev,
      [name]: formValidation(name, value),
    }));
  };

  const handleSubmitForm=(e)=>{
   e.preventDefault()
     dispatch(userRegister(userInfo))
     navigate('/home')
  }

  const canSubmit= Boolean(validation.email) && Boolean(validation.password) && Boolean(userInfo.name)

  return (
    <AuthPaper>
      <Typography
        variant="h5"
        sx={{
          fontWeight: "bold",
          color: COLORS.black,
          mb: 3,
          textAlign: "center",
        }}
      >
        Account Register
      </Typography>
      <form onSubmit={handleSubmitForm}>
        <Box sx={{ mb: 2 }}>
          <CustomTextField
            placeholder="name"
            type={"text"}
            onChange={ChangeInputHandler}
            name="name"
            value={userInfo.name}
            endIcon={userInfo.name && <DoneIcon />}
          />
        </Box>
        <Box sx={{ mb: 2 }}>
          <CustomTextField
            placeholder="email"
            type={"text"}
            onChange={ChangeInputHandler}
            name="email"
            value={userInfo.email}
            endIcon={
              userInfo.email &&
              ( !validation.email ? <ErrorOutlineIcon /> : <DoneIcon />)
            }
          />
          {userInfo.email && !validation.email  && <ValidationCriteria type={"email"} />}
        </Box>
        <Box sx={{ mb: 2 }}>
          <CustomTextField
            placeholder="password"
            type={"password"}
            onChange={ChangeInputHandler}
            name="password"
            value={userInfo.password}
            endIcon={
              userInfo.password &&
              (!validation.password ? <ErrorOutlineIcon /> : <DoneIcon />)
            }
          />
          {userInfo.password && !validation.password && <ValidationCriteria type={"password"} />}
        </Box>
        <br />
        <CustomButton type={"submit"} text={"Signup"} disabled={!canSubmit} />
      </form>

      <Box>
      <Typography fontSize={'14px'}
      color={COLORS.black}
      sx={{
        textAlign:"center",
        mt:3
      }}
      > Already a member ? <Link to={'/account/login'} style={{textDecoration:"none"}}>Log In</Link>  </Typography> 
      </Box>
    </AuthPaper>
  );
};

export default Register;

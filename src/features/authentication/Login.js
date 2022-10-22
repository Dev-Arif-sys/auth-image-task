import DoneIcon from "@mui/icons-material/Done";
import { Box, Typography } from "@mui/material";
import { default as React, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import AuthPaper from "../../common/AuthPaper";
import CustomButton from "../../common/CustomButton";
import CustomTextField from "../../common/CustomTextField";
import { COLORS } from "../../theme";
import { selectAuthState, userLogin } from "./authSlice";

const Login = () => {
  const navigate=useNavigate()
  const dispatch=useDispatch()
  const {loginError,loggedUser}=useSelector(selectAuthState)
  const [userInfo, setUserInfo] = useState({
    email: "",
    password: "",
  });

  const [validation, setValidation] = useState({
    email: true,
    password: true,
  });

  const ChangeInputHandler = (e) => {
    const { name, value } = e.target;

    setUserInfo((prev) => ({
      ...prev,
      [name]: value,
    }));

    setValidation((prev) => ({
      ...prev,
      [name]: value ? true : false,
    }));
  };

  const handleSubmitForm =  (e) => {
    e.preventDefault();
    if (!userInfo.email && !userInfo.password) {
      setValidation({
        email: userInfo.email ? true : false,
        password: userInfo.password ? true : false,
      });
      return;
    }

     dispatch(userLogin(userInfo))
     


    

    
   
  }

  useEffect(()=>{
    if(loggedUser.email){
      navigate('/home')
    }
    
  },[loggedUser])

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
        Account Login
      </Typography>
      <form onSubmit={handleSubmitForm}>
        <Box sx={{ mb: 2 }}>
          <CustomTextField
            placeholder="email"
            type={"email"}
            onChange={ChangeInputHandler}
            name="email"
            value={userInfo.email}
            endIcon={userInfo.email && <DoneIcon />}
          />
          {!validation.email && (
            <Typography variant="span" color="error" fontSize={"14px"}>
              Email is required.
            </Typography>
          )}
        </Box>

        <Box sx={{ mb: 2 }}>
          <CustomTextField
            placeholder="password"
            type={"password"}
            onChange={ChangeInputHandler}
            name="password"
            value={userInfo.password}
            endIcon={userInfo.password && <DoneIcon />}
          />

          {!validation.password && (
            <Typography variant="span" color="error" fontSize={"14px"}>
              No password provided
            </Typography>
          )}

{
          loginError && <Box sx={{
            fontSize: "14px",
        borderRadius:"2px",
        padding:"5px 10px",
        
        mt:1

          }}>
            <Typography variant="span" color="error" fontSize={"14px"} >{loginError}</Typography>
          </Box>
        }
        </Box>

       

        <CustomButton type={"submit"} text={"Login"} disabled={false} />
      </form>
      <Box>
        <Typography fontSize={"14px"}
          color={COLORS.black}
          sx={{
            textAlign: "center",
            mt: 3,
          }}
        > Are you new ?
          <Link to={"/account/register"} style={{ textDecoration: "none" }}>
            Sign Up
          </Link>{" "}
        </Typography>
      </Box>
    </AuthPaper>
  );
};

export default Login;

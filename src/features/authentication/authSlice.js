import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = {
  registeredUser: [
    {
      id: 0,
      name: "Ariful Islam",
      email: "test@gmail.com",
      password: "Test@123",
    },
  ],
  loggedUser: {},
  loginError: "",
};

export const authSlice = createSlice({
  name: "authentication",
  initialState,
  reducers: {
    userRegister: {
      reducer: (state, action) => {
        state.registeredUser.push(action.payload);
        state.loggedUser = action.payload;
      },
      prepare: (userInfo) => {
        return {
          payload: {
            id: nanoid(),
            ...userInfo,
          },
        };
      },
    },
    userLogin: {
      reducer: (state, action) => {
        const { email, password } = action.payload;
        const existingUser = state.registeredUser.find(
          (user) => user.email === email && user.password === password
        );
        if (!existingUser) {
          state.loginError = "Incorrect email address or password";
          return;
        }
        state.loggedUser = existingUser;
        state.loginError = "";
      },
    },
  },
});

export const selectAuthState = (state) => state.auth;

export const { userLogin, userRegister } = authSlice.actions;

export default authSlice.reducer;

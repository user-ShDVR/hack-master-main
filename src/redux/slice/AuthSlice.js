import {createSlice } from "@reduxjs/toolkit";

const initialState = {
  id: null,
  user: null,
  token: null,
  role: null,
  surname: null,
  name: null,
  middleName: null,
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setCredentials: (state, action) => {
      const { login, jwtToken, role, userId } = action.payload;
      state.user = login;
      state.token = jwtToken;
      state.role = role;
      state.id = userId;
    },
    logOut: (state) => {
      state.role = null;
      state.id = null;
      state.user = null;
      state.token = null;
      state.name = null;
      state.middleName = null;
      state.surname = null;
      state.avatar = null;
    },
    additionalInfo: (state, action) =>{
      const { name, surname, middleName, avatar } = action.payload;
      state.name = name;
      state.middleName = middleName;
      state.surname = surname;
      state.avatar = avatar;
    }
  },
});

// Action creators are generated for each case reducer function
export const { setCredentials, logOut, additionalInfo } = authSlice.actions;

export default authSlice.reducer;



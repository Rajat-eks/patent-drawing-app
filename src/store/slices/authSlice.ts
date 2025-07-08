import { createSlice } from "@reduxjs/toolkit";

interface AUTH {
  name?: string;
  email?: string;
}

const initialState: AUTH = {
  name: "Rajat Verma",
  email: "rajat@gmail.com",
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setName: (state, action) => {
      state.name = action.payload;
    },
    setEmail: (state, action) => {
      state.email = action.payload;
    },
    clearAuth: (state) => {
      state.name = "";
      state.email = "";
    },
  },
});

export const { setName, setEmail, clearAuth } = authSlice.actions;
export default authSlice.reducer;

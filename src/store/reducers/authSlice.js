import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const authSlice = createSlice({
  name: "authSlice",
  initialState: {},
  reducers: {
    setAuth: (state, action) => {
      return action.payload;
    },
    logout: (state, action) => {
      localStorage.removeItem("token");
      return {};
    },
    setErrorMsg: (state, action) => {
      state.errorMsg = action.payload;
      return state;
    },
  },
});

export default authSlice.reducer;
export const { setAuth, logout, setErrorMsg } = authSlice.actions;

//thunks go here//

export const fetchAuthAccount = () => async (dispatch) => {
  try {
    const token = window.localStorage.getItem("token");
    if (token) {
      const res = await axios.get("/api/auth", {
        headers: {
          authorization: token,
        },
      });
      dispatch(setAuth(res.data));
    }
  } catch (error) {
    console.log("FETCH AUTH ACCT ERROR", error);
  }
};

export const attemptLogin = (authInfo) => async (dispatch) => {
  try {
    const res = await axios.post("/auth/login", authInfo);
    window.localStorage.setItem("token", res.data);
    dispatch(fetchAuthAccount());
  } catch (error) {
    console.log("ATTEMPT LOGIN ERROR", error);
  }
};

export const createAuthAccount = (authInfo) => async (dispatch) => {
  try {
    const res = await axios.post("/auth/signup", authInfo);
    window.localStorage.setItem("token".res.data.token);
    dispatch(setAuth(res.data));
  } catch (error) {
    console.log("CREATE AUTH ACCT ERROR", error);
  }
};

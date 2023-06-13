import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { logout } from "./authSlice";

const userSlice = createSlice({
  name: "userSlice",
  initialState: {
    userList: [],
    userData: {},
  },
  reducers: {
    getUserList: (state, action) => {
      return action.payload;
    },
    getUserData: (state, action) => {
      return action.payload;
    },
    _deleteUser: (state, action) => {
      state.userList = state.userList.filter(
        (user) => user.id !== action.payload.id
      );
      return state;
    },
    setErrorMsg: (state, action) => {
      return action.payload;
    },
  },
});

export default userSlice.reducer;
export const { getUserList, getUserData, _deleteUser, setErrorMsg } =
  userSlice.actions;

//thunks go here//
export const fetchUserList = () => {
  return async (dispatch) => {
    try {
      const { data } = await axios.get("/api/users");
      dispatch(getUserList(data));
    } catch (error) {
      console.log("FETCH ACCOUNTS ERROR", error);
    }
  };
};

export const fetchUserData = (userId) => async (dispatch) => {
  try {
    const token = window.localStorage.getItem("token");
    const { data } = await axios.get(`/api/users/${userId}`, {
      headers: {
        authorization: token,
      },
    });
    dispatch(getUserData(data));
  } catch (error) {
    console.log("FETCH ACCOUNT DATA ERROR", error);
  }
};

export const updateUserData = (userInfo, userId) => async (dispatch) => {
  try {
    const { data } = await axios.put(`/api/users/${userId}`, userInfo, userId);
    dispatch(getUserData(data));
  } catch (error) {
    console.log("UPDATE ACCOUNT ERROR", error);
  }
};

export const deleteUserData = (userId) => async (dispatch) => {
  try {
    const { data } = await axios.delete(`/api/users/${userId}`);
    dispatch(_deleteUser(data));
    dispatch(logout());
  } catch (error) {
    console.log("DELETE ACCOUNT DATA ERROR", error);
  }
};

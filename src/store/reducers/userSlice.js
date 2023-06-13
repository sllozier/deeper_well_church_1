import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { logout } from "./authSlice";

const userSlice = createSlice({
  name: "userSlice",
  initialState: {
    userList: [],
    userData: {},
    commentList: [],
    commentData: {},
  },
  reducers: {
    getUserList: (state, action) => {
      state.userList = action.payload;
      return state;
    },
    getUserData: (state, action) => {
      state.userData = action.payload;
      return state;
    },
    _deleteUser: (state, action) => {
      state.userList = state.userList.filter(
        (user) => user.id !== action.payload.id
      );
      return state;
    },
    getCommentList: (state, action) => {
      state.commentList = action.payload;
      return state;
    },
    getCommentData: (state, action) => {
      state.stateData = action.payload;
      return state;
    },
    _addComment: (state, action) => {
      state.commentList.push(action.payload);
      return state;
    },
    _deleteComment: (state, action) => {
      state.commentList = state.commentList.filter(
        (comment) => comment.id !== action.payload.id
      );
      return state;
    },
    setErrorMsg: (state, action) => {
      return action.payload;
    },
  },
});

export default userSlice.reducer;
export const {
  getUserList,
  getUserData,
  getCommentList,
  getCommentData,
  _addComment,
  _deleteComment,
  _deleteUser,
  setErrorMsg,
} = userSlice.actions;

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

//comments

export const fetchCommentList = (userId) => async (dispatch) => {
  try {
    const { data } = await axios.get(`/api/users/${userId}/comments`, {});
    dispatch(getCommentList(data));
  } catch (error) {
    console.log("", error);
  }
};

export const fetchCommentData = (userId, commentId) => async (dispatch) => {
  try {
    const { data } = await axios.get(
      `/api/users/${userId}/comments/${commentId}`,
      userId,
      commentId
    );
    dispatch(getCommentData(data));
  } catch (error) {
    console.log("", error);
  }
};

export const addComment = (newComment, userId) => async (dispatch) => {
  try {
    const { data } = await axios.post(
      `/api/users/${userId}/comments`,
      newComment,
      userId
    );
    dispatch(_addComment(data));
  } catch (error) {
    console.log("", error);
  }
};

export const updateCommentData =
  (commentInfo, userId, commentId) => async (dispatch) => {
    try {
      const { data } = await axios.put(
        `/api/users/${userId}/comments/${commentId}`,
        commentInfo,
        userId,
        commentId
      );
      dispatch(getCommentData(data));
    } catch (error) {
      console.log("", error);
    }
  };

export const deleteComment = (userId, commentId) => async (dispatch) => {
  try {
    const { data } = await axios.delete(
      `/api/users/${userId}/comments/${commentId}`
    );
    dispatch(_deleteComment(data));
  } catch (error) {
    console.log("", error);
  }
};

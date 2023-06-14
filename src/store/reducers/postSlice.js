import { createSlice } from "@reduxjs/toolkit";
const axios = require("axios");

const postSlice = createSlice({
  name: "postSlice",
  initialState: {
    postList: [],
    postData: {},
    commentList: [],
    commentData: {},
    tagList: [],
  },
  reducers: {
    getPostList: (state, action) => {
      state.postList = action.payload;
      return state;
    },
    getPostData: (state, action) => {
      state.postData = action.payload;
      return state;
    },
    getCommentList: (state, action) => {
      state.commentList = action.payload;
      return state;
    },
    getCommentData: (state, action) => {
      state.commentData = action.payload;
      return state;
    },
    getTagList: (state, action) => {
      state.tagList = action.payload;
      return state;
    },
    setErrorMsg: (state, action) => {
      state.errorMsg = action.payload;
      return state;
    },
  },
});

export default postSlice.reducer;
export const {
  getPostList,
  getPostData,
  getCommentList,
  getCommentData,
  getTagList,
  setErrorMsg,
} = postSlice.actions;

export const fetchPostList = () => async (dispatch) => {
  try {
    const { data } = await axios.get("/api/posts");
    dispatch(getPostList(data));
  } catch (error) {
    console.log("", error);
  }
};

export const fetchPostData = (postId) => async (dispatch) => {
  try {
    const { data } = await axios.get(`/api/posts/${postId}`);
    dispatch(getPostData(data));
  } catch (error) {
    console.log("", error);
  }
};

export const fetchCommentList = (postId) => async (dispatch) => {
  try {
    const { data } = await axios.get(`/api/posts/${postId}/comments`, {});
    dispatch(getCommentList(data));
  } catch (error) {
    console.log("", error);
  }
};

export const fetchCommentData = (postId, commentId) => async (dispatch) => {
  try {
    const { data } = await axios.get(
      `/api/posts/${postId}/comments/${commentId}`,
      postId,
      commentId
    );
    dispatch(getCommentData(data));
  } catch (error) {
    console.log("", error);
  }
};

//Tags

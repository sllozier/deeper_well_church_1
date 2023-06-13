import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { logout } from "./authSlice";

const writerSlice = createSlice({
  name: "writerSlice",
  initialState: {
    writerList: [],
    writerData: {},
    postList: [],
    postData: {},
  },
  reducers: {
    getWriterList: (state, action) => {
      return action.payload;
    },
    getWriterData: (state, action) => {
      return action.payload;
    },
    _deleteWriter: (state, action) => {
      state.writerList = state.writerList.filter(
        (writer) => writer.id !== action.payload.id
      );
      return state;
    },
    getPostList: (state, action) => {
      state.postList = action.payload;
      return state;
    },
    getPostData: (state, action) => {
      state.postData = action.payload;
      return state;
    },
    _addPost: (state, action) => {
      state.postList.push(action.payload);
      return state;
    },
    _deletePost: (state, action) => {
      state.postList = state.postList.filter(
        (post) => post.id !== action.payload.id
      );
      return state;
    },
    setErrorMsg: (state, action) => {
      return action.payload;
    },
  },
});

export default writerSlice.reducer;
export const { getWriterList, getWriterData, _deleteWriter, setErrorMsg } =
  writerSlice.actions;

//thunks go here
export const fetchWriterList = () => async (dispatch) => {
  try {
    const { data } = await axios.get("/api/writers");
    dispatch(getWriterList(data));
  } catch (error) {
    console.log("FETCH WRITERS ERROR", error);
  }
};

export const fetchWriterData = (writerId) => async (dispatch) => {
  try {
    const token = window.localStorage.getItem("token");
    const { data } = await axios.get(`/api/writers/${writerId}`, {
      headers: {
        authorization: token,
      },
    });
    dispatch(getWriterData(data));
  } catch (error) {
    console.log("FETCH WRITER DATA ERROR", error);
  }
};

export const updateWriterData = (writerInfo, writerId) => async (dispatch) => {
  try {
    const { data } = await axios.put(
      `/api/writers/${writerId}`,
      writerInfo,
      writerId
    );
    dispatch(getWriterData(data));
  } catch (error) {
    console.log("UPDATE WRITER ERROR", error);
  }
};

export const deleteWriterData = (writerId) => async (dispatch) => {
  try {
    const { data } = await axios.delete(`/api/writers/${writerId}`);
    dispatch(_deleteWriter(data));
    dispatch(logout());
  } catch (error) {
    console.log("DELETE WRITER ERROR", error);
  }
};

//Writer Posts

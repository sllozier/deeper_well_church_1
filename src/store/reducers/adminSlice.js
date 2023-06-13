import { createSlice } from "@reduxjs/toolkit";
import { logout } from "./authSlice";
const axios = require("axios");

const adminSlice = createSlice({
  name: "adminSlice",
  initialState: {
    adminList: [],
    adminData: {},
    userList: [],
    userData: {},
    writerList: [],
    writerData: {},
    postList: [],
    postData: {},
    writerPostList: [],
    writerPostData: {},
    productList: [],
    productData: {},
    orderList: [],
    orderData: {},
  },
  reducers: {
    getAdminList: (state, action) => {
      state.adminList = action.payload;
      return state;
    },
    getAdminData: (state, action) => {
      state.adminData = action.payload;
      return state;
    },
    _deleteAdminData: (state, action) => {
      state.adminList = state.adminList.filter(
        (admin) => admin.id !== action.payload.id
      );
      return state;
    },
    getUserList: (state, action) => {
      state.userList = action.payload;
      return state;
    },
    getUserData: (state, action) => {
      state.userData = action.payload;
      return state;
    },
    _addUser: (state, action) => {
        state.userList.push(action.payload);
        return state;
      },
    _deleteUserData: (state, action) => {
      state.userList = state.userList.filter(
        (user) => user.id !== action.payload.id
      );
      return state;
    },
    getWriterList: (state, action) => {
      state.writerList = action.payload;
      return state;
    },
    getWriterData: (state, action) => {
      state.writerData = action.payload;
      return state;
    },
    _addWriter: (state, action) => {
        state.writerList.push(action.payload);
        return state;
      },
    _deleteWriterData: (state, action) => {
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
    _deletePostData: (state, action) => {
      state.postList = state.postList.filter(
        (post) => post.id !== action.payload.id
      );
      return state;
    },
    getWriterPostList: (state, action) => {
      state.writerPostList = action.payload;
      return state;
    },
    getWriterPostData: (state, action) => {
      state.writerPostData = action.payload;
      return state;
    },
    _deleteWriterPostData: (state, action) => {
      state.writerPostList = state.writerPostList.filter(
        (writerPost) => writerPost.id !== action.payload.id
      );
      return state;
    },
    getProductList: (state, action) => {
      state.productList = action.payload;
      return state;
    },
    getProductData: (state, action) => {
      state.productData = action.payload;
      return state;
    },
    _addProduct: (state, action) => {
      state.productList.push(action.payload);
      return state;
    },
    _deleteProduct: (state, action) => {
      state.productList = state.productList.filter(
        (product) => product.id !== action.payload.id
      );
      return state;
    },
    getOrderList: (state, action) => {
      state.orderList = action.payload;
      return state;
    },
    getOrderData: (state, action) => {
      state.orderData = action.payload;
      return state;
    },
    _addOrder: (state, action) => {
      state.orderList.push(action.payload);
      return state;
    },
    _deleteOrder: (state, action) => {
      state.orderList = state.orderList.filter(
        (order) => order.id !== action.payload.id
      );
      return state;
    },
  },
});

export default adminSlice.reducer;
export const {
  getAdminData,
  getAdminList,
  getWriterPostData,
  getWriterPostList,
  getOrderData,
  getOrderList,
  getPostData,
  getPostList,
  getProductData,
  getProductList,
  getUserData,
  getUserList,
  getWriterData,
  getWriterList,
  _deleteAdminData,
  _deleteWriterPostData,
  _deleteOrder,
  _deletePostData,
  _deleteProduct,
  _deleteUserData,
  _deleteWriterData,
  _addPost,
  _addProduct,
  _addOrder,
  _addUser,
  _addWriter,
} = adminSlice.actions;

//Admin Info

export const fetchAdminList = () => async (dispatch) => {
  try {
    const { data } = await axios.get("/api/admins");
    dispatch(getAdminList(data));
  } catch (error) {
    console.log("FETCH ADMIN LIST ERROR", error);
  }
};
export const fetchAdminData = (adminId) => async (dispatch) => {
  try {
    const { data } = await axios.get(`/api/admins/${adminId}`, {
      headers: {
        authorization: token,
      },
    });
    dispatch(getAdminData(data));
  } catch (error) {
    console.log("FETCH ADMIN DATA ERROR", error);
  }
};

export const updateAdminData = (adminInfo, adminId) => async (dispatch) => {
  try {
    const { data } = await axios.put(
      `/api/admins/${adminId}`,
      adminInfo,
      adminId
    );
    dispatch(getAdminData(data));
  } catch (error) {
    console.log("FETCH ADMIN LIST ERROR", error);
  }
};

export const deleteAdminData = (adminId) => async (dispatch) => {
  try {
    const { data } = await axios.delete(`/api/admins/${adminId}`);
    dispatch(_deleteAdminData(data));
    dispatch(logout());
  } catch (error) {
    console.log("FETCH ADMIN DATA ERROR", error);
  }
};

//Admin Posts
export const fetchPostList = (adminId) => async (dispatch) => {
  try {
    const { data } = await axios.get(`/api/admins/${adminId}/posts`, {});
    dispatch(getPostList(data));
  } catch (error) {
    console.log("FETCH POST LIST ERROR", error);
  }
};
export const fetchPostData = (adminId, postId) => async (dispatch) => {
  try {
    const { data } = await axios.get(
      `/api/admins/${adminId}/posts/${postId}`,
      adminId,
      postId
    );
    dispatch(getPostData(data));
  } catch (error) {
    console.log("FETCH POST DATA ERROR", error);
  }
};

export const updatePostData =
  (postInfo, adminId, postId) => async (dispatch) => {
    try {
      const { data } = await axios.put(
        `/api/admins/${adminId}/posts/${postId}`,
        postInfo,
        adminId,
        postId
      );
      dispatch(getPostData(data));
    } catch (error) {
      console.log("UPDATE POST DATA ERROR", error);
    }
  };

export const addPost = (newPost, adminId) = async(dispatch) => {
    try{
        const { data } = await axios.post(`/api/admins/${adminId}/posts`, newPost);
        dispatch(_addPost(data));
    }catch(error){
        console.log("ADD POST ERROR", error);
    }
};

export const deletePostData = (adminId, postId) => async (dispatch) => {
  try {
    const { data } = await axios.delete(
      `/api/admins/${adminId}/posts/${postId}`
    );
    dispatch(_deletePostData(data));
  } catch (error) {
    console.log("DELETE POST DATA ERROR", error);
  }
};

//Writer Posts
export const fetchWriterPostList = (adminId) => async (dispatch) => {
  try {
    const { data } = await axios.get(`/api/admins/${adminId}/approvePosts`, {});
    dispatch(getWriterPostList(data));
  } catch (error) {
    console.log("FETCH WRITER POST LIST ERROR", error);
  }
};

export const fetchWriterPostData = (adminId, postId) => async(dispatch) => {
    try{
        const { data } = await axios.get(`/api/admins/${adminId}/approvePosts/${postId}`, adminId, postId);
        dispatch(getWriterPostData(data));
    }catch(error){
        console.log("FETCH WRITER POST DATA ERROR")
    }
}

export const updateWriterPostData = (postInfo, adminId, postId) => async (dispatch) => {
  try {
    const { data } = await axios.put(`/api/admins/${adminId}/approvePosts/${postId}`, postInfo, adminId, postId);
    dispatch(getWriterPostData(data));
  } catch (error) {
    console.log("UPDATE WRITER POST ERROR", error);
  }
};


export const deleteWriterPostData = (adminId, postId) => async (dispatch) => {
  try {
    const { data } = await axios.delete(`/api/admins/${adminId}/approvePosts/${postId}`);
    dispatch(_deleteWriterPostData(data));
  } catch (error) {
    console.log("DELETE WRITER POST ERROR", error);
  }
};

//Users
export const fetchUserList = (adminId) => async (dispatch) => {
  try {
    const { data } = await axios.get(`/api/admins/${adminId}/users`, {});
    dispatch(getUserList(data));
  } catch (error) {
    console.log("FETCH USER LIST ERROR", error);
  }
};
export const fetchUserData = (adminId, userId) => async (dispatch) => {
  try {
    const { data } = await axios.get(`/api/admins/${adminId}/users/${userId}`, adminId, userId);
    dispatch(getUserData(data));
  } catch (error) {
    console.log("FETCH ADMIN LIST ERROR", error);
  }
};
export const updateUserData = (userInfo, adminId, userId) => async (dispatch) => {
  try {
    const { data } = await axios.put(`/api/admins/${adminId}/users/${userId}`, userInfo, adminId, userId);
    dispatch(getUserData(data));
  } catch (error) {
    console.log("FETCH ADMIN LIST ERROR", error);
  }
};

export const addUser = (newUser, adminId) => async(dispatch) => {
    try{
        const { data } = await axios.post(`/api/admins/${adminId}/users`, newUser);
        dispatch(_addUser(data));
    }catch(error){
        console.log("ADD WRITER ERROR", error)
    }
}
export const deleteUserData = (adminId, userId) => async (dispatch) => {
  try {
    const { data } = await axios.delete(`/api/admins/${adminId}/users/${userId}`);
    dispatch(_deleteUserData(data));
  } catch (error) {
    console.log("FETCH ADMIN LIST ERROR", error);
  }
};

//Writers
export const fetchWriterList = (adminId) => async (dispatch) => {
  try {
    const { data } = await axios.get(`/api/admins/${adminId}/writers`, {});
    dispatch(getWriterList(data));
  } catch (error) {
    console.log("FETCH WRITER LIST ERROR", error);
  }
};
export const fetchWriterData = (adminId, writerId) => async (dispatch) => {
  try {
    const { data } = await axios.get(`/api/admins/${adminId}/writers/${writerId}`, adminId, writerId);
    dispatch(getWriterData(data));
  } catch (error) {
    console.log("FETCH WRITER DATA ERROR", error);
  }
};
export const updateWriterData = (writerInfo, adminId, writerId) => async (dispatch) => {
  try {
    const { data } = await axios.put(`/api/admins/${adminId}/writers/${writerId}`, writerInfo, adminId, writerId);
    dispatch(getWriterData(data));
  } catch (error) {
    console.log("UPDATE WRITER DATA ERROR", error);
  }
};
export const addWriter = (newWriter, adminId) => async(dispatch) => {
    try{
        const { data } = await axios.post(`/api/admins/${adminId}/writers`, newWriter);
        dispatch(_addWriter(data));
    }catch(error){
        console.log("ADD WRITER ERROR", error)
    }
}
export const deleteWriterData = (adminId, writerId) => async (dispatch) => {
  try {
    const { data } = await axios.delete(`/api/admins/${adminId}/writers/${writerId}`);
    dispatch(_deleteWriterData(data));
  } catch (error) {
    console.log("DELETE WRITER ERROR", error);
  }
};

//Products
export const fetchProductList = (adminId) => async (dispatch) => {
  try {
    const { data } = await axios.get(`/api/admins/${adminId}/products`, {});
    dispatch(getProductList(data));
  } catch (error) {
    console.log("FETCH PRODUCT LIST ERROR", error);
  }
};
export const fetchProductData = () => async (dispatch) => {
  try {
  } catch (error) {
    console.log("FETCH PRODUCT DATA ERROR", error);
  }
};
export const updateProductData = () => async (dispatch) => {
  try {
  } catch (error) {
    console.log("UPDATE PRODUCT ERROR", error);
  }
};

export const addProduct = (newProduct, adminId) => async (dispatch) => {
    try {
    } catch (error) {
      console.log("ADD PRODUCT ERROR", error);
    }
  };
export const deleteProductData = () => async (dispatch) => {
  try {
  } catch (error) {
    console.log("DELETE PRODUCT ERROR", error);
  }
};

//Orders
export const fetchOrderList = () => async (dispatch) => {
  try {
  } catch (error) {
    console.log("FETCH ADMIN LIST ERROR", error);
  }
};
export const fetchOrderData = () => async (dispatch) => {
  try {
  } catch (error) {
    console.log("FETCH ADMIN LIST ERROR", error);
  }
};
export const updateOrderData = () => async (dispatch) => {
  try {
  } catch (error) {
    console.log("FETCH ADMIN LIST ERROR", error);
  }
};
export const deleteOrderData = () => async (dispatch) => {
  try {
  } catch (error) {
    console.log("FETCH ADMIN LIST ERROR", error);
  }
};

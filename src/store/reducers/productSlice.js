import { createSlice } from "@reduxjs/toolkit";
const axios = require("axios");

const productSlice = createSlice({
  name: "productSlice",
  initialState: {
    productList: [],
    productData: {},
  },
  reducers: {
    getProductList: (state, action) => {
      state.productList = action.payload;
      return state;
    },
    getProductData: (state, action) => {
      state.productData = action.payload;
      return state;
    },
    setErrorMsg: (state, action) => {
      return action.payload;
    },
  },
});

export default productSlice.reducer;
export const { getProductList, getProductData, setErrorMsg } =
  productSlice.actions;

export const fetchProductList = () => async (dispatch) => {
  try {
    const { data } = await axios.get("/api/products");
    dispatch(getProductList(data));
  } catch (error) {
    console.log("FETCH PRODUCT LIST ERROR");
  }
};

export const fetchProductData = (productId) => async (dispatch) => {
  try {
    const { data } = await axios.get(`/api/products/${productId}`);
    dispatch(getProductData(data));
  } catch (error) {
    console.log("FETCH PRODUCT DATA ERROR");
  }
};

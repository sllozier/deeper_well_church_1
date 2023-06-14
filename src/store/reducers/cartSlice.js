import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const cartSlice = createSlice({
  name: "cartSlice",
  initialState: {},
  reducers: {
    getCartData: (state, action) => {
      state.cartData = action.payload;
      return state;
    },
    clearCart: (state, action) => {
      return {};
    },
    setErrorMsg: (state, action) => {
      state.errorMsg = action.payload;
      return state;
    },
  },
});

export default cartSlice.reducer;
export const { getCartData, clearCart, setErrorMsg } = cartSlice.actions;

export const createCart = (productId, accountId, UUID) => async (dispatch) => {
  try {
    const { data } = await axios.post("/api/carts", productId, accountId, UUID);
    if (accountId === 0) {
      localStorage.setItem("UUID", data.UUID);
    }
    dispatch(
      updateQuantities(data.id, data.UUID, accountId, productId, "increment")
    );
  } catch (error) {
    console.log("CREATE CART ERROR", error);
  }
};

export const fetchCartData = (accountId, UUID) => async (dispatch) => {
  try {
    // console.log("FETCHCART", accountId, UUID);
    const { data } = await axios.get(`/api/carts/${accountId}/${UUID}`);
    dispatch(getCartData(data));
  } catch (error) {
    console.log("FETCH CART DATA ERROR", error);
  }
};

export const accountAttachCart = (accountId, UUID) => async (dispatch) => {
  try {
    await axios.put(`/api/carts/attach/${accountId}`, { UUID });
    dispatch(fetchCartData(accountId, UUID));
  } catch (error) {
    console.log("ACCT ATTACH CART ERROR", error);
  }
};

export const removeProduct =
  (cartId, productId, accountId, UUID) => async (dispatch) => {
    try {
      const { data } = await axios.delete(`/api/carts/${productId}/${UUID}`);
      const numberToRemove = data.products[0].lineitem.quantity;
      dispatch(
        updateQuantities(
          cartId,
          UUID,
          accountId,
          productId,
          "remove",
          numberToRemove
        )
      );
    } catch (error) {
      console.log("REMOVE PRODUCT ERROR", error);
    }
  };

export const updateQuantities =
  (cartId, UUID, accountId, productId, op, num = 1) =>
  async (dispatch) => {
    try {
      // console.log("CARTID", cartId, "UUID", UUID);

      await axios.put("/api/carts", cartId, UUID, productId, op, num);
      dispatch(fetchCartData(accountId, UUID));
    } catch (error) {
      console.log("UPDATE QUANTITIES ERROR", error);
    }
  };

export const checkout = (UUID) => async (dispatch) => {
  try {
    await axios.put(`/api/carts/${UUID}`);
    //history.push("/paymentConfirmation");
    dispatch(clearCart());
  } catch (error) {
    console.log("CHECKOUT ERROR", error);
  }
};

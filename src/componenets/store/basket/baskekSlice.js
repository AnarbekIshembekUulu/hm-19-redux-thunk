import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { fetchApi } from "../../../lib/feth";

// export const basketActionTypes = {
//   ADD_ITEM_SUCCES: "ADD_ITEM_SUCCES",
//   GET_BUSKET_SUCCES: "GET_BUSKET_SUCCES",
// };

const initialState = {
  items: [],
};

export const basketSlice = createSlice({
  name: "basket",
  initialState,
  reducers: {
    getBasketSucces(state, action) {
      state.items = action.payload;
    },
  },
});

const basketActions = basketSlice.actions;

export const getBasket = () => async (dispatch) => {
  try {
    const { data } = await fetchApi("basket");

    dispatch(basketActions.getBasketSucces(data.items));
  } catch (error) {
    console.log(error);
  }
};

export const addToBasket = (newItem) => async (dispatch) => {
  try {
    await fetchApi(`foods/${newItem.id}/addToBasket`, {
      method: "POST",
      body: { amount: newItem.amount },
    });
    dispatch(getBasket());
  } catch (error) {
    console.log(error);
  }
};

export const updateBasketItem =
  ({ id, amount }) =>
  async (dispatch) => {
    try {
      await fetchApi(`basketItem/${id}/update`, {
        method: "PUT",
        body: { amount },
      });
      dispatch(getBasket());
    } catch (error) {
      console.log(error);
    }
  };

export const deleteBasketItem = (id) => async (dispatch) => {
  try {
    await fetchApi(`basketItem/${id}/delete`, {
      method: "DELETE",
    });
    dispatch(getBasket());
  } catch (error) {
    console.log(error);
  }
};

export const submitOrder = createAsyncThunk(
  "basket/submitOrder",
  async ({ orderData }, { dispatch, rejectwithValue }) => {
    try {
      await fetch(`https://jsonplaceholder.typicode.com/posts`, {
        method: "POST",
        body: { orderData },
      });
      dispatch(getBasket());
    } catch (error) {
      return rejectwithValue("Some thing wen wrong");
    }
  }
);

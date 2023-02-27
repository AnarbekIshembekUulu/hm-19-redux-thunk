import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { fetchApi } from "../../../lib/feth";

// export const mealsActionTypes = {
//   GET_MEALS_SUCCESS: "GET_MEALS_SUCCESS",
//   GET_MEALS_STARTED: "GET_MEALS_STARTED",
//   GET_MEALS_FAILED: "GET_MEALS_FAILED",
// };

const initialState = {
  meals: [],
  isLoading: false,
  error: "",
};

export const getMeals = createAsyncThunk(
  "meals/getMeals",
  async (payload, { dispatch, rejectWithValue }) => {
    // console.log(thunkApi);
    try {
      const { data } = await fetchApi("foods");
      return data;
    } catch (error) {
      return rejectWithValue("Ошибка!!!");
    }
  }
);

export const mealsSlice = createSlice({
  name: "meals",
  initialState,
  reducers: {
    getMealsStarted(state, action) {
      state.isLoading = true;
    },
    getMealsFailed(state, action) {
      // console.log(action);
      state.isLoading = false;
      state.error = action.payload;
    },
  },
  extraReducers: {
    [getMeals.fulfilled]: (state, action) => {
      state.meals = action.payload;
      state.isLoading = false;
      state.error = "";
    },
    [getMeals.pending]: (state, action) => {
      state.isLoading = true;
    },
    [getMeals.rejected]: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    },
  },
});

// export const getMeals = () => {
//   return async (dispatch) => {
//     try {
//       dispatch(mealsSlice.actions.getMealsStarted());
//       const { data } = await fetchApi("foods");
//       dispatch(mealsSlice.actions.getMealsSucces(data));
//     } catch (error) {
//       dispatch(mealsSlice.actions.getMealsFailed("Something went wrong"));
//     }
//   };
// };

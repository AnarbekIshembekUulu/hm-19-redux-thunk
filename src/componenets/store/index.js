import { applyMiddleware, combineReducers, createStore } from "redux";
import { mealsSlice } from "./meals/mealsSlice";
import thunk from "redux-thunk";
import { basketSlice } from "./basket/baskekSlice";
import { uiSlice } from "../meals/ui/uiSlice";

const rootReducer = combineReducers({
  [mealsSlice.name]: mealsSlice.reducer,
  [basketSlice.name]: basketSlice.reducer,
  [uiSlice.name]: uiSlice.reducer,
});

export const store = createStore(rootReducer, applyMiddleware(thunk));

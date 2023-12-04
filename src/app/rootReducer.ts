// src/app/rootReducer.ts
import { combineReducers } from "@reduxjs/toolkit";
import todoSlice from "./feature/todo/todoSlice";
import cartSlice from "./feature/cart/cartSlice";

const rootReducer = combineReducers({
  todo: todoSlice,
  cart: cartSlice,
  // Add more reducers if needed
});

export default rootReducer;

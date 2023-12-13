// src/app/rootReducer.ts
import { combineReducers } from "@reduxjs/toolkit";
import todoSlice from "./feature/todo/todoSlice";
import cartSlice from "./feature/cart/cartSlice";
import filmSlice from "./feature/film/filmSlice";
import accountReducer from "./feature/account/accountSlice";
import menuReducer from "./feature/menu/menuSlice";

const rootReducer = combineReducers({
  todo: todoSlice,
  cart: cartSlice,
  film: filmSlice,
  account: accountReducer,
  menu: menuReducer,
  // Add more reducers if needed
});

export default rootReducer;

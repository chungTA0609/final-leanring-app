// src/app/store.ts
import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import createSagaMiddleware from "redux-saga";
import todoReducer from "./feature/todo/todoSlice";
import cartReducer from "./feature/cart/cartSlice";
import filmReducer from "./feature/film/filmSlice";
import menuReducer from "./feature/menu/menuSlice";
import accountReducer from "./feature/account/accountSlice";
import rootSaga from "./rootSaga";

const sagaMiddleware = createSagaMiddleware();

const middleware = [...getDefaultMiddleware({ thunk: false }), sagaMiddleware];

const store = configureStore({
  reducer: {
    todo: todoReducer,
    cart: cartReducer,
    film: filmReducer,
    account: accountReducer,
    menu: menuReducer,
  },
  middleware,
});

sagaMiddleware.run(rootSaga);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;

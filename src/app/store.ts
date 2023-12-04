// src/app/store.ts
import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import createSagaMiddleware from "redux-saga";
import { all } from "redux-saga/effects";
import todoReducer from "./feature/todo/todoSlice";
import cartReducer from "./feature/cart/cartSlice";

function* rootSaga() {
  // Add sagas here if needed
  yield all([]);
}

const sagaMiddleware = createSagaMiddleware();

const middleware = [...getDefaultMiddleware({ thunk: false }), sagaMiddleware];

const store = configureStore({
  reducer: {
    todo: todoReducer,
    cart: cartReducer,
  },
  middleware,
});

sagaMiddleware.run(rootSaga);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;

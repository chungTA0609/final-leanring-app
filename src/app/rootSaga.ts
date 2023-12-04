// src/app/rootSaga.ts
import { all } from "redux-saga/effects";
import todoSaga from "./feature/todo/todoSaga";
import cartSaga from "./feature/cart/cartSaga";

function* rootSaga() {
  yield all([todoSaga(), cartSaga()]);
}

export default rootSaga;

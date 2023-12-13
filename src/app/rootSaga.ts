// src/app/rootSaga.ts
import { all } from "redux-saga/effects";
import todoSaga from "./feature/todo/todoSaga";
import cartSaga from "./feature/cart/cartSaga";
import filmSaga from "./feature/film/filmSaga";
import accountSaga from "./feature/account/accountSaga";
import menuSaga from "./feature/menu/menuSaga";

function* rootSaga() {
  yield all([todoSaga(), cartSaga(), filmSaga(), accountSaga(), menuSaga()]);
}

export default rootSaga;

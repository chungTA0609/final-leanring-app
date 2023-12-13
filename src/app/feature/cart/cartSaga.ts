// src/features/todo/todoSaga.ts
import { takeEvery, put } from "redux-saga/effects";
import { updateCart } from "./cartSlice";

function* handleUpdateCart(action: ReturnType<typeof updateCart>) {
  // You can perform additional logic here, e.g., make API calls
  // For simplicity, we'll just dispatch the action
  yield put(updateCart(action.payload));
}

function* cartSaga() {
  // yield takeEvery(updateCart.type, handleUpdateCart);
}

export default cartSaga;

// src/features/todo/todoSaga.ts
import { takeEvery, put } from "redux-saga/effects";
import menuSlice from "./menuSlice";

function* handleAddTodo(action: ReturnType<typeof menuSlice>) {
  // You can perform additional logic here, e.g., make API calls
  // For simplicity, we'll just dispatch the action
  // yield put(menuSlice(action.payload));
}

function* filmSaga() {
  // yield takeEvery(menuSlice.type, handleAddTodo);
}

export default filmSaga;

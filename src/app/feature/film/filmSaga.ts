// src/features/todo/todoSaga.ts
import { takeEvery, put } from "redux-saga/effects";
import { updateFilm } from "./filmSlice";

function* handleAddTodo(action: ReturnType<typeof updateFilm>) {
  // You can perform additional logic here, e.g., make API calls
  // For simplicity, we'll just dispatch the action
  yield put(updateFilm(action.payload));
}

function* filmSaga() {
  yield takeEvery(updateFilm.type, handleAddTodo);
}

export default filmSaga;

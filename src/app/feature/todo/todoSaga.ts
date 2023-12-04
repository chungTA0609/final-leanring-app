// src/features/todo/todoSaga.ts
import { takeEvery, put } from "redux-saga/effects";
import { addTodo } from "./todoSlice";

function* handleAddTodo(action: ReturnType<typeof addTodo>) {
  // You can perform additional logic here, e.g., make API calls
  // For simplicity, we'll just dispatch the action
  yield put(addTodo(action.payload));
}

function* todoSaga() {
  yield takeEvery(addTodo.type, handleAddTodo);
}

export default todoSaga;

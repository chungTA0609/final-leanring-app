// src/features/todo/todoSaga.ts
import { takeEvery, put, call } from "redux-saga/effects";
import agent from "../../api/agent";
import {
  fetchDataFailure,
  fetchDataStart,
  fetchDataSuccess,
} from "./accountSlice";
import { PayloadAction } from "@reduxjs/toolkit";
import { User } from "../../../models/User";

// function* handleAddTodo(action: ReturnType<typeof updateFilm>) {
//   // You can perform additional logic here, e.g., make API calls
//   // For simplicity, we'll just dispatch the action
//   yield put(updateFilm(action.payload));
// }
const fetchDataFromApi = async (payload: User) => {
  const response = await agent.Account.login(payload);
  console.log(payload);
  const res = await response.json();
  return res;
};
function* handleApiCall(action: PayloadAction<User>): unknown {
  try {
    // yield put(fetchDataStart());
    const data = yield call(fetchDataFromApi, action.payload);

    yield put(fetchDataSuccess(data));
  } catch (error) {
    yield put(fetchDataFailure(error ? error.message : ""));
  }
}

function* accountSaga() {
  yield takeEvery(fetchDataStart.type, handleApiCall);
}

export default accountSaga;

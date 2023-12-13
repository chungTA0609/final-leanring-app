// src/app/todoSlice.ts
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import * as mockData from "../../mockjson/data.json";
import { Film } from "../../../models/Film";
import { Filtering } from "../../../models/Filtering";

interface FilmState {
  films: Film[];
}
const sortArryFilms = (arr: Film[], key: string, asc: boolean) => {
  const sortedArr = [...arr].sort((a, b) => {
    const nameA = a[key].toString().toUpperCase(); // Convert names to uppercase for case-insensitive sorting
    const nameB = b[key].toString().toUpperCase();

    if (nameA < nameB) {
      return -1;
    }

    if (nameA > nameB) {
      return 1;
    }

    return 0; // Names are equal
  });

  return asc ? sortedArr.reverse() : sortedArr;
};
const initialState: FilmState = {
  films: mockData.default,
};

const filmSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    updateFilm: (state, action: PayloadAction<Array<Film>>) => {
      // state.films.push(newTodo);
    },
    sortFilm: (state, action: PayloadAction<Filtering>) => {
      console.log(action.payload);

      switch (action.payload.type) {
        case "title":
          state.films = sortArryFilms(
            mockData.default,
            "title",
            action.payload.sort
          );
          break;
        case "type":
          state.films = sortArryFilms(
            mockData.default,
            "title",
            action.payload.sort
          );
          break;
        case "rating":
          state.films = sortArryFilms(
            mockData.default,
            "vote_average",
            action.payload.sort
          );
          break;
        case "price":
          state.films = sortArryFilms(
            mockData.default,
            "price",
            action.payload.sort
          );
          break;

        default:
          state.films = mockData.default;
          break;
      }
    },
  },
});

export const { updateFilm, sortFilm } = filmSlice.actions;

export default filmSlice.reducer;

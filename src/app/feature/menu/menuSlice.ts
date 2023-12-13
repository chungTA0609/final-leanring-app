// src/app/todoSlice.ts
import { createSlice } from "@reduxjs/toolkit";

interface FilmState {
  showMenu: boolean;
}

const initialState: FilmState = {
  showMenu: true,
};

const menuSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    setShowMenu: (state, action) => {
      state.showMenu = action.payload;
    },
  },
});

export const { setShowMenu } = menuSlice.actions;

export default menuSlice.reducer;

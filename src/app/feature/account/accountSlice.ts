import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { User } from "../../../models/User";

interface AccountState {
  user: User | null;
}

const initialState: AccountState = {
  user: null,
};

export const accountSlice = createSlice({
  name: "account",
  initialState,
  reducers: {
    setUser: (state, action) => {
      const claims = JSON.parse(atob(action.payload.token.split(".")[1]));
      const roles =
        claims["http://schemas.microsoft.com/ws/2008/06/identity/claims/role"];
      state.user = {
        ...action.payload,
        roles: typeof roles === "string" ? [roles] : roles,
      };
    },
    fetchDataStart: (state) => {
      console.log(state);

      state.loading = true;
      state.error = null;
    },
    fetchDataSuccess: (state, action: PayloadAction<unknown>) => {
      state.loading = false;
      state.data = action.payload;
    },
    fetchDataFailure: (state, action: PayloadAction<string>) => {
      state.loading = false;
      state.error = action.payload;
    },
  },
});
export const { setUser, fetchDataStart, fetchDataSuccess, fetchDataFailure } =
  accountSlice.actions;
export default accountSlice.reducer;

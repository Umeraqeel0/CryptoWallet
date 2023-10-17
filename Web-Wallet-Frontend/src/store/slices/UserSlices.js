import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: 0,
  id: 0,
  bal: 0,
  accounts: [],
  txDetails: []
};
const userSlices = createSlice({
  name: "user",
  initialState,
  reducers: {
    addUserId(state, action) {
      state.id = action.payload;
    },
    addUserAddress: (state, action) => {
      state.value = action.payload;
    },
    addUserBalance: (state, action) => {
      state.bal = action.payload;
    },
    addUserAccounts(state, action) {
      state.accounts.push(action.payload);
    },
    addTx(state, action) {
      state.txDetails.push(action.payload);
    },
  },
});

export default userSlices.reducer;
export const { addUserId, addUserAddress, addUserBalance, addUserAccounts, addTx } = userSlices.actions;

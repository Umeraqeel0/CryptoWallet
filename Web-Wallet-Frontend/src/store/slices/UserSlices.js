import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  value: 0,
  id: 0,
  bal: 0
}
const userSlices = createSlice({
  name: 'user',
  initialState,
  reducers: {
    addUserId(state, action) {
      state.id = action.payload
    },
    addUserAddress: (state,action) => {
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes
      state.value = action.payload
    },
    addUserBalance: (state,action) => {
      state.bal = action.payload
    },
    

    // addUserAddress(state, action) {
    //   console.log("first-redux")
    //   state.push(action.payload);
    //   console.log(state);
    // },
  },
})

export default userSlices.reducer;
export const { addUserId, addUserAddress, addUserBalance } = userSlices.actions; 
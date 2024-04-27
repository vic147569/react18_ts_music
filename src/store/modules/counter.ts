import { createSlice } from '@reduxjs/toolkit'

const counterSlice = createSlice({
  name: 'counter',
  initialState: {
    count: 100,
    message: 'Hello world',
    address: 'LA',
    height: 1.88
  },
  reducers: {
    changeMessageAction(state, action) {
      state.message = action.payload
    }
  }
})

export const { changeMessageAction } = counterSlice.actions
export default counterSlice.reducer

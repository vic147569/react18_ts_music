import { createSlice, PayloadAction } from '@reduxjs/toolkit'

interface IState {
  count: number
  message: string
  address: string
  height: number
  direction: 'left' | 'right'
  names: string[]
}

const initialState: IState = {
  count: 100,
  message: 'Hello world',
  address: 'LA',
  height: 1.88,
  direction: 'left',
  names: ['alice', 'bob']
}

const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    changeMessageAction(state, action: PayloadAction<string>) {
      state.message = action.payload
    }
  }
})

export const { changeMessageAction } = counterSlice.actions
export default counterSlice.reducer

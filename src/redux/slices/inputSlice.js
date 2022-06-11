import { createSlice } from '@reduxjs/toolkit'

const inputSlice = createSlice({
  name: 'input',
  initialState: {
    Input: '',
  },
  reducers: {
    setInput: (state, action) => {
      state.Input = action.payload
    },
  },
})

export const { setInput } = inputSlice.actions

export default inputSlice.reducer

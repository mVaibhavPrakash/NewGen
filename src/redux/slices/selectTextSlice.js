import { createSlice } from '@reduxjs/toolkit'

const selectTextSlice = createSlice({
  name: 'selectText',
  initialState: {
    selectText: '',
  },
  reducers: {
    setSelectText: (state,action) => {
      state.selectText = action.payload
    },
  },
})

export const { setSelectText } = selectTextSlice.actions

export default selectTextSlice.reducer

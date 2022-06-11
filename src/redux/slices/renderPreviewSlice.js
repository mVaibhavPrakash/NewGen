import { createSlice } from '@reduxjs/toolkit'

const renderPreviewSlice = createSlice({
  name: 'renderPreview',
  initialState: {
    isPreview: false,
  },
  reducers: {
    setIsPreview: (state) => {
      state.isPreview = !state.isPreview
    },
  },
})

export const { setIsPreview } = renderPreviewSlice.actions

export default renderPreviewSlice.reducer

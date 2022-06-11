import { configureStore } from '@reduxjs/toolkit'
import editReducer from './slices/editSlice'
import inputReducer from './slices/inputSlice'
import renderPreviewReducer from './slices/renderPreviewSlice'
import selectTextReducer from './slices/selectTextSlice'
import authReducer from './slices/authSlice'

const store = configureStore({
  reducer: {
    edit: editReducer,
    input: inputReducer,
    renderPreview: renderPreviewReducer,
    selectText: selectTextReducer,
    auth: authReducer,
  },
})

export default store

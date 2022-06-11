import { createSlice } from '@reduxjs/toolkit'

const authSlice = createSlice({
  name: 'auth',
  initialState: {
    username: '',
    firstname: '',
    isLoggedIn: false,
    profileCreated: false,
  },
  reducers: {
    setProfileCreated: (state) => {
      state.profileCreated = true
    },
    setUser: (state, action) => {
      state.username = action.payload.username
      state.firstname = action.payload.firstname
    },
    setLoggedIn: (state) => {
      state.isLoggedIn = !state.isLoggedIn
    },
  },
})

export const { setUser, setLoggedIn, setProfileCreated } = authSlice.actions

export default authSlice.reducer

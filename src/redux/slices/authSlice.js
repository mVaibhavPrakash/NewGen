import { createSlice } from '@reduxjs/toolkit'

const authSlice = createSlice({
  name: 'auth',
  initialState: {
    uid_person: '',
    username: '',
    fullname: '',
    isLoggedIn: false,
    isProfileCreated: false,
  },
  reducers: {
    setProfileCreated: (state, action) => {
      state.isProfileCreated = action.isProfileCreated
    },
    setUser: (state, action) => {
      state.uid_person = action.uid_person
      state.username = action.username
      state.fullname = action.fullname
    },
    setLoggedIn: (state, action) => {
      state.isLoggedIn = action.isLoggedIn
    },
  },
})

export const { setUser, setLoggedIn, setProfileCreated } = authSlice.actions

export default authSlice.reducer

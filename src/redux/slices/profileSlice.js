import { createSlice } from '@reduxjs/toolkit'

const profileSlice = createSlice({
  name: 'profile',
  initialState: {
    uid_userprofile: '',
    fullname: '',
    username: '',
    bio: '',
    dateofbirth: '',
    about: '',
    tech: '',
    twitter: '',
    linkedin: '',
    stack: '',
    github: '',
    personal: '',
    youtube: '',
    error: '',
  },
  reducers: {
    setProfile: (state, action) => {
      state.uid_userprofile = action.uid_userprofile
      state.fullname = action.fullname
      state.username = action.username
      state.bio = action.bio
      state.dateofbirth = action.dateofbirth
      state.about = action.uid_userprofile
      state.tech = action.tech
      state.twitter = action.twitter
      state.linkedin = action.linkedin
      state.stack = action.stack
      state.github = action.github
      state.personal = action.personal
      state.youtube = action.youtube
    },
    setProfileError: (state, action) => {
      state.error = action.error
    },
  },
})

export const { setProfile, setProfileError } = profileSlice.actions

export default profileSlice.reducer

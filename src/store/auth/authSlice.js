import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  status: 'checking', // authenticated, not-authenticated
  user: {},
  erroMessage: undefined,
}

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    onChecking: (state) => {
      state.status = 'checking'
      state.user = {}
      state.erroMessage = undefined
    },

    onLogin: (state, {payload}) => {

      state.status = 'authenticated'
      state.user = pauload
      state.erroMessage = undefined

    },
  
  }

});

export const { onChecking, onLogin } = authSlice.actions
import { configureStore } from '@reduxjs/toolkit'
import LoginUser from "../REDUX/LoginSlice"

export const store = configureStore({
    reducer: {
        LoginUserSlice:LoginUser
    },
  })
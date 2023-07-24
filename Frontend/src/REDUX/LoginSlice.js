import { createSlice } from '@reduxjs/toolkit'

const initialValue={
    loginUserData:{}
}

export const LoginUser = createSlice({
    name: 'LoginUserSlice',
   initialState:initialValue,
   reducers: {
    addLoginUser:(state,action)=>{
        state.loginUserData={...action.payload}
    },
    removeLoginUser:(state,action)=>{
        console.log(action.payload)
        state.loginUserData={}
    },

   }
})

export const { addLoginUser,removeLoginUser} = LoginUser.actions

export default LoginUser.reducer
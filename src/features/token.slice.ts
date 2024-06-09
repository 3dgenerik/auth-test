import { PayloadAction, createSlice } from "@reduxjs/toolkit";

interface IInitialState{
    tokenData: string | null
}

const initialState: IInitialState = {
    tokenData: localStorage.getItem('token') || null
}

const tokenSlice = createSlice({
    name:'token',
    initialState,
    reducers:{
        saveToken:(state:IInitialState, action: PayloadAction<string>)=>{
            state.tokenData = action.payload;
            localStorage.setItem('token', action.payload)
        },

        removeToken:(state:IInitialState)=>{
            state.tokenData = null;
            localStorage.removeItem('token')
        }
    }
})

export default tokenSlice.reducer;
export const {saveToken, removeToken} = tokenSlice.actions;

import { PayloadAction, createSlice } from "@reduxjs/toolkit";

interface IInitialState{
    token: string | null
}

const initialState: IInitialState = {
    token: localStorage.getItem('token') || null
}

const tokenSlice = createSlice({
    name:'token',
    initialState,
    reducers:{
        saveToken:(state:IInitialState, action: PayloadAction<string>)=>{
            state.token = action.payload;
            localStorage.setItem('token', action.payload)
        },

        removeToken:(state:IInitialState)=>{
            state.token = null;
            localStorage.removeItem('token')
        }
    }
})

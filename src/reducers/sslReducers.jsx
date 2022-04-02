import { createSlice } from "@reduxjs/toolkit";
import {Ssldemo} from "../controller/Ssldemo"

const sslData = createSlice({
    name:"sslslice",
    initialState:{
        users:[],
        loader:false,
        error:{},
    },
    reducers:{
        getssldata:(state,action)=>{
            state.users =[...state.users,action.payload]
        }
    },
    extraReducers:{
        [Ssldemo.pending]:(state,action)=>{
            state.loader = true
        },
        [Ssldemo.fulfilled]:(state,action)=>{
            state.loader = false;
            state.users  = action.payload
        },
        [Ssldemo.rejected]:(state,action)=>{
            state.loader = false;
            state.errors = action.payload
        }
    }
})

export const {getssldata} = sslData.actions
export default sslData.reducer
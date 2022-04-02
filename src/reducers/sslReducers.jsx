import { createSlice } from "@reduxjs/toolkit";
import {Ssldemo} from "../controller/Ssldemo"

const sslData = createSlice({
    name:"sslslice",
    initialState:{
        userss:[],
        loader:false,
        error:{},
    },
    reducers:{
        getssldata:(state,action)=>{
            state.userss =[...state.userss,action.payload]
        }
    },
    extraReducers:{
        [Ssldemo.pending]:(state,action)=>{
            state.loader = true
        },
        [Ssldemo.fulfilled]:(state,action)=>{
            state.loader = false;
            state.userss  = action.payload
        },
        [Ssldemo.rejected]:(state,action)=>{
            state.loader = false;
            state.errors = action.payload
        }
    }
})

export const {getssldata} = sslData.actions
export default sslData.reducer
import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const Ssldemo = createAsyncThunk("sslget",async()=>{
    const response = await axios.get("http://localhost:3001/ssl")
    return response.data
})
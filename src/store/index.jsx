import { configureStore ,getDefaultMiddleware} from "@reduxjs/toolkit";
import sslData from "../reducers/sslReducers"
export default configureStore({
    reducer:{
        users:sslData
    },
    middleware:[...getDefaultMiddleware()]
})
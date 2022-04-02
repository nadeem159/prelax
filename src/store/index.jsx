import { configureStore ,getDefaultMiddleware} from "@reduxjs/toolkit";
import sslData from "../reducers/sslReducers"
export default configureStore({
    reducer:{
        userss:sslData
    },
    middleware:[...getDefaultMiddleware()]
})
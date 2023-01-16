import {configureStore} from "@reduxjs/toolkit";
import authReducer, {AuthState} from "../authSlice";
import {getJwt, isAuthenticated} from "../../services/storageService";
import {feedAPI} from "../feedSlice";
import {questionAPI} from "../questionSlice";

export const store = configureStore({
        reducer: {
            auth: authReducer,
            [feedAPI.reducerPath]: feedAPI.reducer,
            [questionAPI.reducerPath]: questionAPI.reducer
        },
        preloadedState: {
            auth: {
                currentUser: undefined,
                isAuthenticated: isAuthenticated(),
                jwt: (getJwt() == undefined ? '' : getJwt())!
            }
        },
        middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(feedAPI.middleware).concat(questionAPI.middleware)
    }
)

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;

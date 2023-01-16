import {configureStore} from "@reduxjs/toolkit";
import authReducer, {AuthState} from "../authSlice";
import {getJwt, isAuthenticated} from "../../services/storageService";
import {feedAPI} from "../feedSlice";

export const store = configureStore({
        reducer: {
            auth: authReducer,
            [feedAPI.reducerPath]: feedAPI.reducer
        },
        preloadedState: {
            auth: {
                currentUser: undefined,
                isAuthenticated: isAuthenticated(),
                jwt: (getJwt() == undefined ? '' : getJwt())!
            }
        },
        middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(feedAPI.middleware)
    }
)

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;

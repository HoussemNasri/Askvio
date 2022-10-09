import {configureStore} from "@reduxjs/toolkit";
import authReducer, {AuthState} from "../authSlice";
import {getJwt, isAuthenticated} from "../../services/storageService";

export const store = configureStore({
        reducer: {
            auth: authReducer
        },
        preloadedState: {
            auth: {
                currentUser: undefined,
                isAuthenticated: isAuthenticated(),
                jwt: (getJwt() == undefined ? '' : getJwt())!
            }
        }
    }
)

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
import {configureStore} from "@reduxjs/toolkit";
import authReducer, {AuthState} from "../authSlice";
import {getJwt, isAuthenticated} from "../../services/storageService";
import {feedAPI} from "../feedSlice";
import {questionAPI} from "../questionSlice";
import {answersAPI} from "../answerSlice";

export const store = configureStore({
        reducer: {
            auth: authReducer,
            [feedAPI.reducerPath]: feedAPI.reducer,
            [questionAPI.reducerPath]: questionAPI.reducer,
            [answersAPI.reducerPath]: answersAPI.reducer
        },
        preloadedState: {
            auth: {
                currentUser: undefined,
                isAuthenticated: isAuthenticated(),
                jwt: (getJwt() == undefined ? '' : getJwt())!
            }
        },
        middleware: (getDefaultMiddleware) => getDefaultMiddleware()
            .concat(feedAPI.middleware)
            .concat(questionAPI.middleware)
            .concat(answersAPI.middleware)
    }
)

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;

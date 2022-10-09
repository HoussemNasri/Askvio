import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {loginWithEmailAndPassword} from "./authAPI";
import {getJwt, isAuthenticated, setIsAuthenticated, setJwt} from '../services/storageService'
import {RootState} from "./app/store";

export interface AuthState {
    currentUser: CurrentUser | undefined
    jwt: string | undefined
    isAuthenticated: boolean
}

export interface CurrentUser {

}

export interface EmailPasswordLoginRequest {
    email: string
    password: string
}

const initialState: AuthState = {currentUser: {}, jwt: '', isAuthenticated: false}

export const loginAsync = createAsyncThunk('auth/loginAsync', async ({email, password}: EmailPasswordLoginRequest) => {
    const response = await loginWithEmailAndPassword(email, password)
    if (response.status == 200) {
        setJwt(response.data.jwt)
        setIsAuthenticated(true)
        return {
            currentUser: undefined,
            isAuthenticated: true,
            jwt: response.data.jwt
        } as AuthState
    }
})

export const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        onLoginSucceed: (state) => {

        },
        onLoginFailed: (state) => {

        }
    },
    extraReducers: (builder) => {
        builder.addCase(loginAsync.fulfilled, (state, action) => {
            if (action.payload) {
                const {isAuthenticated, jwt} = action.payload
                state.isAuthenticated = isAuthenticated;
                state.jwt = jwt
            }
        })
    }

})

export default authSlice.reducer

export const getAuthState = (state: RootState) => state.auth
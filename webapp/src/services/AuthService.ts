import axios from 'axios'

type LoginResponse = {
    jwt: string
}

const ACCESS_TOKEN = "accessToken";

const API_BASE_ENDPOINT = "http://localhost:8080/api/v1"
const API_LOGIN_ENDPOINT = API_BASE_ENDPOINT + "/auth/login"

export function login(email: String, password: String) {
    axios.post(API_LOGIN_ENDPOINT, {
        email,
        password
    }).then(response => {
        if (response.status == 200) {
            const loginResponse = response.data as LoginResponse
            setAccessToken(loginResponse.jwt)
        } else {
            console.error("An error occurred while logging in ", response.request)
        }
    })
}

function logout() {

}

function getCurrentUser() {

}

function setAccessToken(token: string) {
    localStorage.setItem(ACCESS_TOKEN, token)
    console.log(`Access Token = ${token}`);
}

export function getCurrentAccessToken() {
    return localStorage.getItem(ACCESS_TOKEN)
}
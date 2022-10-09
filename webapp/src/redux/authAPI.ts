import axios from "axios";

const AUTH_API = "http://localhost:8080/api/v1/auth"

export function loginWithEmailAndPassword(email: string, password: string) {
    return axios.post(`${AUTH_API}/login`, {
        email,
        password
    })
}
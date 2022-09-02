import axios from 'axios'

type LoginResponse = {
    jwt: string
}

export class AuthService {
    private readonly ACCESS_TOKEN = "accessToken";

    private readonly API_BASE_ENDPOINT = "http://localhost:8080/api/v1"
    private readonly API_LOGIN_ENDPOINT = this.API_BASE_ENDPOINT + "/auth/login"

    login(email: String, password: String) {
        axios.post(this.API_LOGIN_ENDPOINT, {
            email,
            password
        }).then(response => {
            if (response.status == 200) {
                const loginResponse = response.data as LoginResponse
                this.setAccessToken(loginResponse.jwt)
            } else {
                console.error("An error occurred while logging in ", response.request)
            }
        })
    }

    logout() {

    }

    getCurrentUser() {

    }

    private setAccessToken(token: string) {
        localStorage.setItem(this.ACCESS_TOKEN, token)
        console.log(`Access Token = ${token}`);
    }

    getCurrentAccessToken() {
        return localStorage.getItem(this.ACCESS_TOKEN)
    }
}
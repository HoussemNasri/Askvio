const JWT_KEY = 'JWT'
const IS_AUTHENTICATED_KEY = 'IS_AUTHENTICATED'

export function setJwt(jwt: string) {
    localStorage.setItem(JWT_KEY, jwt)
}

export function getJwt() {
    return localStorage.getItem(JWT_KEY)
}

export function setIsAuthenticated(value: boolean) {
    localStorage.setItem(IS_AUTHENTICATED_KEY, JSON.stringify(value))
}

export function isAuthenticated(): boolean {
    const isAuthenticatedStr = localStorage.getItem(IS_AUTHENTICATED_KEY)
    if (isAuthenticatedStr) {
        return JSON.parse(isAuthenticatedStr) as boolean
    } else {
        return false;
    }
}
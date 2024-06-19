export function login(email, password) {
    return {
        type: 'ASYNC_REQUEST_LOGIN',
        email,
        password
    }
}

export function verify() {
    return {
        type: 'ASYNC_VERIFY_LOGIN'
    }
}

export function logout() {
    return {
        type: 'ASYNC_LOGOUT'
    }
}

import axios from "axios";

export const userLoggedIn = user => ({
    type: 'USER_LOGGED_IN',
    user
});

export const userLoggedOut = () => ({
    type: 'USER_LOGGED_OUT'
});

export const login = credentials => dispatch =>
    axios.post('https://localhost:5001/Auth/login',
        { userName: credentials.userName, password: credentials.password })
        .then(res => res)
        .then(user => dispatch(userLoggedIn(user)));

export const logout = () => dispatch => {
    dispatch(userLoggedOut());
};

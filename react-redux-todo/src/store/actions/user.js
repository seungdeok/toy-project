const SET_USER = "SET_USER";
const LOGOUT = "LOGOUT";

const setUser = (user) => {
    return {
        type: SET_USER,
        payload: user
    }
}

const logout = () => {
    return {
        type: LOGOUT
    }
}

export default {
    SET_USER,
    LOGOUT,
    setUser,
    logout
}
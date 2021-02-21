import actionTypes from '../actions';
const { SET_USER, LOGOUT } = actionTypes.User;

const currentUser = (state = {}, action) => {
    switch(action.type){
        case SET_USER:
            return {
                ...state,
                user: action.payload,
                loggedIn: true
            }
        case LOGOUT:
          return {
            ...state,
            user: {},
            loggedIn: false
          }
        default:
          return state
    }
}

export default currentUser;
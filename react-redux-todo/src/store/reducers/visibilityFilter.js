import actionTypes from '../actions';
const { VisibilityFilter, SET_VISIBILITY_FILTER } = actionTypes.todos;

const visibilityFilter = (state = VisibilityFilter.SHOW_ALL, action) => {
    switch(action.type){
        case SET_VISIBILITY_FILTER:
            return action.payload
        default:
            return state
    }
}

export default visibilityFilter;
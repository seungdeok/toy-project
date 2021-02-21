const ADD_TODO = "ADD_TODO";
const SET_VISIBILITY_FILTER = "SET_VISIBILITY_FILTER";
const TOGGLE_TODO = "TOGGLE_TODO";
const VisibilityFilter = {
    SHOW_ALL: "SHOW_ALL",
    SHOW_COMPLETED: "SHOW_COMPLETED",
    SHOW_ACTIVE: "SHOW_ACTIVE"
}

let id = 0;

const addTodo = (text) => ({
    type: ADD_TODO,
    payload: {
        id: id++,
        text
    }
})

const setVisibilityFilter = (filter) => ({
    type: SET_VISIBILITY_FILTER,
    payload: filter
})

const toggleTodo = (id) => ({
    type: TOGGLE_TODO,
    payload: id
})

export default {
    ADD_TODO,
    SET_VISIBILITY_FILTER,
    TOGGLE_TODO,
    VisibilityFilter,
    addTodo,
    setVisibilityFilter,
    toggleTodo
}
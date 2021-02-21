const { List, Map } = require('immutable');
const actionTypes = require('../actions/');
const { ADD_TODO } = actionTypes.todo;

module.exports = function todos(state = [], action) {
  // const todos = state.get('todos');
  switch (action.type) {
    case ADD_TODO:
      return {
        ...state,
        text: action.text
      }
    default:
      return state;
  }
};
const { List, Map } = require('immutable');
const actionTypes = require('../actions/');
const { INCREMENT, DECREMENT } = actionTypes.counter;

module.exports = function counter(state = 0, action) {
  switch (action.type) {
    case INCREMENT:
      return state + 1;
    case DECREMENT:
      return state - 1;
    default:
      return state;
  }
};

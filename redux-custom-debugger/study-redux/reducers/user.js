const { List, Map } = require("immutable");
const actionTypes = require('../actions/');
const { SET_NAME } = actionTypes.user;

module.exports = function userReducer(state = {}, action) {
  switch (action.type) {
    case SET_NAME:
      return {
        ...state,
        name: action.name
      };
    default:
      return state;
  }
};

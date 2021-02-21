const { combineReducers } = require("redux");
const todos = require("./todos");
const counter = require("./counter");
const user = require('./user');

module.exports = combineReducers({
  todos,
  counter,
  user
});

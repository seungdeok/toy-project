// import { createStore } from 'redux'
const { createStore } = require("redux");
const reducer = require("./reducers");

const store = createStore(reducer);

const setNameActionCreator = require('./actions/');

console.log(store.getState());

// store.dispatch({
//   type: "ADD_TODO",
//   text: "Read the docs"
// });

// store.dispatch({
//   type: "INCREMENT"
// })

// store.dispatch({
//   type: "SET_NAME",
//   name: 'Ricky'
// });

console.log(store.getState());
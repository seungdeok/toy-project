const { createStore, combineReducers, applyMiddleware } = require('redux');
const reducer = require('../../../study-redux/reducers')

function currentAction(state = null, action){
  return action;
}

const rootReducer = combineReducers({
  currentAction,
  reducer
});

const customLogger = store => dispatch => action => {
  let raw = JSON.stringify(store.getState());
  const prev_slice_action = raw.slice(1,raw.length-1);
  const prev_slice_type = prev_slice_action.slice(prev_slice_action.indexOf("type")-1,prev_slice_action.indexOf("},"));
  // console.log(slice_type);

  const prev_slice_reducers = prev_slice_action.slice(prev_slice_action.indexOf("reducer")+9,prev_slice_action.length);
  const prev_slice_reducer = prev_slice_reducers.slice(1, prev_slice_reducers.length-1);
  const prev_split_reducer = prev_slice_reducer.split(",");
  
  console.log("{");
  console.log("  "+prev_slice_type+",");
  prev_split_reducer.forEach((post) => {
    console.log("  "+post+",");
  })
  console.log("}");
  // console.log(store.getState());
  

  console.log("------------------------------------------------------------");

  // console.log(action);

  const result = dispatch(action);

  raw = JSON.stringify(store.getState());
  const post_slice_action = raw.slice(1,raw.length-1);
  const post_slice_type = post_slice_action.slice(post_slice_action.indexOf("type")-1,post_slice_action.indexOf("},"));
  
  const post_slice_reducers = post_slice_action.slice(post_slice_action.indexOf("reducer")+9,post_slice_action.length);
  const post_slice_reducer = post_slice_reducers.slice(1, post_slice_reducers.length-1);
  const post_split_reducer = post_slice_reducer.split(",");

  console.log("{");
  console.log("  "+post_slice_type+",");
  post_split_reducer.forEach((post,index) => {
    if(post !== prev_split_reducer[index])
      console.log("  "+post+",");
  })
  console.log("}");
  console.log("------------------------------------------------------------");

  return result
}

const store = createStore(rootReducer, applyMiddleware(customLogger));
console.log("[ACTION]")

////dispatch

store.dispatch({
  type: "INCREMENT"
})

// ////////


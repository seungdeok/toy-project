const { createStore, applyMiddleware } = require("redux");
const reducer = require("../../../study-redux/reducers");

const customLogger = store => dispatch => action => {
  let raw = JSON.stringify(store.getState());
  const prev_slice_raw = raw.slice(1, raw.length - 1);
  const prev_split_raw = prev_slice_raw.split(",");

  console.log("{");
  prev_split_raw.forEach(prev => {
    console.log("  " + prev + ",");
  });
  console.log("}");
  console.log("------------------------------------------------------------");

  const result = dispatch(action);

  raw = JSON.stringify(store.getState());
  post_slice_raw = raw.slice(1, raw.length - 1);
  post_split_raw = post_slice_raw.split(",");

  console.log("{");
  post_split_raw.forEach((post, index) => {
    if (post !== prev_split_raw[index]) {
      console.log("  " + prev_split_raw[index] + "->" + post + ",");
    } else {
      console.log("  " + prev_split_raw[index] + ",");
    }
  });
  console.log("}");

  console.log("------------------------------------------------------------");

  return result;
};

const store = createStore(reducer, applyMiddleware(customLogger));

console.log("[Diff]");

////dispatch

store.dispatch({
  type: "INCREMENT"
});

// store.dispatch({
//   type: "INCREMENT"
// });

//////////
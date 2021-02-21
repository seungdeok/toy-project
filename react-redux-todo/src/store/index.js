import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import axios from 'axios';
import rootReducer from './reducers';

const logger = store => next => action => {
    console.log("prev state",store.getState());
    let result = next(action);
    console.log("dispatching",result);
    console.log("post state",store.getState());
    console.log("\n");
    return result;
  };

const promiseMiddleware = () => next => action => {
  const { promise, type, ...rest } = action;
  next({ ...rest, type: `${type}_REQUEST` });
  return axios({
    method: promise.method,
    url: promise.url,
    data: promise.data
  })
    .then(result => {
      next({ ...rest, result, type: `${type}_SUCCESS` });
    })
    .catch(error => {
      next({ ...rest, error, type: `${type}_FAILURE` });
    });
}

const Store = createStore(rootReducer, applyMiddleware(logger, thunk));

export default Store;
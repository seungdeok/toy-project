import { combineReducers } from 'redux';

import Counter from './counter';
import currentUser from './user';
import todos from './todos';
import visibilityFilter from './visibilityFilter';

const rootReducer = combineReducers({
    currentUser,
    Counter,
    todos,
    visibilityFilter
})

export default rootReducer;
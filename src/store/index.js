import {createStore, combineReducers, applyMiddleware} from 'redux';
import ReduxThunk from 'redux-thunk';

import TaskReducer from './reducer/tasks';

const rootReducer = combineReducers({
  taskList: TaskReducer,
});

const store = createStore(rootReducer, applyMiddleware(ReduxThunk));

export default store;



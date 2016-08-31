import { createStore, compose, applyMiddleware, combineReducers } from 'redux';

//Add Reducers
import {GridReducer} from 'lib/grid';

//Combine Reducers
const reducers = combineReducers({
  grid : GridReducer
});

const enhancers = compose();

const store = createStore(reducers);

export default store;

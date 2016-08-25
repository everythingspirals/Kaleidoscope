import { createStore, compose, applyMiddleware, combineReducers } from 'redux';

//Add Reducers
import gridReducer from 'common/grid/grid-reducer';

//Combine Reducers
const reducers = combineReducers({
  grid : gridReducer
});

const enhancers = compose();

const store = createStore(reducers);

export default store;

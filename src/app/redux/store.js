import { createStore, compose, applyMiddleware, combineReducers } from 'redux';

//Add Reducers
import {GridReducer} from 'lib/grid';
import {GuideReducer} from 'lib/guide';

//Combine Reducers
const reducers = combineReducers({
  grid : GridReducer,
  guide: GuideReducer
});

const enhancers = compose();

const store = createStore(reducers);

export default store;

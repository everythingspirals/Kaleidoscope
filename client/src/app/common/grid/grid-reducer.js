import actionTypes from 'redux/actionTypes';

const initialState = {
  nodeIndex:0,
  gridIndex:0
}

export default function(state = initialState, action){
  let newState = {...state};

  switch(action.type){
    case actionTypes.GRID.UPDATE :
      newState.gridManager = action.gridManager;
      return newState;
      break;

    default:
      return state;
  }
}

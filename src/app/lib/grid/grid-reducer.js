import actionTypes from 'redux/actionTypes';

const initialState = {
  remoteHandler:null
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

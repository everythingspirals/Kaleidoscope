import actionTypes from 'redux/actionTypes';

const initialState = {
  guide:{},
}

export default function(state = initialState, action){
  let newState = {...state};

  switch(action.type){
    case actionTypes.GUIDE.UPDATE :
      newState.guide = action.guide;
      return newState;
      break;

    default:
      return state;
  }
}

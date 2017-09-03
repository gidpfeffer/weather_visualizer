import * as actionTypes from '../actions/action_types'

export default function(state = [], action){
  switch(action.type) {
    case actionTypes.FETCH_WEATHER:
      return [ action.payload.data, ...state ];
    default:
      return state;
  }
}

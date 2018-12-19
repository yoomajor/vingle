import { createAction, handleActions } from 'redux-actions';

// 토스트
const TOAST = 'card/TOAST';

//export const toastmsg = tstmsg => ({ type: TOAST, tstmsg });

export const toastmsg = createAction(TOAST);

const initialState = {
  tstmsg: '',
}
/*
export default function card (state = initialState, action) {
  switch (action.type){
    case TOAST:
      return {
        ...state,
        tstmsg: action.tstmsg
      }
    default:
      return state;
  }
}
*/
export default handleActions ({
  [TOAST]: (state, action) => {
    console.log(state, action)
  },
}, initialState);

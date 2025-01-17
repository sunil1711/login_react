import * as types from '../actions';


const initialState={
  username:"sunilold",
  age:'34',
  address:"kmk",
    success: false,
    message: 'Authentication successful!',
 

}

export default function(state = initialState, action) {
  const response = action.response;

  switch(action.type) {
    case types.LOGIN_USER_SUCCESS:
      return { ...state, ...response};
    case types.LOGIN_USER_ERROR:
      return { ...state, response };
    default:
      return state;
  }
};
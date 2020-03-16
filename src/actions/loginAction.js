import * as types from './index';


export const loginUserAction = (user) => {
    console.log("njnjn",user)
    return {
      type: types.LOGIN_USER,
      user
    }
  };
import * as types from './index';


export const DashboardAction = (user) => {
    console.log("njnjn",user)
    return {
      type: types.USER_NAME_CHANGE,
      user
    }
  };
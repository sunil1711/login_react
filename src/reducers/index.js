import { combineReducers } from 'redux';
import login from '../reducers/loginReducer';
import   register  from '../reducers/registerReducer';
const rootReducer = combineReducers({
   login,register
});

export default rootReducer;
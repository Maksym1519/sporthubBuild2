import { combineReducers } from "redux";
import signInReducer from '../features/signInSlice';
import counterReducer from '../features/counter/counterSlice';
import screenWidthReducer from '../features/headerSlice'; 

const rootReducer = combineReducers({
  counter: counterReducer,
  screenWidth: screenWidthReducer,
  signIn: signInReducer
});

export default rootReducer;

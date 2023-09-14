import { combineReducers } from "redux";
import signInReducer from '../features/signInSlice';
import counterReducer from '../features/counter/counterSlice';
import screenWidthReducer from '../features/headerSlice'; 
import inputTypESliceReducer from "../features/inputTypeSlice";
import videoUserReducer from '../features/videoUserSlice'

const rootReducer = combineReducers({
  counter: counterReducer,
  screenWidth: screenWidthReducer,
  signIn: signInReducer,
  inputType: inputTypESliceReducer,
  videoUser: videoUserReducer 
});

export default rootReducer;

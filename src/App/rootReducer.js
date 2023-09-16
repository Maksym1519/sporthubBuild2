import { combineReducers } from "redux";
import signInReducer from '../features/signInSlice';
import counterReducer from '../features/counter/counterSlice';
import screenWidthReducer from '../features/headerSlice'; 
import inputTypESliceReducer from "../features/inputTypeSlice";
import videoUserReducer from '../features/videoUserSlice';
import videoSwitcherReducer from '../features/videoSwitcherSlice';
import subscribeButtonReducer from '../features/subscribeButtonSlice'

const rootReducer = combineReducers({
  counter: counterReducer,
  screenWidth: screenWidthReducer,
  signIn: signInReducer,
  inputType: inputTypESliceReducer,
  videoUser: videoUserReducer,
  videoSwitcher: videoSwitcherReducer,
  subscribeButton: subscribeButtonReducer
});

export default rootReducer;

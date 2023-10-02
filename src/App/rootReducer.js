import { combineReducers } from "redux";
import signInReducer from '../features/signInSlice';
import counterReducer from '../features/counter/counterSlice';
import screenWidthReducer from '../features/headerSlice'; 
import inputTypESliceReducer from "../features/inputTypeSlice";
import videoUserReducer from '../features/videoUserSlice';
import videoSwitcherReducer from '../features/videoSwitcherSlice';
import subscribeButtonReducer from '../features/subscribeButtonSlice';
import menuDotsReducer from '../features/menuDotsSlice';
import playlistSlice from "../features/playlistSlice";
import videoPlayerSlice from '../features/videoPlayerSlice';
import videoDescriptionChatReducer from '../features/videoDescriptionChatSlice';
import genderReducer from "../features/genderSlice";
import addVideoCreatorReducer from '../features/addVideoCreator'
import videoStyleReducer from '../features/videoStyleSlice'

const rootReducer = combineReducers({
  counter: counterReducer,
  screenWidth: screenWidthReducer,
  signIn: signInReducer,
  inputType: inputTypESliceReducer,
  videoUser: videoUserReducer,
  videoSwitcher: videoSwitcherReducer,
  subscribeButton: subscribeButtonReducer,
  menuDots: menuDotsReducer,
  playlistSlice: playlistSlice,
  videoPlayer: videoPlayerSlice, //use on page Subscribe when click on video and play it on videoplayer
  videoDescriptionChat: videoDescriptionChatReducer,
  genderSlice: genderReducer,
  addVideoSlice: addVideoCreatorReducer,
  videoStyleSlice: videoStyleReducer
});

export default rootReducer;

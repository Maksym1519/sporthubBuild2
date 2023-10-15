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
import addVideoCreatorReducer from '../features/addVideoCreator';
import videoStyleReducer from '../features/videoStyleSlice';
import videoPlaylistReducer from '../features/videoPlaylistSlice';
import createPlaylistReducer from '../features/createPlaylistSlice';
import headerStateReducer from '../features/headerStateSlice';
import getIdReducer from '../features/getIdSlice'

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
  videoStyleSlice: videoStyleReducer,
  videoPlaylistSlice: videoPlaylistReducer,
  createPlaylistSlice: createPlaylistReducer,
  headerStateSlice: headerStateReducer,
  loginId: getIdReducer
});

export default rootReducer;

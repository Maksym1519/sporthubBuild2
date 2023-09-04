import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../features/counter/counterSlice';
import screenWidthReducer from '../features/headerSlice'; 


export default configureStore({
  reducer: {
    counter: counterReducer,
    screenWidth: screenWidthReducer,
  }
})
import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../features/counter/counterSlice';
import screenWidthReducer from '../features/headerSlice'; 
import rootReducer from './rootReducer';


const store = configureStore({
  reducer: rootReducer
})
export default store;
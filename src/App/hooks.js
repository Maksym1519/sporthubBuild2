import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';
import { RootState, AppDispatch } from './store';
import { setUserId } from '../features/getIdSlice';

export const useAppDispatch = () => useDispatch();
export const useAppSelector = useSelector;


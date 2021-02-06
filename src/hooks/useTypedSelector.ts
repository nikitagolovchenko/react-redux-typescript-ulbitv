import { TypedUseSelectorHook, useSelector } from 'react-redux';
import { RootState } from '../store/reducers';

// создаем свой типизированный хук useSelector
export const useTypedSelector: TypedUseSelectorHook<RootState> = useSelector;

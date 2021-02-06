import { combineReducers } from 'redux';
import { userReducer } from './userReducer';
import { todoReducer } from './todoReducer';

export const rootReducer = combineReducers({
  user: userReducer,
  todo: todoReducer,
});

// создаем свой тип редюсера, чтобы передать в свой useSelector:
export type RootState = ReturnType<typeof rootReducer>;

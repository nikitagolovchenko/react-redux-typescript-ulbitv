// типизация state:
export interface UserState {
  users: any[];
  loading: boolean;
  error: null | string;
}

// enum вместо 'typeof FETCH_USER':
export enum UserActionTypes {
  FETCH_USERS = 'FETCH_USERS',
  FETCH_USERS_SUCCESS = 'FETCH_USERS_SUCCESS',
  FETCH_USERS_ERROR = 'FETCH_USERS_ERROR',
}

// типизация каждого action:
interface FetchUsersAction {
  type: UserActionTypes.FETCH_USERS;
}

// типизация каждого action:
interface FetchUsersSuccessAction {
  type: typeof UserActionTypes.FETCH_USERS_SUCCESS;
  payload: any[];
}

// типизация каждого action:
interface FetchUsersErrorAction {
  type: typeof UserActionTypes.FETCH_USERS_ERROR;
  payload: string;
}

// объединяем все action в один:
export type UserAction =
  | FetchUsersAction
  | FetchUsersSuccessAction
  | FetchUsersErrorAction;

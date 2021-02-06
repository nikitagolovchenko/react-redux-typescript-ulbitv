import * as UserActionCreators from './userActions';
import * as TodoActionCreators from './todoActions';

// Объединяем все action-creators в один для нагешл хука useAction:

export default {
  ...UserActionCreators,
  ...TodoActionCreators,
};

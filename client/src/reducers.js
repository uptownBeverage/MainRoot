import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import { notification } from './components/common/NotificationBar/reducer';

const authReducer = (state = null, action) => {
  switch (action.type) {
    case 'FETCH_USER':
      return action.payload || false;
    case 'USER_INFO':
      return action.payload || null;
    default:
      return state;
  }
};

export default combineReducers({
  authReducer,
  form: formReducer,
  notification
});
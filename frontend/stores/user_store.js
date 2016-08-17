import { Store } from 'flux/utils';
import AppDispatcher from '../dispatcher/dispatcher';
import userConstants from '../constants/user_constants';

const UserStore = new Store(AppDispatcher);
window.UserStore = UserStore;
let _currentUser = null;
let _userFetched = false;

UserStore.currentUser = function () {
  return Object.assign({}, _currentUser);
};

UserStore.currentUserFetched = function () {
  return _userFetched;
};

UserStore.__onDispatch = function (payload) {
  switch(payload.actionType) {
    case userConstants.RECEIVE_CURRENT_USER:
      
      _currentUser = payload.currentUser;
      _userFetched = true;
      UserStore.__emitChange();
      break;
  }
};

export default UserStore;

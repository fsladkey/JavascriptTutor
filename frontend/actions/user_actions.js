import AppDispatcher from '../dispatcher/dispatcher';
import userConstants from '../constants/user_constants';

const userActions = {
  receiveCurrentUser: function(currentUser){
    
    AppDispatcher.dispatch({
      actionType: userConstants.RECEIVE_CURRENT_USER,
      currentUser: currentUser
    });
  }
};

module.exports = userActions;

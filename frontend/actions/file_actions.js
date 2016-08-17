import AppDispatcher from '../dispatcher/dispatcher';
import fileConstants from '../constants/file_constants';

const fileActions = {
  receiveFiles: function(files){
    AppDispatcher.dispatch({
      actionType: fileConstants.RECEIVE_FILES,
      files: files
    });
  }
};

module.exports = fileActions;

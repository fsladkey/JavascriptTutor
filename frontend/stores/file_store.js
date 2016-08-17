import { Store } from 'flux/utils';
import AppDispatcher from '../dispatcher/dispatcher';
import fileConstants from '../constants/file_constants';

let _files = {};
const codeFileStore = new Store(AppDispatcher);
window.codeFileStore = codeFileStore;

const addFiles = function (files) {
  files.forEach(file => {
    _files[file.user_id] = _files[file.user_id] || [];
    replaceFile(_files[file.user_id], file);
  });
};

const replaceFile = function (store, newFile) {
  let replaced = false;

  for (var idx = 0; idx < store.length; idx++) {
    let file = store[idx];

    console.log(file.id, newFile.id);
    if (file.id === newFile.id) {
      store[idx] = newFile;
      return;
    }
  }
  store.push(newFile);
};

codeFileStore.all = function () {
  let files = [];

  let keys = Object.keys(_files);
  for (let idx = 0; idx < keys.length; idx++) {
    files = files.concat(_files[keys[idx]]);
  }

  return files.slice();
};

codeFileStore.find = function (id) {
  return codeFileStore.all().find((file) => {
    return file.id == id;
  });
};

codeFileStore.__onDispatch = function (payload) {
  switch(payload.actionType) {
    case fileConstants.RECEIVE_FILES:
      addFiles(payload.files);
      codeFileStore.__emitChange();
      break;
  }
};

export default codeFileStore;

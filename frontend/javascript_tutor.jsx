import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';
import UserStore from './stores/user_store';
import UserApiUtil from './util/user_api_util';
import NavBar from './components/nav/nav_bar';
import FileIndex from './components/files/file_index';
import FileDetail from './components/files/file_detail';
import App from './components/app';


let _scrollToTop = function () {
  window.scrollTo(0, 0);
};

let _checkForSignedIn = function (state, replace, callback) {
  if (UserStore.currentUserFetched()) {
    callback();
  } else {
    UserApiUtil.fetchCurrentUser(callback);
  }
};

const router = (
  <Router history={browserHistory}>
    <Route path="/" component={App} onEnter={_checkForSignedIn}>
      <IndexRoute component={FileIndex}/>
      <Route path='files/:id' component={FileDetail}/>
    </Route>
  </Router>
);

document.addEventListener("DOMContentLoaded", () => {
  var root = document.getElementById('content');
  ReactDOM.render(router, root);
});

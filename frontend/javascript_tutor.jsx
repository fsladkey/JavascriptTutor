import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';
import NavBar from './components/nav/nav_bar';
import FileIndex from './components/files/file_index';

class App extends React.Component {
  render() {
    return(
      <div>
        <NavBar/>
        <FileIndex/>
      </div>
    );
  }
}

var router = (
  <Router history={browserHistory}>
    <Route path="/" component={App}/>
  </Router>
);


document.addEventListener("DOMContentLoaded", () => {
  var root = document.getElementById('content');
  ReactDOM.render(<App/>, root);
});

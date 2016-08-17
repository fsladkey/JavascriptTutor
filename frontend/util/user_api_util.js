import userActions from "../actions/user_actions";

var UserApiUtil = {
  fetchCurrentUser: function (cb) {
    $.ajax({
      url: '/api/session',
      type: "GET",
      success: function(currentUser) {
        userActions.receiveCurrentUser(currentUser);
        
        cb && cb();
      },
      error: function(err) {
        console.log("ERROR: ");
      	console.log(err);
      }
    });
  },

  signIn: function (data) {
    $.ajax({
      url: '/api/session',
      type: "POST",
      data: { user: data },
      success: function(currentUser) {
        userActions.receiveCurrentUser(currentUser);
      },
      error: function(err) {
        console.log("ERROR: ");
      	console.log(err);
      }
    });
  },

  signOut: function () {
    $.ajax({
      url: '/api/session',
      type: "DELETE",
      success: function(currentUser) {
        userActions.receiveCurrentUser(null);
      },
      error: function(err) {
        console.log("ERROR: ");
      	console.log(err);
      }
    });
  }
};

export default UserApiUtil;

import fileActions from "../actions/file_actions";

var fileApiUtil = {
  fetch: function () {
    $.ajax({
      url: '/api/code_files',
      type: "GET",
      success: function(files) {
        fileActions.receiveFiles(files);
      },
      error: function(err) {
        console.log("ERROR: ");
      	console.log(err);
      }
    });
  }
};

export default fileApiUtil;

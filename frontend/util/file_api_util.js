import fileActions from "../actions/file_actions";

var FileApiUtil = {
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
  },

  update: function (file) {
    $.ajax({
      url: '/api/code_files/' + file.id,
      type: "PATCH",
      data: { code_file: file },
      success: function(file) {
        fileActions.receiveFiles([file]);
      },
      error: function(err) {
        console.log("ERROR: ");
      	console.log(err);
      }
    });
  }
};

export default FileApiUtil;

var fileApiUtil = {
  fetch: function () {
    $.ajax({
      url: '/api/code_files',
      type: "GET",
      success: function(files) {
        debugger
      },
      error: function(err) {
        console.log("ERROR: ");
      	console.log(err);
      }
    });
  }
};

export default fileApiUtil;

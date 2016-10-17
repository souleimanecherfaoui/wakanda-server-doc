ds.Employee.find(12).then(function (employee) {
  var fileInput = document.getElementById('fileInput');
  var file = fileInput.files[0];

  employee.profilePicture.upload(file).then(function () {
    //file is uploaded and entity is updated
  });
});
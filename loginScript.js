document.addEventListener('DOMContentLoaded', function () {
    //console.log("Rum");
  document.getElementById('Login_Form').addEventListener('submit', function (event) {
    //console.log("Hello");  
    event.preventDefault();
      var username = document.getElementById('exampleInputEmail1').value;
      var password = document.getElementById('exampleInputPassword1').value;
      console.log(username + " " + password);
    });
});

document.addEventListener('DOMContentLoaded', function () {
    //console.log("Rum");
  document.getElementById('Login_Form').addEventListener('submit', function (event) {
    //console.log("Hello");  
    event.preventDefault();
      var username = document.getElementById('email').value;
      var password = document.getElementById('Password').value;
      console.log(username + " " + password);
    });
});

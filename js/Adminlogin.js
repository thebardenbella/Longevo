firebase.auth().onAuthStateChanged(function (user) {
  if (user) {
    location.href = "Home.html";
  } else {
    location.href = "form.html";
  }
});
function login() {
  var useremail = document.getElementById("login_username").value;
  var userpw = document.getElementById("login_password").value;

  firebase
    .auth()
    .signInWithEmailAndPassword(useremail, userpw)
    .then(() => {
      // alert("logged in");
      window.location.href = "Home.html";
    })
    .catch(function (error) {
      // Handle Errors here.
      var errorCode = error.code;
      var errorMessage = error.message;
      alert(errorMessage);
      // ...
    });
}
function logout() {
  firebase
    .auth()
    .signOut()
    .then(function () {
      // Sign-out successful.w
      window.location.href = "Home.html";
    })
    .catch(function (error) {
      // An error happened.
      alert(error.message);
    });
}

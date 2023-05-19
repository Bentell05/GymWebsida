
var loginButton = document.getElementById("loginButton");
var loginPopup = document.getElementById("loginPopup");

loginButton.addEventListener("click", function() {
  loginPopup.style.display = "block";
});

loginPopup.addEventListener("click", function(event) {
  if (event.target === loginPopup) {
    loginPopup.style.display = "none";
  }
});
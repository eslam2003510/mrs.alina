var submitb = document.querySelector(".submitb");
var input1 = document.querySelector(".input1");
var input2 = document.querySelector(".input2");

submitb.addEventListener("click", function (e) {
  e.preventDefault();
  if (input1.value.trim() === "alina" && input2.value.trim() === "203") {
    window.location = "login.html";
  }
});

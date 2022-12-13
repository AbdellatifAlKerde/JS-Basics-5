var userName = document.querySelector("#name");

userName.addEventListener("blur", function () {
  alert(`Hello ${userName.value}`);
});

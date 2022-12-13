var userName = document.querySelector("#name");

userName.addEventListener("blur", function () {
  if (userName.value == "Alice" || userName.value == "Bob") {
    alert(`Hello ${userName.value}`);
  } else {
    alert("Hello Stranger");
  }
});

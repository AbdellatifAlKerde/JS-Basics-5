var nb = document.querySelector("#nb");
var sum = 0;

// nb.addEventListener("blur", function () {
//   for (let i = 1; i < parseInt(nb.value) + 1; i++) {
//     sum = sum + i;
//   }
//   alert(sum);
// });

// nb.onblur = function () {
//   for (let i = 0; i < parseInt(nb.value) + 1; i++) {
//     sum = sum + i;
//   }
//   alert(sum);
// };

nb.addEventListener("blur", function () {
  for (let i = 0; i < parseInt(nb.value) + 1; i++) {
    if (i % 3 == 0 || i % 5 == 0) {
      sum += i;
    }
  }
  alert(sum);
});

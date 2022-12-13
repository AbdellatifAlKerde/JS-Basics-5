let nb = document.getElementById("nb");
let submit = document.getElementById("btn");
let sum = document.getElementById("sum");
let product = document.getElementById("mult");
sum.style.display = "none";
product.style.display = "none";
submit.onclick = (e) => {
  sum.style.display = "block";
  product.style.display = "block";
  sum.onclick = () => {
    let result = 0;
    for (let i = 1; i <= nb.value; i++) {
      result += i;
    }
    alert(result);
  };
  product.onclick = () => {
    let result = 1;
    for (let i = 1; i <= nb.value; i++) {
      result *= i;
    }
    alert(result);
  };
};

var nb = document.getElementById("nb");

//creating a multiplication table
nb.onblur = function () {
  document.write(`${nb.value}: `);
  for (let i = 1; i <= 12; i++) {
    // multiply i with number
    const result = i * nb.value;

    // display the result
    // console.log(`${number} * ${i} = ${result}`);
    document.write(`${result} `);
  }
};

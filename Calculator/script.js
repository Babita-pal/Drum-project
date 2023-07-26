let numberbox = document.getElementById("numberbox");
let butt = document.getElementById("butt");

butt.addEventListener("click", (event) => {
  let target = event.target;
  if (target.innerHTML === "C") {
    numberbox.value = "";
  } else if (target.classList.contains("number")) {
    numberbox.value += target.innerHTML;
  } else if (target.classList.contains("operator")) {
    let lastChar = numberbox.value[numberbox.value.length - 1]; //last character of string
    if (["+", "-", "*", "/"].includes(lastChar)) {
      numberbox.value = numberbox.value.slice(0, -1) + target.innerHTML; //eliminates repeated operators
    } else {
      numberbox.value += target.innerHTML;
    }
  } else if (target.innerHTML === "=") {
    if (numberbox.value.length !== 0) {
      //handling unexpected syntax expressions
      try {
        numberbox.value = eval(numberbox.value);
      } catch (error) {
        numberbox.value = "Syntax Error!";
      }
    } else numberbox.value = "";
  }
})

document.body.addEventListener("keypress", (event) => {
  let target = event.key; //key pressed
  const numbersArray = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
  const operatorsArray = ["+", "-", "*", "/"];
  if (target === "c") {
    numberbox.value = "";
  } else if (numbersArray.includes(target)) {
    numberbox.value += target;
  } else if (operatorsArray.includes(target)) {
    let lastChar = numberbox.value[numberbox.value.length - 1]; //last character of string
    if (operatorsArray.includes(lastChar)) {
      numberbox.value = numberbox.value.slice(0, -1) + target; //eliminates repeated operators
    } else {
      numberbox.value += target;
    }
  } else if (target === "=") {
    if (numberbox.value.length !== 0) {
      //handling unexpected syntax expressions
      try {
        numberbox.value = eval(numberbox.value);
      } catch (error) {
        numberbox.value = "Syntax Error!";
      }
    } else numberbox.value = "";
  } else {
    alert("Wrong key pressed!");
  }
});
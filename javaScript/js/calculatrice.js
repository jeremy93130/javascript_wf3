var number1 = document.getElementById("number1");
var number2 = document.getElementById("number2");
var egal = document.getElementById("egal");
var buttonPlus = document.getElementById("plus");
var buttonMoins = document.getElementById("moins");
var buttonFois = document.getElementById("fois");
var buttonDivise = document.getElementById("divise");
var resultat = document.getElementById("resultat");
let result;

buttonPlus.addEventListener("click", () => {
  result = "+";
});
buttonMoins.addEventListener("click", () => {
  result = "-";
});
buttonFois.addEventListener("click", () => {
  result = "*";
});
buttonDivise.addEventListener("click", () => {
  result = "/";
});

egal.addEventListener("click", () => {
  let value1 = parseInt(number1.value);
  let value2 = parseInt(number2.value);

  if (result == "+") {
    resultat.value = value1 + value2;
  } else if (result == "-") {
    resultat.value = value1 - value2;
  } else if (result == "/") {
    resultat.value = value1 / value2;
  } else if (result == "*") {
    resultat.value = value1 * value2;
  }
});

var number1 = document.getElementById("number1");
var number2 = document.getElementById("number2");
var egal = document.getElementById("egal");
var buttonPlus = document.getElementById("plus");
var buttonmoins = document.getElementById("moins");
var buttonfois = document.getElementById("fois");
var buttondivise = document.getElementById("divise");
var resultat = document.getElementById("resultat");

buttonPlus.addEventListener("click", () => {
  let value1 = parseInt(number1.value);
  let value2 = parseInt(number2.value);
  let result = value1 + value2;
  console.log(result);
});

egal.addEventListener("click", () => {
  let value1 = parseInt(number1.value);
  let value2 = parseInt(number2.value);
  let result = value1 + value2;

  let newP = document.createElement("p");

  newP.textContent = parseInt(result);
  resultat.appendChild(newP);
  console.log(resultat);
});

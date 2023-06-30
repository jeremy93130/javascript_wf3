function rappel() {
  console.log("ceci est une fonction de rappel");
}

setTimeout(rappel(), 2000);

// ici on utilise une fonction anonyme
setTimeout(function () {
  console.log("Ceci est une fonction de rappel");
}, 2000);

// Fonction traditionnelle
function addition(a, b) {
  return a + b;
}
// Fonction fléchée équivalente
const additionFlechee = (a, b) => a + b;

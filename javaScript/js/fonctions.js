function addition(a, b) {
  let result = a + b;
  return result;
}
function addition(a, b) {
  return a + b;
}

let resultat = addition(3, 7);
let somme = addition(8, 17);

console.log(resultat);
console.log(somme);

function direBonjourPrenom(prenom = "Anonyme") {
  document.write(`<p>bonjour ${prenom}</p>`);
}

direBonjourPrenom(); // Bonjour, Anonyme !

direBonjourPrenom("Michel"); // Bonjour, Michel!

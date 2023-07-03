// Exercice
// Soit le tableau ["banane","pomme","mangue"]

let tab = ["banane", "pomme", "mangue"];

// Ajouter une fraise entre pomme et mangue

tab.splice(2, 0, "fraise");
console.log(tab);

// Supprimer la banane

tab.shift();
console.log(tab);

// Remplacer fraise et mangue par goyave

tab.fill("goyave");
console.log(tab);

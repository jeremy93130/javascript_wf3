var largeur = 20;
var longueur = 15;
var hauteur = 30;

var volume = 0;

volume = largeur * longueur * hauteur;

console.log(volume);

// Age

let age = 2;

// si age est strictement inférieur à 5, afficher le mot bébé
// si age est compris entre 5 et 10, afficher le mot enfant
// si age est compris entre 11 et 18 , afficher le mot adolescent
// si age est supérieur à 18, afficher le mot vieux

if (age < 5) {
  console.log("bébé");
} else if (age >= 5 && age <= 10) {
  console.log("Enfant");
} else if (age > 10 && age <= 18) {
  console.log("Adolescent");
} else if (age > 18) {
  console.log("vieux");
} else {
  console.log("erreur âge");
}

// En utilisant la structure conditionnelle switch, écrire un programme qui affiche le jour de la semaine en fonction d'un nombre donné
// si nombre = 0 , afficher dimanche.....

let jourSemaine = 4;

switch (jourSemaine) {
  case 0:
    console.log("Dimanche");
    break;
  case 1:
    console.log("Lundi");
    break;
  case 2:
    console.log("Mardi");
    break;
  case 3:
    console.log("Mercredi");
    break;
  case 4:
    console.log("Jeudi");
    break;
  case 5:
    console.log("Vendredi");
    break;
  case 6:
    console.log("Samedi");
    break;
  default:
    console.log("mauvais jour");
}

// En utilisant la ternaire écrire un programme qui affiche adulte si l'age est supérieur ou égal à 18 et mineur si age est inférieur ou égal à 18 :

let ageMajeurMineur = 14;

let majorite =
  ageMajeurMineur >= 18
    ? "Vous êtes majeur félicitation"
    : "Vous êtes mineur retournez au lit !";

console.log(majorite);

// Une année bisextile est une année qui est soit : Divisible par 4 sans être divisible par 100 soit divisible par 400:

let annee = 2000;

if (annee % 4 === 0 && annee % 100 === 0 && annee % 400 === 0) {
  console.log("cette année est bisextile ! ");
} else {
  console.log("cette année n'est pas bisextile !");
}

// COURS

// (4 == 4 &&
//   (5 != "5")(
//     // =>
//     10 > 5
//   )) ||
//   3 <= 2; // =>
// (!(true && false)(
//   // =>
//   4 >= 4
// ) &&
//   !(false || true)(
//     // =>
//     7 >= 8
//   )) ||
//   (!(false && true)(
//     // =>
//     5 > 3
//   ) &&
//     10 == 10); // =>
// (!(true || false) &&
//   (6 >= 6)(
//     // =>
//     8 <= 4
//   )) ||
//   !(false && true); // =>
// !(10 > 8 || 5 < 2); // =>

let i = 6;

do {
  console.log(i); // affiche 6
  i++; // incremente i 6 + 1 = 7
} while (i < 5); // verifie la condition

console.log(i); // affiche 7

// exemple du break => arreter l'execution de la boucle si la variable i egale 4
for (let i = 0; i < 10; i++) {
  console.log(i); // affiche i
  if (i == 4) {
    // si i = 4
    break; // sortir de la boucle
  }
}

//  exemple du continue => on souhaite afficher que les nombres pairs entre 0 et 10
for (let i = 0; i <= 10; i++) {
  if (i % 2 != 0) {
    // verifie si i n'est pas un nombre pair
    continue; // ignore et passe a l'iteration suivante
  }
  console.log(i);
}

// idem
for (let i = 0; i <= 10; i++) {
  if (i % 2 == 0) {
    console.log(i);
  }
}

//  exemple du continue => on souhaite afficher que les nombres impairs entre 0 et 10
for (let i = 0; i <= 10; i++) {
  if (i % 2 == 0) {
    // verifie si i n'est pas un nombre impair
    continue; // ignore et passe a l'iteration suivante
  }
  console.log(i);
}

// let tab = ["Alin", 45];
// tab[3] = "2 rue de l'amour"; // ["Alin",45,"2 rue de l'amour"]
// // vue que le tableau n'a pas d'index 2 et 3 , on créer l'index 2 et 3 mais le 2 restera vide ("empty") et l'index 3 aura la valeur ajoutée
// console.log(tab);

// tab.push("0645444342"); //["Alin",45,"","2 rue de l'amour","0645444342"]
// console.log(tab);

// tab.unshift("Johanne"); //["Johanne", "Alin",45, "", "2 rue de l'amour","0645444342"]
// console.log(tab);

// tab[3] = "futur"; //["Johanne", "Alin",45, "futur", "2 rue de l'amour","0645444342"]
// console.log(tab);

// delete tab[3]; // ne fonctionnera pas le tableau restera tel quel
// console.log(tab)

let tableau = ["Cynthia", "Narcis", "Rahim", "Nawal", "Karima"];
let index = tableau.indexOf("Cynthia"); // Retournera 0 (la premiere Cynthia (un deuxième Cynthia était écrit à la place de Karima))
console.log(index); // 0

let newTab = tableau.slice(0, 3); // On "copie" le tableau à partir de l'Index 0 et s'arrête à l'index 3 ("Nawal") exclu.
console.log(newTab); // ["Cynthia","Narcis","Rahim"]

let tableauChiffre = [0, 5, 2, 7, 66, 349, 444, 321, 45, 32];

console.log(tableauChiffre.sort()); // [0, 2, 32, 321, 349, 444, 45, 5, 66, 7] (0 2 3 4 5 6 7 8 9)

// console.log(
//   tableauChiffre.sort(function (a, b) {
//     return a - b;
//   })
// ); ( à voir plus tard)

tableauChiffre.fill(0); // Remplace toutes les valeurs des index du tableau par 0
console.log(tableauChiffre); // 0 0 0 0 0 0 0 0 0 0

tableauChiffre.fill(3, 0, 7); // Remplace toutes les valeurs des index du tableau par 3 ( de l'index 0 à l'index 6 (7 est exclu))
console.log(tableauChiffre); // [3, 3, 3, 3, 3, 3, 3, 0, 0, 0]

let tab3 = ["Alexis", "Jérémy", "Michel", "Faïssal"];
let str = console.log(tab3.join(" ")); // Alexis Jérémy Michel Faïssal

console.log(tab3.reverse()); // ["Faïssal","Michel","Jérémy","Alexis"]

console.log(tab3.splice(2, 2)); // Supprime 2 éléments du tableau à partir de l'index 2 (Michel et Faïssal) ["Jérémy","Alexis"]

let tab4 = [2, 5, 8];

tab4.splice(3, 0, "a", "b"); // à partir de l'index 3 (qui n'existe pas dans le tableau tab4) il ne supprime aucun élément (0) et ensuite ajoute a et b au tableau
console.log(tab4);

let tab5 = [9, 11, 15];
console.log(tab4.concat(tab5));

let tab6 = tab4.concat(tab5); // réunit deux tableaux tab4 et tab5 en 1 ( [2,5,8,'a','b',9,11,15])

let tab7 = [1, 5, 9, 55];

console.log(tab7.map((e) => e < 10)); // retournera true ou false (chaque élément inférieur à 10 retournera true)

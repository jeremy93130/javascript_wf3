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

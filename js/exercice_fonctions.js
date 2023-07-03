//Ecrire une fonction maxMin qui prend trois paramètres
// les deux premiers sont des nombres (a et b)
// le troisième un boolean (c)
// Par defaut le troisième paramètre (c = true)

// 1 - si le paramètre c = true la fonction retourne le maximum entre a et b
// 2 - si le paramètre c = false la fonction retourne le minimum entre a et b

// exemple :

// maxMin(2,5,true) => 5
// maxMin(2,5,false) =>2

function minMax(a, b, c) {
  if ((c && a > b) || (!c && a < b)) {
    return a;
  } else if ((!c && a > b) || (c && a < b)) {
    return b;
  }
}

var result = minMax(350, 200, false);
console.log(result);

var result2 = minMax(350, 200, true);
console.log(result2);

// Ecrire une fonction sommeTab qui prend en paramètre un tableau composé de nombre , la fonction doit retourner la somme des éléments du tableau , exemple :
// someTab([1,6,9]) => 16

function someTab(array) {
  let sum = 0;
  for (i = 0; i < array.length; i++) {
    sum += array[i];
  }
  return sum;
}

let tab = [40, 75, 1023, 55, 34, 22, 2000];
let resultat = someTab(tab);
console.log(resultat);

// Ecrire une fonction maxTab qui prend en paramètre un tableau composé de
// nombres
// la fonction devra retourner le plus grand nombre du tableau
// exemple:
// maxTab([2, 7, 4, 0]) => 7

function maxTab(array) {
  let max = array[0]; // on considère la premiere valeur du tableau comme étant la plus grande
  for (i = 0; i < array.length; i++) {
    //Pour i allant de 0 à la taille du tableau
    // comparer max à la valeur de la position i du tableau
    if (max < array[i]) {
      // Si max est plus grand que l'un des éléments du tableau à chaque itération , on remplace sa valeur par celui ci.
      max = array[i];
    }
  }
  return max; // Retourne la valeur de la variable max apres la boucle et le if
}

let tab2 = [5, 8, 2, 33, 243, 28, 1392, 33, 4800];
var resultatTab = maxTab(tab2);
console.log(resultatTab);

// ecrire une fonction minTab qui prend en paramètre un tableau composé de
// nombres
// la fonction devra retourner le plus petit nombre du tableau
// exemple:
// minTab([2, 7, 4, 0]) => 0

function minTab(array) {
  let min = array[0]; // on considère la premiere valeur du tableau comme étant la plus petite
  for (i = 0; i < array.length; i++) {
    if (min > array[i]) {
      // Si min est plus petit que l'un des éléments du tableau à chaque itération , on remplace sa valeur par celui ci.
      min = array[i];
    }
  }
  return min;
}

let tab3 = [12, 48, 192, 17, 3, 1213, 1, 84, 67, 355];
var resultatTabMini = minTab(tab3);
console.log(resultatTabMini);

// ecrire une fonction maxMinTab qui prend en paramètre un tableau composé de
// nombres et un boolean
// ● si le deuxieme parametre égale true la fonction devra retourner le plus
// grand nombre du tableau
// ● sinon elle retournera le plus petit
// exemple:
// maxMinTab([2, 7, 4, 0], true) => 7
// maxMinTab([2, 7, 4, 0], false) => 0

function maxMinTab(array, boolean) {
  let min = array[0];
  let max = array[0];
  for (let i = 0; i < array.length; i++) {
    if (boolean && max < array[i]) {
      max = array[i];
    } else if (!boolean && min > array[i]) {
      min = array[i];
    }
  }
  if (boolean) {
    return max;
  } else {
    return min;
  }
}

let tabMinMax = [43, 22, 198, 12, 1920, 13, 4, 78, 109];

let resultatMinMaxTab = maxMinTab(tabMinMax, true);

let resultatMinMaxiTab = maxMinTab(tabMinMax, false);
console.log(resultatMinMaxTab);
console.log(resultatMinMaxiTab);

//  Solution 2 :

function maxMiniTab(array, c) {
  if (c) {
    return maxTab(array);
  } else {
    return minTab(array);
  }
}

// Soit les tableaux suivants :
const array = [1, 12, 3, 67, 1, 23, 0, 87];
const array2 = [1, 1, 2, 3, 4, 5];
const array3 = [0];
const array4 = ["never gonna", "give you", "up"];
const array5 = ["never gonna", "let you", "down"];

/*crivez une fonction "verifSortAsc" qui prend en paramètre un tableau et 
vérifie qu'il est bien trié dans l'ordre ascendant.
La fonction devra retourner "true" si c'est le cas, "false" sinon.
Exemples :
verifSortAsc(array) => doit retourner "false"
verifSortAsc(array2) => doit retourner "true"*/

function verifSortAsc(array) {
  let estTrie = true; // Par defaut on considere que le tableau est trié
  let tab = []; // Déclare un tableau vide pour avoir une copy du tableau

  for (i = 0; i < array.length; i++) {
    // Remplir le tableau tab par les valeurs du tableau array
    tab.push(array[i]);
  }
  tab.sort(); // Trier tab

  for (i = 0; i < array.length; i++) {
    //Pour i allant de 0 à la taille du tableau (dans ce cas peu importe si c'est array.length ou tab.length);
    if (tab[i] == array[i]) {
      // Si tab[i] == array[i] estTrie = true
      estTrie = true;
    } else {
      // sinon
      estTrie = false; // estTrie = false
      break; // On sort de la boucle dès la premiere différence entre tab[i] et array[i] (pour éviter de boucler toute la boucle et retourner seulement true)
    }
  }
  return estTrie;
}

let verifSort = verifSortAsc(array5);
console.log(verifSort);

// Ecrivez une fonction "reverseWord" qui prend une chaîne de caractère en paramètre et qui retourne la chaîne de caractères inversée.
// Exemple :
// reverseWord("Hello World!") => doit retourner "!dlroW olleH"

function reverseWord(str) {
  let newStr = str.split("").reverse().join("");

  return newStr;
}

let newStr = reverseWord("Hello World ! ");

console.log(newStr);

function reverseArray(array) {
  return array.reverse();
}

function reverseWords(...words) {
  // ...words ( on ne sait pas combien de paramètre nous aurons besoin , donc il ajoutera autant de paramètres que nécessaires)
  let resultat = [];
  for (let i = 0; i < words.length; i++) {
    resultat.push(reverseWord(words[i]));
  }
  reverseArray(resultat);
  // words.map(reverseWord); //
  return resultat;
}

let reversedWords = reverseWords("Salut", "je", "m'appelle", "jeremy");
console.log(reversedWords);

function phrase(tab) {
  let resultat = reverseArray(reverseWords(...tab));
  return resultat;
}

const words = [
  "s.e.têrp",
  "sap",
  "setê'n",
  "suoV",
  "ces",
  "redoc",
  "av",
  "aç",
  "eénna",
  "etteC",
];

let reversed = phrase(words);

/*crire une fonction estPalindrome qui prend en paramètre une chaine de 
caractere
la fonction doit retourner true si le paramètre est un palindrome
dans le cas contraire elle doit retourner false
Un palindrome est un mot, une phrase, un nombre ou toute autre séquence de 
caractères qui reste identique dans les deux sens de lecture (gauche vers la 
droite et droite vers la gauche)
les mots Radar, Level, Civic, Deified, Madam, Kayak, Rotator, Stats sont des 
palindromes.*/

// function estPalindrome(string) {

// }

// var palindrome = estPalindrome("radar")

// console.log(palindrome)

// EXERCICE :

// Ecrire une variable âge;
// en utilisant la structure conditionnelle ternaire
// écrire un code qui permet d'afficher le message bien si la note est supérieure ou egal à 15
// mauvais si note est strictement inférieure à 15

function notation(nb) {
  nb >= 15 ? console.log("Très bien") : console.log("Mauvais");
}

notation(11)

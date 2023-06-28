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

let resultat = someTab([40, 75, 1023, 55, 34, 22, 2000]);
console.log(resultat);

// Ecrire une fonction maxTab qui prend en paramètre un tableau composé de
// nombres
// la fonction devra retourner le plus grand nombre du tableau
// exemple:
// maxTab([2, 7, 4, 0]) => 7

function maxTab(array) {
  for (i = 0; i < array.length; i++) {
    return Math.max(...array);
  }
}
var resultatTab = maxTab([5, 8, 2, 33, 243, 28, 1392, 33]);
console.log(resultatTab);

// ecrire une fonction minTab qui prend en paramètre un tableau composé de
// nombres
// la fonction devra retourner le plus petit nombre du tableau
// exemple:
// minTab([2, 7, 4, 0]) => 0

function minTab(array) {
  for (i = 0; i < array.length; i++) {
    return Math.min(...array);
  }
}

var resultatTabMini = minTab([12, 48, 192, 17, 3, 1213, 1, 84, 67, 355]);
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
  for (i = 0; i < array.length; i++) {
    if (boolean) {
      return Math.max(...array);
    } else {
      return Math.min(...array);
    }
  }
}

let resultatMinMaxTab = maxMinTab(
  [43, 22, 198, 12, 1920, 13, 4, 78, 109],
  true
);

let resultatMinMaxiTab = maxMinTab(
  [43, 22, 198, 12, 1920, 13, 4, 78, 109],
  false
);
console.log(resultatMinMaxTab);
console.log(resultatMinMaxiTab);

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
  for (i = 0; i < array.length; i++) {
    if (array.sort() === array) {
      return true;
    } else {
      return false;
    }
  }
}

let verif = verifSortAsc(array)
console.log(array)

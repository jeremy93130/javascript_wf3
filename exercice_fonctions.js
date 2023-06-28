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

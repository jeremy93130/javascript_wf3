//  1 - Déclarer un tableau vide
//  2 - Générer une boucle tant que le tableau n'a pas 5 nombres
//  3 - Verifier que le chiffre n'est pas dans le tableau et le pousser s'il n'y est pas
//  4 - Trier et afficher le resultat

let array = [];

do {
  let aleatoire = Number(Math.floor(Math.random() * 50));
  if (!array.includes(aleatoire)) {
    array.push(aleatoire);
    // console.log(array);
    array.sort((a, b) => a - b);
    $("p").text(`Numéros Gagnants : ${array}`);
  }
} while (array.length < 5);
// 
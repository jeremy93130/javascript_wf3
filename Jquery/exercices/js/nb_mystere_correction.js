// On récupère tous les boutons
let newGame = $("#nouveau"); // C'est le bouton nouveau jeu
let solution = $("#solution"); // c'est le bouton solution
let propose = $("#proposer"); // c'est le bouton proposer
let monForm = $("#monform"); // Mon formulaire

// Le nombre d'essai
let nbessai = 1;
$("#essai").val(nbessai);

let randomNumber = generateRandomNumber(51); // C'est le nombre aléatoire entre 0 et 50

// créer une fonction qui permet de générer un nombre aléatoire
function generateRandomNumber(max) {
  return Math.floor(Math.random() * max);
}
newGame.on("click", () => {
  monForm[0].reset();
  randomNumber = generateRandomNumber(51);
  $("#proposition").attr("disabled", false);
  $("#proposer").attr("disabled", false);
  $("#essai").val(nbessai);
});

// le bouton solution quand on clique dessus
solution.on("click", (e) => {
  e.preventDefault();
  // Affiche le nombre mystère dans "message"(valeur de message)
  $("#message").val(`le nombre Mystere est :${randomNumber}`);
  $("#proposition").attr("disabled", true);
  $("#proposer").attr("disabled", true);
});

// Le bouton propose avec une autre syntaxe
// Le bouton propose :
// 1 - Verifie si le nombre dessai n'est pas atteint
// Si le nombre d'essai n'est pas atteint
//  Incrémente le nombre d'essais
//     Recupère la valeur proposée par l'utilisateur
//     il compare avec le nombre mystère (randomNumber)
//         Si le nombre mystère est plus petit il affiche le message :
//          "Veuillez essayer avec un nombre plus grand"
//         Si le nombre mystère est plus grand il affiche le message :
//          "Veuillez essayer avec un nombre plus petit"
//         Si le nombre mystère est égal il affiche le message :
//          "Bravo, vous l'avez !"
//     Il affiche l'historique des propositions dans le input reponse, chaque proposition        est separée par un tiret
// Si le nombre d'essais est égal à 7 on affiche : "game over"

propose.click((e) => {
  e.preventDefault();
  // code ici
  if (nbessai < 7) {
    if ($("#proposition").val() != "") {
      nbessai++;
      $("#essai").val(nbessai);
      let proposition = $("#proposition").val();
      if (proposition < randomNumber) {
        $("#message").val("Veuillez essayer avec un nombre plus grand");
      } else if (proposition > randomNumber) {
        $("#message").val("Veuillez essayer avec un nombre plus petit");
      } else {
        $("#message").val("bravo, vous avez gagné !");
      }

      if ($("#reponse").val() == "") {
        $("#reponse").val(proposition);
      } else {
        $("#reponse").val($("#reponse").val() + "-" + proposition);
      }
    }

    $("#proposition").val("");
  } else {
    propose.attr("disabled", true);
    $("#proposer").attr("disabled", true);
  }
});

console.log(randomNumber);

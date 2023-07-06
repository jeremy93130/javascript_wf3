// Je déclare une variable qui retourne un nombre aléatoire entre 0 et 50
let aleatoire = Math.floor(Math.random() * 51);
console.log(aleatoire);

// Je déclare une variable qui prend 7 en valeur (le nombre d'essais disponibles à l'utilisateur)
let essai = 7;
// je met la variable essai dans la valeur de l'input (la valeur sera 7)
$("#essai").val(essai);
let trouve = false;

$("#solution").on("click", (e) => {
  e.preventDefault();
  $("#message").val("La solution est : ");
  $("#reponse").val(aleatoire);
  $("#proposer").attr("disabled", true);
  $("#proposition").attr("disabled", true);
});

$("#proposer").on("click", (e) => {
  e.preventDefault();
  if (essai > 0 && !trouve) {
    if (isNaN($("#proposition").val()) || $("#proposition").val() === "") {
      $("#message").val("Merci d'entrer une valeur décimale ! ");
    } else {
      essai--;
    }
    $("#essai").val(essai);
    if (
      $("#proposition").val() == aleatoire &&
      $("#proposition").val() !== ""
    ) {
      $("#message").val(`Vous avez trouvé le nombre mystère, félicitations !`);
      $("#message").css("color", "black");
      alert("Félicitations, vous avez trouvé le nombre mystère");
      $("#reponse").val(aleatoire);
      $("#proposer").attr("disabled", true);
    } else if (
      $("#proposition").val() > aleatoire &&
      $("#proposition").val() !== ""
    ) {
      $("#message").val(`nombre trop grand`);
    } else if (
      $("#proposition").val() < aleatoire &&
      $("#proposition").val() !== ""
    ) {
      $("#message").val(`nombre trop petit`);
    }
  } else {
    $("#message").val(`nombre de tours achevé`);
    $("#proposition").attr("disabled", true);
  }
});

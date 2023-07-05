let aleatoire = Math.floor(Math.random() * 101);
console.log(aleatoire);
let essai = 7;
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

// Attend le chargement de la page avant d'executer le code dans l'accolade
$(document).ready(() => {
  //   // Pour afficher avec animation ( ici 5000 = 5000 milisecondes = 5 secondes )
  //   $("#monElement").show(5000);
  //   //   // Pour cacher avec animation
  //   $("#monElement").hide(5000);
  //   //   // Pour afficher avec un effet fondu
  //   $("#monElement").fadeIn(5000);
  //   //   //Pour cacher avec un effet fondu
  //   $("#monElement").fadeOut(5000);
  //   //Pour cacher avec un effet glissement du bas vers le haut
  //   $("#monElement").slideUp(5000);
  //   //Pour cacher avec un effet glissement du haut vers le bas
  //   $("#monElement").slideDown(5000);
});

$("#menu").on("click", () => {});

// Afficher et masquer des éléments avec animate :

setInterval(() => {
  // Execute  le code à l'interieur (animations en boucle)
  $("#monElement").animate(
    {
      opacity: 0.5,
      fontSize: "3em",
      rotate: "-180deg",
    },
    5000
  );

  $("#monElement").animate(
    {
      opacity: 1,
      fontSize: "1em",
      rotate: "0deg",
    },
    5000
  );
}, 5000); //toutes les 5 secondes


// slidetoggle :

$(".toggleSlide").on("click", () => {
    $(".maDiv").slideToggle()
})

// On récupère le checkbox + les conditions + le bouton
let validation = $("#validation");
let conditions = $("#conditions");
let accepte = $("#accepte");

// $("#monform").on("submit", (e) => {
//   e.preventDefault();
// });

validation.on("click", (e) => {
  //On récupère les valeurs des inputs
  let inputName = $("#nom").val();
  let email = $("#email").val();
  let tel = $("#telephone").val();
  if (inputName == "") {
    e.preventDefault();
    $("#nom").css({
      border: "2px solid red",
    });
    $("#nom").attr("placeholder", "Veuillez renseigner votre nom");
  } else {
    $("#nom").css({
      border: "2px solid black",
    });
  }
  if (email == "") {
    e.preventDefault();
    $("#email").css({
      border: "2px solid red",
    });
    $("#email").attr("placeholder", "Veuillez renseigner votre e-mail");
  } else {
    $("#email").css({
      border: "2px solid black",
    });
  }
  if (tel == "") {
    e.preventDefault();
    $("#telephone").css({
      border: "2px solid red",
    });
    $("#telephone").attr("placeholder", "Veuillez renseigner votre n° tel");
  } else {
    $("#telephone").css({
      border: "2px solid black",
    });
  }
  if (!conditions.is(":checked")) {
    e.preventDefault();
    accepte.css({
      color: "red",
    });
  } else {
    accepte.css({
      color: "black",
    });
  }
});

// On récupère le select id=plat

function tva(nb1) {
  return Math.floor(nb1 * 1.2);
}
let plat = $("#plat");
let dessert = $("#dessert");

plat.on("change", () => {
  let tvaValue;
  switch (plat.val()) {
    case "thiebou":
      $("#ht").val("15");
      tvaValue = tva(15);
      $("#ttc").val(tvaValue);
      break;

    case "salade":
      $("#ht").val("12");
      tvaValue = tva(12);
      $("#ttc").val(tvaValue);
      break;

    case "sushi":
      $("#ht").val("11");
      tvaValue = tva(11);
      $("#ttc").val(tvaValue);
      break;

    case "poulet":
      $("#ht").val("9");
      tvaValue = tva(9);
      $("#ttc").val(tvaValue);
      break;
  }
});

dessert.on("change", () => {
  let tvaValue;
  switch (dessert.val()) {
    case "churros":
      $("#ht").val("15");
      tvaValue = tva(15);
      $("#ttc").val(tvaValue);
      break;

    case "biscuits":
      $("#ht").val("12");
      tvaValue = tva(12);
      $("#ttc").val(tvaValue);
      break;

    case "buche":
      $("#ht").val("11");
      tvaValue = tva(11);
      $("#ttc").val(tvaValue);
      break;

    case "fromage":
      $("#ht").val("9");
      tvaValue = tva(9);
      $("#ttc").val(tvaValue);
      break;
  }
});

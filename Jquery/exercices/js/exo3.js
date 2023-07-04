$("#loginForm").on("submit", (e) => {
  if ($("#username").val() === "" && $("#password").val() === "") {
    e.preventDefault();
    $("#errorMessage").text(
      "Veuillez Entrer un Pseudonyme et un Mot de Passe! "
    );
  } else if ($("#username").val() === "") {
    e.preventDefault();
    $("#errorMessage").text("Veuillez entrer un Pseudo");
  } else if ($("#password").val() === "") {
    e.preventDefault();
    $("#errorMessage").text("Veuillez entrer un Mot de Passe");
  }
});

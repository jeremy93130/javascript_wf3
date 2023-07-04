// Version normale

$("#dropdown").on("change", () => {
  console.log("texte au hasard");
  if ($("#dropdown").val() == "1") {
    $("#message").text(`vous avez choisis ${$("#dropdown").val()}`);
  } else if ($("#dropdown").val() == "2") {
    $("#message").text(`vous avez choisis ${$("#dropdown").val()}`);
  } else {
    $("#message").text(`vous avez choisis ${$("#dropdown").val()}`);
  }
});

// Version intermédiaire :

$("#dropdown").on("change", () => {
  $("#message").text(` Vous avez choisi l'option ${$("#dropdown").val()}`);
});

// Version JavaScript
let message = document.getElementById("message");

document.getElementById("dropdown").addEventListener("change", () => {
  document.getElementById("message").textContent = `Vous avez choisi l'option ${
    document.getElementById("dropdown").value
  }`;
});

// // Récuperer tous les éléments :

// let button = document.getElementById("button"); // Pour récuperer le input type Submit
// var valeur = document.getElementById("valeur"); // Pour récuperer le input
// var txt = document.querySelector(".txt"); // Pour récuperer la div où le texte sera

// // Ecouter le click sur le bouton
// button.addEventListener("click", (e) => {
//   e.preventDefault();
//   // récuperer la valeur du input
//   let val = valeur.value;

//   // créer une balise <p></p> en html
//   let parag = document.createElement("p");
//   // Ajouter le contenu du input dans le paragraphe
//   parag.textContent = val;

//   parag.addEventListener("click", () => {
//     parag.classList.toggle("red");
//   });
//   // Ajouter le paragraphe dans la div
//   txt.appendChild(parag);
//   valeur.value = "";
// });

$("#button").on("click", (e) => {
  e.preventDefault();

  let newPara = $("<p></p>");

  newPara.text($("#valeur").val());

  $(".txt").append(newPara);

  newPara.on("click", () => {
    newPara.toggleClass("red");
  });
});

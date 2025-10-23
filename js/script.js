// alert("bonjour!")

// déclaration de variable
// les boutons plus
const btnPlus = Array.from(document.getElementsByClassName("fa-plus-circle"));
// console.log(btnPlus)
// -----------------------------------------------------

//les boutons moins
const btnMoins = Array.from(document.querySelectorAll(".fa-minus-circle"));
// console.log(btnMoins);

// --------------------------------------------------------

// les boutons coeurs like et dislike
const btnCoeur = Array.from(document.getElementsByClassName("fa-heart"));
// console.log(btnCoeur)

// ----------------------------------------------------------
// les boutons poubelle pour supprimer le produit
const btnTrash = Array.from(document.getElementsByClassName("fa-trash-alt"));
// console.log(btnTrash);
const card = Array.from(document.getElementsByClassName("card"));
// console.log(card);

// ---------------------------------------------------------
//code qui incrémente la quantité des produits
for (let i = 0; i < btnPlus.length; i++) {
  btnPlus[i].addEventListener("click", function () {
    // console.log(btnPlus[i].nextElementSibling.textContent);
      btnPlus[i].nextElementSibling.textContent++;
      prixTotal()
  });
}

//code qui décrémente la quantité des produits sans déscendre en dessous de 0

for (let moins of btnMoins) {
  moins.addEventListener("click", function () {
    // console.log(moins.previousElementSibling.innerHTML);
    if (moins.previousElementSibling.innerHTML > 0)
          moins.previousElementSibling.innerHTML--;
      prixTotal();
  });
}

// code qui change la couleur des coeur rouge/noir
for (let coeur of btnCoeur) {
  coeur.addEventListener("click", function () {
    if (coeur.style.color === "red") {
      coeur.style.color = "black";
    } else {
      coeur.style.color = "red";
    }
  });
}

//code qui supprime les cartes
for (let i in btnTrash) {
  btnTrash[i].addEventListener("click", function () {
      card[i].remove();
      prixTotal();
  });
}

//fonction Prix Total
function prixTotal() {
  // les variables = deux tableau (prix unitaire/ quantité)
  const prixUnitaire = Array.from(
    document.getElementsByClassName("unit-price")
  );
  //   console.log(prixUnitaire[0].innerHTML);
  const quantite = Array.from(document.getElementsByClassName("quantity"));
  // console.log(quantite[0].innerHTML)
  let total = 0;
  for (let i in quantite) {
    total = total + parseFloat(quantite[i].innerHTML) * parseFloat(prixUnitaire[i].innerHTML);
  }

  document.querySelector("#total").textContent = total + " $";
}


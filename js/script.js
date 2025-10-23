//test
// alert('Hello!')
// déclaration de variables (globales)
// boutons +
const btnPlus = Array.from(document.getElementsByClassName("fa-plus-circle"));
// console.log(btnPlus);
// console.log(btnPlus[0].nextElementSibling.innerHTML)

// boutons -
const btnMoins = Array.from(document.querySelectorAll(".fa-minus-circle"));
// console.log(btnMoins);

//trash (poubelle)
const carteProduit = Array.from(document.getElementsByClassName("card"));
// console.log(carteProduit);
const btnTrash = Array.from(document.getElementsByClassName("fa-trash-alt"));
// console.log(btnTrash);

// coeurs pour like et dislike
const btnCoeur = Array.from(document.getElementsByClassName("fa-heart"));
// console.log(btnCoeur)
// -------------------------------------------------------------------------------
// fonction d'incrémentation du bouton plus
for (let i = 0; i < btnPlus.length; i++) {
  btnPlus[i].addEventListener("click", function () {
    // console.log(btnPlus[i]);
    btnPlus[i].nextElementSibling.innerHTML++;
    totalPrix();
  });
}
// ---------------------------------------------------------------------------------
//fonction décrémentation du bouton moins
for (let decr of btnMoins) {
  decr.addEventListener("click", function () {
    // console.log('ok')
    if (decr.previousElementSibling.innerHTML > 0) {
      decr.previousElementSibling.innerHTML--;
      totalPrix();
    }
  });
}

//fonction de suppression de toute la carte
for (let i in carteProduit) {
  btnTrash[i].addEventListener("click", function () {
    carteProduit[i].remove();
    totalPrix();
  });
}

//fonction de changement de couleur au click
for (let coeur of btnCoeur) {
  coeur.addEventListener("click", function () {
    if (coeur.style.color === "red") {
      coeur.style.color = "black";
    } else {
      coeur.style.color = "red";
    }
  });
}

//fonction pour calculer le prix total
function totalPrix() {
  // récupérer le tableau des prix unitaires de chaque produit
  const prixUnit = Array.from(document.getElementsByClassName("unit-price"));
  //   console.log(prixUnit);
  // --------------------------------------------------------------------------
  //récupérer le tableu des quantités de chaque produits
  const quantity = Array.from(document.getElementsByClassName("quantity"));
  //   console.log(quantity);
  // ------------------------------------------------------------------------------
  //  initialisation somme des produits = prix total
    var prixTotal = 0;
//boucle qui va calculer le prix total
  for (let i in prixUnit) {
    prixTotal =
      prixTotal +
      parseFloat(prixUnit[i].innerHTML) * parseFloat(quantity[i].innerHTML);
    //   console.log(typeof parseFloat(prixUnit[i].innerHTML));
    }
//l'affichage du prix total à l'emplacement de ma page
  document.querySelector(".total").innerHTML = prixTotal + " $";
}


// ****parseFloat pour convertir string-----> number
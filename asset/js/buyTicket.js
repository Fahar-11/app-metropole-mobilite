// Déclare les variables
let buttonBuyTitre = document.querySelector("#btn-acheter-titres");
let pageAchatTitre1 = document.querySelector(".acheter-titres-1");
let page2 = document.querySelector(".contenu-page-2");
let chiffre = document.querySelector('.chiffre');
let chiffreTwo = document.querySelector('.chiffreTwo')
let buttonsPlus = document.querySelector('.plus');
let buttonsMoins = document.querySelector('.moins');
let buttonPayer = document.querySelector('#btn-acheter');
let panier = document.querySelector('.panier');
let checkboxCGV = document.querySelector('#cgv');
let buttonPay = document.querySelector('.btn-payer-before');
let formPayment = document.querySelector('.form-payment');
let buttonValider = document.querySelector('.btn-valider-payment');
let paiementAccepte = document.querySelector('.paiement-accepte');
let buttonFermer = document.querySelector("#fermer");
let pageUseTwo = document.querySelector(".pageUseTwo");
let annulation = document.querySelector(".annuler-retourner");
let numberCard = document.getElementsByName("number_card");
let buttonBuyTitreDeux = document.querySelector("#Acheter-des-titres");
let buttonBuyTitreTrois = document.querySelector("#Acheter-des-titres-trois");
let lienAccueil = document.querySelector("#lien-accueil");
let lienPanier = document.querySelector("#lien-panier");



// Écoute le click sur le bouton d'achat des titres afin d'apparaître la page d'achat de titres
buttonBuyTitre.addEventListener("click", function connexion(e) {
    pageAchatTitre1.style.display = "block";
    page2.style.display = "none";
});

// Déclare la variable number 
let number = 0;

// Établit la fonction qui d'ajouter un ticket à l'achat
function increaseNumber() {
    number++;
    chiffre.textContent = number;
    if (number > 0) {
        buttonPayer.style.display = "block";
    }
}

function increaseNumberTwo(){
    number++;
    chiffreTwo.textContent = number;
    if (number > 0) {
        buttonPayer.style.display = "block";
    }
}

// Établit la fonction qui d'enlever un ticket à l'achat
function lowerNumber() {
    number--;
    chiffre.textContent = number;
    if (number <= 0) {
        buttonPayer.style.display = "none";
    }
}

function lowerNumberTwo() {
    number--;
    chiffreTwo.textContent = number;
    if (number <= 0) {
        buttonPayer.style.display = "none";
    }
}




// Écoute le click sur le bouton de paiement pour me rediriger vers le panier                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  
buttonPayer.addEventListener("click", function redirection(e) {
    pageAchatTitre1.style.display = "none";
    panier.style.display = "block";
});

// Écoute le cochage de la case et change la couleur du bouton de paiement
checkboxCGV.addEventListener('change', function () {
    if (this.checked) {
        buttonPay.style.backgroundColor = '#d92e10';
    } else {
        buttonPay.style.backgroundColor = '';
    }
});

// Écoute le click sur le bouton de paiement pour me rediriger vers le formulaire de paiement 
buttonPay.addEventListener("click", function redirectionDeux(e) {
    panier.style.display = "none";
    formPayment.style.display = "block";
});


// Écoute le click sur le bouton de validation pour me rediriger vers la confirmation du paiement 
buttonValider.addEventListener("click", function redirectionTrois(e) {
    formPayment.style.display = "none";
    paiementAccepte.style.display = "block";
});

// Écoute le click sur le bouton de fermeture de la confirmation pour me rediriger vers la page d'utilisation du ticket 
buttonFermer.addEventListener("click", function redirectionQuatre(e) {
    paiementAccepte.style.display = "none";
    pageUseTwo.style.display = "block";
});

// Écoute le click sur le bouton de l'annulation du paiement pour me rediriger vers la page d'achat de ticket 
annulation.addEventListener("click", function returnToBoutique(e) {
    formPayment.style.display = "none";
    pageAchatTitre1.style.display = "block";
});

// Écoute les click sur les boutons d'achats pour rediriger vers la page d'achat de ticket 
buttonBuyTitreDeux.addEventListener("click", function redirectionQuatre(e){
    pageAchatTitre1.style.display = "block";
    pageUseTwo.style.display = "none";
} )

// Écoute les click sur les boutons d'achats pour rediriger vers la page d'achat de ticket
buttonBuyTitreTrois.addEventListener("click", function redirectionNeuf (e){
    pageSelectedTwo.style.display = "none";
    pageAchatTitre1.style.display = "block";
})

// Écoute les clicks sur les liens de retour à la page précédente
lienAccueil.addEventListener("click", function retourUn (e){
    page2.style.display = "block";
    pageAchatTitre1.style.display = "none";
});

lienPanier.addEventListener("click", function retourDeux (e){
    pageAchatTitre1.style.display = "block";
    panier.style.display = "none";
})

















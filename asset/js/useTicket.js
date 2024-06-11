// Déclare les variables
let ticket = document.querySelector(".ticket");
let menu = document.querySelector(".menu");
let checkboxLeBus = document.querySelector("#le-bus");
let buttonUse = document.querySelector("#utiliser");
let pageVoyage = document.querySelector(".page-voyage");
let PageUseTwo = document.querySelector(".pageUseTwo");
let menuPageVoyage = document.querySelector(".menuPageVoyage");
let crossOne = document.querySelector("#crossOne");
let pageQrCode = document.querySelector(".page-metro-controle");
let buttonMetroControle = document.querySelector("#metro-ou-controle");
let pageSelectedTwo = document.querySelector(".pageSelectedTwo");
let crossTwo = document.querySelector("#crossTwo");
let crossThree = document.querySelector("#crossThree")
let lienEticket = document.querySelector("#lien-page-selected-two");
let ticketSelected = document.querySelector("#ticket-selected");
let msgError = document.querySelector('.msg-error');
let ticketEnCours = document.querySelector('#ticket-en-cours');


// Écoute le click sur le ticket pour faire apparaître le menu
ticket.addEventListener("click", function redirectionCinq(e) {
    menu.style.display = "block";
});

// Écoute le click sur le checkbox pour permettre la possibilité d'utilisation du ticket
checkboxLeBus.addEventListener('change', function () {
    if (this.checked) {
        buttonUse.style.backgroundColor = '#d92e10';
    } else {
        buttonUse.style.backgroundColor = '';
    }
});

// Établit le paramétrage du minuteur
function startTimer(duration, display) {
    var timer = duration, minutes, seconds;
    setInterval(function () {
        minutes = parseInt(timer / 60, 10)
        seconds = parseInt(timer % 60, 10);

        minutes = minutes < 10 ? "0" + minutes : minutes;
        seconds = seconds < 10 ? "0" + seconds : seconds;

        display.textContent = minutes + ":" + seconds;

        if (--timer < 0) {
            timer = duration;
        }
    }, 1000);
}

// Permet la mise en marche du minuteur
function start() {
    var oneHour = 60 * 60,
        display = document.querySelector('#time');
    startTimer(oneHour, display);
};

// Permet les différentes redirections
buttonUse.addEventListener("click", function redirectionCinq(e) {
    pageVoyage.style.display = "block";
    PageUseTwo.style.display = "none";
    menu.style.display = "none";
    menuPageVoyage.style.display = "block";
});

buttonMetroControle.addEventListener("click", function redirectionSix(e) {
    pageVoyage.style.display = "none";
    pageQrCode.style.display = "block";
    menuPageVoyage.style.display = "none";
});

crossOne.addEventListener("click", function redirectionSix() {
    pageVoyage.style.display = "block";
    menuPageVoyage.style.display = "block";
    pageQrCode.style.display = "none";
});


lienEticket.addEventListener("click", function redirectionSept() {
    pageSelectedTwo.style.display = "block";
    pageVoyage.style.display = "none";
    menuPageVoyage.style.display = "none";
})

ticketSelected.addEventListener("click", function redirectionHuit(){
    pageSelectedTwo.style.display = "none";
    pageVoyage.style.display = "block";
})

ticketEnCours.addEventListener("click", function redirectionOnze(){
    menuPageVoyage.style.display = "block";
})

// Permet la dissimulation d'éléments

crossTwo.addEventListener("click", function undisplay() {
    menu.style.display = "none";
    pageVoyage.style.display = "none";
    menuPageVoyage.style.display = "none";
});

crossThree.addEventListener("click", function undisplay() {
    menu.style.display = "none";
    pageVoyage.style.display = "block";
    menuPageVoyage.style.display = "none";
});



/* let media430 = window.matchMedia("(min-width : 430px)");
console.log(media430);

if(media430.matches){
    msgError.style.error = "block";
    page2.style.display = "none";
    pageAchatTitre1.style.display = "none";

} */
  









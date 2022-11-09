//Calcolo biglietto treno
const passengerName = document.getElementById('passengerName');
const passengerSurname = document.getElementById('passengerSurname');
const distance = document.getElementById('distanceKm');
const passengerAge = document.getElementById('passengerAge');
const basePrice = "0.21";
const calculate = document.querySelector(".calculate");
const cancel = document.querySelector(".cancel");
const wagon = document.querySelector(".ms_carrozza");
const code = document.querySelector(".ms_code-cp");

let ticketPrice, discountUnder, discountOver, priceUnder, priceOver, message;

// Display passenger name
function heyName() {
  var heyName = document.getElementById('passengerName').value;
  var nameDisplay = document.getElementById('ms_name-cta');
  nameDisplay.innerHTML = heyName;
}

// Display passenger surname
function heySurname() {
  var heySurname = document.getElementById('passengerSurname').value;
  var surnameDisplay = document.getElementById('ms_surname-cta');
  surnameDisplay.innerHTML = heySurname;
}

calculate.addEventListener("click",

  function () {
    // Genera Codice Treno Random
    trainCode = Math.floor(Math.random() * 90000) + 10000;
    document.getElementById('code').innerHTML = trainCode;

    // Genera Numero Carrozza Random
    trainWagon = Math.floor(Math.random() * 11) + 1;
    document.getElementById('wagon').innerHTML = trainWagon;

    //Numero di KM da percorrere
    distanceKm = distance.value;

    //Età del passeggero
    age = passengerAge.value;

    //Il prezzo e' definito in base ai KM (0.21€ al KM)
    ticketPrice = basePrice * distanceKm;

    // Variabili dello sconto applicato
    discountUnder = ((ticketPrice / 100) * 20);
    discountOver = ((ticketPrice / 100) * 40);

    // //Calcolo costo biglietto scontato
    priceUnder = (ticketPrice - discountUnder);
    priceOver = (ticketPrice - discountOver);

    //Alert sconto ricevuto
    if (age > 6 && age < 18) {
      discount = ("Hai diritto ad uno sconto del 20% ovvero: " + (discountUnder.toFixed(2)) + " €");
      message = `${priceUnder.toFixed(2)}€`;

    } else if (age > 17 && age < 66) {
      message = `${ticketPrice.toFixed(2)}€`;

    } else if (age > 65) {
      discount = ("Hai diritto ad uno sconto del 40% ovvero: " + (discountOver.toFixed(2)) + " €");
      message = `${priceOver.toFixed(2)}€`;

    } else if (age <= 6) {
      discount = ("Il biglietto è gratuito!");
      message = ("FREE");
    }

    //  clear input field
    passengerName.value = '';
    passengerSurname.value = '';
    distance.value = '';
    passengerAge.value = '';

    document.getElementById('ms_ticket-price').innerHTML = message;
    document.querySelector('.ms_discount').innerHTML = discount;
  }
);

cancel.addEventListener("click",

  function () {
    //  clear input field
    passengerName.value = '';
    passengerSurname.value = '';
    distance.value = '';
    passengerAge.value = '';

    // clear passenger name
    var heyName = document.getElementById('passengerName').value = '';
    var nameDisplay = document.getElementById('ms_name-cta');
    nameDisplay.innerHTML = heyName;

    var heySurname = document.getElementById('passengerSurname').value = '';
    var surnameDisplay = document.getElementById('ms_surname-cta');
    surnameDisplay.innerHTML = heySurname;

    message = '';
    document.getElementById('ms_ticket-price').innerHTML = message;

    discount = '';
    document.querySelector('.ms_discount').innerHTML = discount;
  }
);
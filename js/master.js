//Calcolo biglietto treno
const passengerName = document.getElementById('passengerName');
const passengerSurname = document.getElementById('passengerSurname');
const distance = document.getElementById('distanceKm');
const passengerAge = document.getElementById('passengerAge');
const basePrice = "0.21";
const calculate = document.querySelector(".calculate");

let ticketPrice, discountUnder, discountOver, priceUnder, priceOver, message;

calculate.addEventListener("click",

  function () {

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
    if (age < 18) {
      alert("Hai diritto ad uno sconto del 20% ovvero: " + (discountUnder.toFixed(2)) + " €");
      message = `Il prezzo del tuo biglietto scontato è di: ${priceUnder.toFixed(2)} €`;

    } else if (age > 17 && age < 66) {
      message = `Il costo del tuo biglietto è di: ${ticketPrice.toFixed(2)} €`;

    } else if (age > 65) {
      alert("Hai diritto ad uno sconto del 40% ovvero: " + (discountOver.toFixed(2)) + " €");
      message = `Il prezzo del tuo biglietto scontato è di: ${priceOver.toFixed(2)} €`;
    }

    document.getElementById('pricing').innerHTML = message;
  }
);
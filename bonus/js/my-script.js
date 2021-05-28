var number_km = prompt('Inserisci quanti km vuoi percorrere');
var date_of_birth = prompt('Inserisci la tua data di nascita');
var number_age = 2021 - parseInt(date_of_birth);
var ticket_price = 0.21 * parseInt(number_km) ;
var x = ticket_price * 20 / 100;
var y = ticket_price * 40 / 100;
var deal_20_price = ticket_price - x
var deal_40_price = ticket_price - y
document.getElementById ('sconto').innerHTML = 'Questo è il prezzo del biglietto ';


if (number_age < 18) {
    document.getElementById ('sconto').innerHTML += + deal_price_20.toFixed(2) + '€';
}

else if (number_age >= 65) {
    document.getElementById ('sconto').innerHTML += + deal_40_price.toFixed(2) + '€';
}

else {
    document.getElementById ('sconto').innerHTML +=+ ticket_price.toFixed(2) + '€';
}
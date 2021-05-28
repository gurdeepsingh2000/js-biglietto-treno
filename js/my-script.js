var number_km = prompt('Inserisci quanti km vuoi percorrere');
var number_age = prompt('Inserisci la tua età');
var x = ticket_price * 20 / 100;
var y = ticket_price * 40 / 100;
var ticket_price = 0.21

if (number_age < 18) {
    document.getElementById ('sconto').innerHTML = 'Questo è il prezzo scontato' + number_km * ticket_price - x ;
}

else if (number_age > 65) {
    document.getElementById ('sconto').innerHTML = 'Questo è il prezzo scontato' + ((number_km * ticket_price) - ( number_km * y)) ;
}

else if ( number_age => 18  && number_age <= 65) {
    document.getElementById ('sconto').innerHTML = number_km * ticket_price ;
}
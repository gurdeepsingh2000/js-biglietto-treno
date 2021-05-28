var number_km = prompt('Inserisci quanti km vuoi percorrere');
var number_age = prompt('Inserisci la tua età');
var ticket_price = 0.21 * parseInt(number_km) ;
var x = ticket_price * 20 / 100;
var y = ticket_price * 40 / 100;
var deal_20_price = ticket_price - x
var deal_40_price = ticket_price - y
document.getElementById ('sconto').innerHTML = ticket_price;


if (number_age < 18) {
    document.getElementById ('sconto').innerHTML = 'Questo è il prezzo scontato ' + '€' + deal_price_20;
}

else if (number_age > 65) {
    document.getElementById ('sconto').innerHTML = 'Questo è il prezzo scontato ' + '€' + deal_40_price;
}

else if (number_age >= 18 && number_age <= 65 ) {
    document.getElementById ('sconto').innerHTML = 'Prezzo non scontato ' + '€' + ticket_price;
}
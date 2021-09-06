var a = prompt('Inserisci quanti km dovrai percorrere.');
var b = prompt('Inserisci il tuo aanno di nascita');
a = parseInt(a);
b = parseInt(b);

var t = new Date().getFullYear();


var age = t - b;
var biglietto = a * 0.21;

document.getElementById('km').innerHTML = 'I km da percorrere sono : ' + a;
document.getElementById('età').innerHTML = 'La tua età è : ' + age;

if (age < 18) {
    document.getElementById('sconto').innerHTML = 'Essendo minorenne hai diritto a uno sconto del 20%';
    var sconto18 = biglietto - (biglietto * 20 / 100);
    document.getElementById('costoBiglietto').innerHTML = 'Il costo del tuo biglietto è :  ' + sconto18.toFixed(2) ;
}
else if (age > 65){
    document.getElementById('sconto').innerHTML = 'Essendo un "over 65" ha diritto a uno sconto del 40%';
    var sconto65 = biglietto - (biglietto * 40 / 100);
    document.getElementById('costoBiglietto').innerHTML = 'Il costo del tuo biglietto è :  ' + sconto65.toFixed(2);
}
else{
    document.getElementById('sconto').innerHTML = 'Non ha diritto allo sconto perche non ha i requisiti richiesti';
    document.getElementById('costoBiglietto').innerHTML = 'Il costo del tuo biglietto è :  ' + biglietto.toFixed(2);

}
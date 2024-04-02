/*
  Gatti in fila
  Scrivi un programma che dato:
    a) Un numero totale di gatti
    b) Il numero dei gatti presenti in ogni fila
  Restituisca in output:
    - Il numero di file risultanti
    - Nel caso l'ultima fila risulti incompleta indicare il numero di gatti mancanti per completarla (quanti gatti mancano per arrivare a b?)

  Esempio:
    Input: numero di gatti = 44, gatti per fila = 6
    Output: numero di file = 8, gatti mancanti = 4

  Consigli:
  Per l'arrotondamento ti consiglio di non usare Math.round (arrotonda all'intero superiore solo da .5 in su),
  utilizza Math.ceil (arrotonda sempre all'intero superiore).

  http://www.imparareaprogrammare.it
*/

var a = gattitot = 100;
var b = gattifila = 6;

var d = a/b;

console.log('Numero di gatti totali = '+a);
console.log('Numero di gatti per fila = '+b);

var file = Math.ceil(d);
console.log('Numero di file = '+file);

var c = gattirimanenti = b-a%b;
console.log("Per completare l'ultima fila mancano = "+c);

const prompt =require ('prompt-sync')();

/*Trova il massimo, il minimo, di una lista di numeri
calcolate la media dell'array
indicate il numero piu' vicino alla media contenuto nell'array
specificate se il numero e' presente nell'array, oppure indicate quanto dista dai due numeri piu' vicini*/

lista = new Array();
let tot = 0;

tot = prompt ("Quanti numeri vuoi nell'array? ");

for (i=0; i<tot; i++){
    let numero = prompt ("Digita un numero: ");
    lista[i] = numero;
}

console.log(lista);

let massimo = Math.min.apply(null,lista);
console.log(massimo);

let minimo = Math.min.apply(null,lista);
console.log(minimo);
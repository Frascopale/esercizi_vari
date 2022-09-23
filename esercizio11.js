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
    lista[i] = Number(numero);
}

console.log(lista);

let massimo = Math.max.apply(null,lista);
console.log("Il numero massimo è " + massimo);

let minimo = Math.min.apply(null,lista);
console.log("Il numero massimo è " + minimo);

let lungh = lista.length;
console.log("Numero di elementi " + lungh);

function media (vettore){
    let somma=0;
    lungh = vettore.length;
        for(i=0 ; i< lungh ; i++){
            somma = somma+ vettore [i];
        }
    return somma/lungh;
}

let med= media(lista);
console.log("La media è: " +med);

function vicino (vettore,media){
    lungh = vettore.length;
        for(i=0 ; i< lungh ; i++){
            if (vettore[i]-media > 0){
                    
            } 
        }
    return somma/lungh;
}
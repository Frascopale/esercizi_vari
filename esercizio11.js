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
console.log("Il numero minimo è " + minimo);

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
    nvicino = vettore[0];
    
        for(i= 1; i< vettore.length ; i++){
           
            if( Math.abs(vettore[i]-media)<=Math.abs(nvicino-media)){
                nvicino=vettore[i];
                
            }
           
        }
    return nvicino;
}

let nvic= vicino(lista,med);
console.log("Il numero piu' vicino alla media contenuto nell'array è: " +nvic);

/*specificate se il numero e' presente nell'array, oppure indicate quanto dista dai due numeri piu' vicini*/




lista.sort(function(a, b) {
  return a - b;
});
console.log(lista);

function vicino2(lista,med){
    let nvic= vicino(lista,med);
    let j =0;
    if (med==nvic){
        console.log("Il valore della media è uguale ad uno dei numeri ed è: " + nvic);
    } else if(med>nvic){
        let val1 = Math.abs( nvic-med);
        console.log("La diff del valore più vicino è: " + val1);
            while(lista[j]!=nvic){
                j++
            }
        let val2= Math.abs(lista[j+1]-med);
        console.log("La diff del secondo valore più vicino è: " + val2);
    } else {
        let val1 = Math.abs( nvic-med);
        console.log("La diff del valore più vicino è: " + val1);
            while(lista[j]!=nvic){
                j++
            }
        let val2= Math.abs(lista[j-1]-med);
        console.log("La diff del secondo valore più vicino è: " + val2);
    }

    return "esercizio finito"
}


let nvicm= vicino2(lista,med);
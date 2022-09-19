const prompt =require ('prompt-sync')();

let numero = prompt ("Digita un numero (intero): ");
let somma =0;
for (i=0; i<= numero; i++ ){
  somma= somma+i;
    
}
console.log("La somma è: "+ somma);
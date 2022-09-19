const prompt =require ('prompt-sync')();

let num1 = 0;
let num2 = 0;
let operazione = "" ;
let risultato = 0 ;

num1 = prompt ("Digita il primo numero: ");
operazione = prompt ("Digita il tipo di operazione che vuoi fare: (+,-,x,:) :");
num2 = prompt ("Digita il secondo numero: ");

num1= Number(num1);
num2 = Number(num2);

if (operazione=="+"){
    risultato= num1 + num2;
    console.log("La somma è: "+ risultato);
}

if (operazione=="-"){
    risultato= num1 - num2;
    console.log("La differenza è: "+ risultato);
}

if (operazione=="x"){
    risultato= num1 * num2;
    console.log("Il prodotto è: "+ risultato);
}

if (operazione==":"){
    risultato= num1 / num2;
    let resto= num1%num2;
    risultato= parseInt(risultato);
    console.log("Il rapporto è: "+ risultato + " con resto di : " +  resto);
}
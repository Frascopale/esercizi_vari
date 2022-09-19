const prompt =require ('prompt-sync')();

let user= "nome1";
let pw= "pw1";

let userchiesto = prompt ("Digita username: ");
let pwchiesto = prompt ("Digita la password: ");

if( user==userchiesto && pw==pwchiesto){
    console.log("I dati sono esatti");
} else {
    console.log("I dati sono sbagliati");
}
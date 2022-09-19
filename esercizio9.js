const prompt =require ('prompt-sync')();

let lista = ["nome", "casa", "ciao", "tre", "cane"];
let parola= "";
let i=0; 

parola = prompt ("Digita la parola: ");

for (i=0; i<4;i++){
    if(parola== lista(i)){
        console.log("La parola è presente " )
    }
}
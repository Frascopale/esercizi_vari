const prompt =require ('prompt-sync')();

let lista = ["nome", "casa", "ciao", "tre", "cane"];
let parola="";
 

parola = prompt ("Digita la parola: ");

for (i=0; i<5;i++){

    if(parola == lista[i]){
        console.log("La parola è presente " )
    } else {
        console.log("La parola non è presente")
    }


}
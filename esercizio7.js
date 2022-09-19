const prompt =require ('prompt-sync')();

let num = 0;
let sol = 0;
num = prompt ("Digita il numero: ");

sol= parseInt(sol);

for ( i=2; i<=num; i++){
    console.log("La tabellina è : " )
    for(j=0; j<=10; j++){
       sol =i * j;
        console.log(sol+ " ");
    }
}
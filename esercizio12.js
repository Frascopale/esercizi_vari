/*Dato un numero n, calcola se quell'anno e' bisestile o meno (https://it.wikipedia.org/wiki/Anno_bisestile)

fare in modo che la risposta non venga data immediatamente ma date all'utente la possibilita' di indovinare
ritornate quanti mesi intercorrono tra oggi e l'anno inserito dall'utente (considerate primo ottobre)
ritornate quante settimane passano tra la data indicata e oggi (cosiderate primo ottobre)*/

const prompt =require ('prompt-sync')();

let anno ="";
let risp ="";


anno= prompt ("Inserisci un anno: ");
risp= prompt ("Secondo te è bisestile? ");

function bisestile (anno){
    if(anno%400 ==0 || anno%4==0 && anno%100!=0){
        console.log("Anno "+ anno+ " è bisestile")
    } else{
        console.log("Anno "+ anno+ " non è bisestile")
    }
    return "";
}

console.log(bisestile(anno));


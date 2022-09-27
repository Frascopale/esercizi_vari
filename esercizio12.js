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
        let g= true;
        if (risp=="si" && g==true){
            console.log("Hai vinto") 
        } else { 
            console.log("Hai perso") 
        }
    } else{
        console.log("Anno "+ anno+ " non è bisestile")
        let g=false;
        if (risp=="no" && g==false){
            console.log("Hai vinto") 
        } else { 
            console.log("Hai perso") 
        }
    }
    return ;
}

console.log(bisestile(anno));

let data = new Date();
const giorno= data.getDate();
let mese = data.getMonth() + 1 ;
let anno1 = data.getFullYear();
console.log("oggi è: "+giorno+"/"+mese+"/"+anno1);

function calcolomese (anno,anno1,mese){
    let tot =0;
    if (mese>10){
        let diff1 = (Math.abs(anno1-anno))*12;
        let diff2 = mese-10;
         tot = diff1+ diff2;
        console.log("La differenza in mesi è: "+ tot);
    } else if ( mese==10){
        let diff1 = (Math.abs(anno1-anno))*12;
        console.log("La differenza in mesi è: "+ diff1);
    } else {
        let diff1 = (Math.abs((anno1-1)-anno))*12;
         tot = diff1+ (mese-1);
        console.log("La differenza in mesi è: "+ tot);
    }
   return tot;
}

let diff = (calcolomese(anno,anno1,mese));


function calcolosettimana(giorno,diff){
        let tot = diff *4;
         
        if ( giorno==1){
            console.log("La differenza in settimane è: "+ tot);
        } 
        if (giorno%7==1) {
            if (giorno==8){ console.log("La differenza in settimane è:(1) "+ (tot+1));}
            else if (8<giorno<=15) { console.log("La differenza in settimane è:(2) "+ (tot+2));} 
            else if (15<giorno<=22) { console.log("La differenza in settimane è:(3) "+ (tot+3)); }
            else if (22<giorno<=29) { console.log("La differenza in settimane è:(4) "+ (tot+4)); }
        }
    }

console.log(calcolosettimana(giorno,diff));

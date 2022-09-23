const prompt =require ('prompt-sync')();

let g1 ="";
let g2="";

g1 = prompt ("Giocatore 1: carta, sasso o forbice: ");

g2 = prompt ("Giocatore 2: carta, sasso o forbice: ");

function sasso (gioc2) {
    if (gioc2=="carta"){
        prompt ("Ha vinto giocatore 2 ");
    }

    if (gioc2=="sasso"){
        prompt ("Pareggio ");
    }

    if (gioc2=="forbice"){
        prompt ("Ha vinto giocatore 1");
    }

}

function carta (gioc2) {
    if (gioc2=="forbice"){
        prompt ("Ha vinto giocatore 2 ");
    }

    if (gioc2=="carta"){
        prompt ("Pareggio ");
    }

    if (gioc2=="sasso"){
        prompt ("Ha vinto giocatore 1");
    }

}

function forbice (gioc2) {
    if (gioc2=="sasso"){
        prompt ("Ha vinto giocatore 2 ");
    }

    if (gioc2=="forbice"){
        prompt ("Pareggio ");
    }

    if (gioc2=="scarta"){
        prompt ("Ha vinto giocatore 1");
    }

}

if(g1=="sasso"){   
    console.log(sasso(g2));
}

if(g1=="forbice"){   
    console.log(forbice(g2));
}

if(g1=="carta"){   
    console.log(carta(g2));
}
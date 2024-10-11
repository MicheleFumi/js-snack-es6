/* Snack 1
Creare un array di oggetti:
Ogni oggetto descriverà una bici da corsa con le seguenti proprietà: nome e peso.
Stampare a schermo la bici con peso minore. */

const bici = [
    { 
        nome: 'Atala', peso: 7 

    },

    { 
        nome: 'Bottecchia', peso: 9 

    },

    {
         nome: 'Graziella', peso: 6 
     },

    {
        nome: 'Graziella', peso: 10 
    }
];
   console.log(bici[0]);
     



/* Snack2
Creare un array di oggetti di squadre di calcio.
Ogni squadra avrà diverse proprietà: nome, punti fatti, falli subiti.
Nome sarà l’unica proprietà da compilare, le altre saranno tutte settate a 0.
Generare numeri random al posto degli 0 nelle proprietà “punti” fatti e “falli subiti”.
Infine, creiamo un nuovo array i cui elementi contengono solo nomi e falli subiti e stampiamo tutto in console. */


const squadre = [
    { 
        nome: 'Milan',  punti_fatti: 0 , falli_subiti: 0 ,

    },

    { 
        nome: 'Inter',  punti_fatti: 0 , falli_subiti: 0 ,

    },

    { 

        nome: 'Juve',  punti_fatti: 0 , falli_subiti: 0 , 
        
     },


    {

        nome: 'Roma',  punti_fatti: 0 , falli_subiti: 0 , 

    }
];


for (let i = 0; i < squadre.length; i++) {
    squadre[i].punti_fatti = Math.random() * 10 ;
    squadre[i].falli_subiti =  Math.random() * 10 ;

}

console.log(squadre[i].punti_fatti);


;

/* Snack 3 (Bonus)
Scrivere una funzione che accetti tre argomenti, un array e due numeri (a più piccolo di b).
La funzione ritornerà un nuovo array con i valori che hanno la posizione compresa tra i due numeri. */
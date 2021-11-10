// Visualizzare in pagina 5 numeri casuali. Da lì parte un timer di 30 secondi.
// Dopo 30 secondi i numeri in pagina devono essere rimossi e l’utente deve inserire, uno alla volta, i numeri che ha visto precedentemente, tramite il prompt().
// Dopo che sono stati inseriti i 5 numeri, il software dice quanti e quali dei numeri da indovinare sono stati individuati.

//Selezioni nel DOM
const body = document.querySelector("body");
const numeriCasuali = [];

for(let i=0; i<5; i++){
numeriCasuali.push(Math.floor(Math.random() * 100));};

//numeri casuali
for(let i=0; i<5; i++){
body.innerHTML = numeriCasuali;};
 
//List dove pushare numeri
const numeri = [];
//contatore quantità
let quantita = 0;
//5 numeri casuali dopo 30 secondi
setTimeout(() =>{
    body.innerHTML = "";
    for(let i=0; i<5; i++){
        let numero = parseInt(prompt("Inserisci numeri precedentemente visti"));
        numeri.push(numero);   
    } 
    console.log(numeri)
    for(let i=0; i<numeriCasuali.length; i++){
    for(let j=0; j<numeri.length; j++){
    if(numeriCasuali[i] == numeri[j]){
        quantita ++
        console.log(`hai azzeccato ${numeri[j]}`);
    }
    }
}
console.log(`sono in tutto ${quantita} numeri`)
}, 3000);



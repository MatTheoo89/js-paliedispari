console.log('link ok');

// !  **Palidroma**

// const parolaUser = prompt('Inserisci una parola');
const parolaUser = 'Anna';









































// // !  **Pari e Dispari**


// // const choiceUser = prompt('Scegli tra PARI o DISPARI');
// // const numUser = parseInt(prompt('Inserisci un numero tra 1 e 5'));
// const numPc = getRandomNum(1, 5);
// const somma = numUser + numPc;
// let winner;


// console.log(choiceUser, numUser, numPc, somma);

// const divisione = pariDispari(somma);
// console.log(divisione);

// if(divisione == choiceUser){
//   winner = 'UTENTE';
// }
// else{
//   winner = 'COMPUTER';
// }

// document.querySelector('h2').innerText += `
//   il numero giocatore scegli il ${choiceUser} ed inserisce il ${numUser}, il computer gioca il ${numPc}. La somma è ${somma} quindi è un numero ${divisione}. Il vincitore è ${winner}!
// `


// // ! funzioni per il **Pari e Dispari**

// // * funzione genera numero random
// function getRandomNum(min, max){
//   const randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;
//   return randomNumber;
// }

// // * funzione confronto se pari o dispari
// function pariDispari(){
//   if(somma % 2 === 0){
//     return 'pari';
//   }
//   return 'dispari'
// }
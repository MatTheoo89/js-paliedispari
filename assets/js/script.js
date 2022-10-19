console.log('link ok');

// !  **Palidroma**

const parolaUser = prompt('Inserisci una parola');
// let parola ='otto';
let parolaInversa = '';
let output;




// for(let i = (parola.length-1); i>=0; i--){
//   parolaInversa += parola[i];
//   console.log(parolaInversa);
// }
palindrome(parolaUser);
console.log('parola-->', parolaUser);
console.log('parolaInversa-->', parolaInversa);

if(parolaInversa == parolaUser){
  console.log('Sono palindrome');
  document.querySelector('.palindromi').innerText += 'la parola inserita è palindroma'
}
else{
  console.log('Sono parole diverse!');
  document.querySelector('.palindromi').innerText += 'la parola inserita è diversa'
}




function palindrome(stringa){
  
  for(let i = (stringa.length-1); i>=0; i--){
    parolaInversa += stringa[i];
  }
}









// // !  **Pari e Dispari**


const choiceUser = prompt('Scegli tra PARI o DISPARI');
const numUser = parseInt(prompt('Inserisci un numero tra 1 e 5'));
const numPc = getRandomNum(1, 5);
const somma = numUser + numPc;
let winner;


console.log(choiceUser, numUser, numPc, somma);

const divisione = pariDispari(somma);
console.log(divisione);

if(divisione == choiceUser){
  winner = 'UTENTE';
}
else{
  winner = 'COMPUTER';
}

document.querySelector('.pariedispari').innerText += `
  il giocatore scegli il numero ${choiceUser} ed inserisce il ${numUser}, il computer gioca il ${numPc}. La somma è ${somma} quindi è un numero ${divisione}. Il vincitore è ${winner}!
`


// ! funzioni per il **Pari e Dispari**

// * funzione genera numero random
function getRandomNum(min, max){
  const randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;
  return randomNumber;
}

// * funzione confronto se pari o dispari
function pariDispari(){
  if(somma % 2 === 0){
    return 'pari';
  }
  return 'dispari'
}
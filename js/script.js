/* 
Scrivi un programma che stampi in console i numeri 
da 1 a 100, ma che per i multipli di 3 stampi “Fizz” 
al posto del numero e per i multipli di 5 stampi “Buzz”. 
Per i numeri che sono sia multipli di 3 che di 5 stampi 
“FizzBuzz”.
*/

// - loop for numeri da 1 a 100 in console.log
//   ? SE il numero ottenuto è un multiplo di 3
//      ° stampa in console "Fizz"
//   :? SE il numero ottenuto è un multiplo di 5
//      ° stampa in console "Buzz"
//   :? SE è sia multiplo di 3 che di 5
//      ° stampa in console "FizzBuzz"

let containerEl = document.querySelector(".container");

for(let i = 1; i < 101; i++){

    let newEl = document.createElement("div");
    newEl.classList.add("card")
    newEl.innerHTML = i
    containerEl.append(newEl);
    
    if (( i % 3 == 0 ) && ( i % 5 == 0 )){
        newEl.innerHTML = "FizzBuzz";
        newEl.style.backgroundColor = "rgba(255, 0, 0, 0.6)";

    } else if ( i % 3 == 0 ){
        newEl.innerHTML = "Fizz";
        newEl.style.backgroundColor = "rgba(2, 177, 2, 0.6)";

    } else if ( i % 5 == 0 ){
        newEl.innerHTML = "Buzz";
        newEl.style.backgroundColor = "rgba(235, 243, 15, 0.8)";
    }
}
// Consegna:
// Generare una griglia di gioco quadrata in cui ogni cella contiene un numero compreso tra 1 e 100.
// Quando l'utente clicca su ogni cella, la cella cliccata si colora di azzurro.

/* BONUS Aggiungere la possibilità di scegliere un livello di difficoltà in base al quale viene generata una griglia di uno dei seguenti range:
con difficoltà 1 => tra 1 e 100
con difficoltà 2 => tra 1 e 81
con difficoltà 3 => tra 1 e 49*/

//SCEGLIERE LA DIFFICOLTA'
// let sizeGrid
// const userChoice = prompt('scegli la difficoltà: easy, medium, hero');

// if (userChoice === "easy") {
    //    sizeGrid = 100;
    // } else if (userChoice === "medium") {
        //     sizeGrid = 81;
        // } else if (userChoice === "hero"){
            //     sizeGrid = 49;
            // } else {
                //     prompt('scegli una difficolà: easy, medium, hero');
                // }
// GAME CONTENT
let bombItemsArray = [];
let safeCells = [];
let cellNumber = 100;               
const grid = containerContent();
const rndBombCell = rndBombNumbers();

//Al click sul bottone fai partire il gioco

const playBtn = document.getElementById("play-btn");
playBtn.addEventListener("click", startGame);

//MAIN FUNCTION

/**
 * Description: funzione per togliere il titolo al click del play e far apparire il container grid
 * @returns void
 */
function startGame() {
    const grid = document.getElementById("grid");
    const title = document.getElementById("title");
    grid.classList.remove("hidden");
    title.classList.add("hidden");
}
//1.1 CREARE UN FOR DA 1 A 100
//1.2 AGGIUNGERE 100 DIV A CONTAINER



/**
 * Description: Questa funzione si occuperà del generare numeri da 1 a 100 e di conseguenza aggiungere al DOM 100 div 'grid-item' all'interno del di 'grid-container'
 * @returns {any}: DOM interface and interaction of the function. Nuove 100 grid-item e cambio colore al click
 */

function containerContent() {
    // 1.CREARE GRID ITEMS A APPEND A GRID CONTAINER
    // 1.1 Creare una variabile e associarla a grid-container
    
    // 1.2 Creare un ciclo for per generare numeri da 1 a 100
    const gridContainer = document.querySelector(".grid-container");
    for (let i = 1; i <= cellNumber; i++) {
    // 1.3 creare una nuova costante e associarla alla funzione generateGridItem => Questa funzione crea gli elementi che saranno il contenuto del DOM
        const domElement = generateGridItem(i);

    // 1.4 event listener per il cambio colore
        domElement.addEventListener("click", handleCellClick);

    // 1.5 append element to container
        gridContainer.append(domElement);
       
    }    
    // 1.6 return the result
    return gridContainer;
}

// [*]fare una funzione che mi calcola 16 n random da 1 a 100
// [*] mettere questi numeri in un array vuoto
// []se la cella ha il contenuto dell'array bombCell allora
    // []-colora di rosso la cella

/**
 * Description: funzione che mi calcola 16 n random da 1 a 100 e li aggiunge all'array di bomb items
 * @returns void
 */
function rndBombNumbers() {
    for (let i = 0; i < 16; i++) {
        let rndNumber = Math.floor(Math.random()*100);
        do {bombItemsArray.push(rndNumber);
        } while (!bombItemsArray.includes(rndNumber) && bombItemsArray.length === 16);
    }
}
console.log(bombItemsArray);

function handleCellClick () {
    //prelevare numero cliccato
    const clickedNumber =parseInt(this.querySelector("span").textContent);
    //se il numero cliccato è nell'array bombe:
    
    if (bombItemsArray.includes(clickedNumber)) {
        //la cella si colora di rosso
        this.classList.add("bomb");
        //end game, //stampa risultato
        document.getElementById("result").innerHTML = `Hai perso! Hai selezionato ${safeCells.length} celle`;


    } else {
        //la cella si colora di azzurro
        this.classList.add("active");
        //cella non cliccabile 
        // this.style.pointerEvents = "none";
        this.removeEventListener("click", handleCellClick);
        //il numero della cella viene salvata all'interno dell'array safeCells
        safeCells.push(clickedNumber);
    }
}




// function bombItems() {
    
// }


// DOM CONTENT
/**
 * Description
 * @param {any} number numero da 1 a 100 generato dal ciclio for nella function 'containerContent'
 * @returns {any}: DOM functions= crea elementi div e aggiunge classi all'interno di esse
 */
function generateGridItem(number) {
    //crea una var associata a un div creato
    const newGridItem = document.createElement("div");

    //aggiungi numero all'interno del div
    newGridItem.innerHTML = `<span>${number}</span>`;

    //assegna classe grid item
    newGridItem.classList.add('grid-item');

    return newGridItem;

}


    



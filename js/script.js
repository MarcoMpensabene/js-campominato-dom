
const buttonEl = document.querySelector("header button");
console.log(buttonEl);
const containerEl = document.querySelector("section.container");
const selectEl = document.querySelector("header div select");
let grandezza = selectEl.value;
let clicked = document.getElementById("gameover")
console.log(selectEl.value);
buttonEl.addEventListener("click"  , function() {
    containerEl.innerHTML = "";
    let count = 0;
    let grandezza = selectEl.value;
    let randomNumb = getRandomNumber(1 , grandezza);
    let getBomb = getRandomBomb(16 , 1 , grandezza)
    console.log(grandezza.value);
    for (let i = 1 ; i <= grandezza ; i++){
        const divEl = document.createElement("div");
        containerEl.appendChild(divEl);
        divEl.classList.add("square");
        if(grandezza > 99 ){
            divEl.classList.add("large");
        } else if(grandezza > 80 && grandezza < 100){
            divEl.classList.add("medium");
        } else {
            divEl.classList.add("small");
        }
        const numbers = document.createElement("span");
        divEl.appendChild(numbers);
        numbers.append(i);
        divEl.addEventListener("click" , function() {
        count ++;
        clicked.innerHTML = count;
        if(getBomb.includes(i)){
            divEl.classList.add("bomb");
            let cells = document.getElementsByClassName("square");
            for(let i = 0 ; i <  getBomb.length ; i++){
                let num = getBomb[i] - 1 ;
                cells[num].classList.add("bomb");
            }
        }else {
            divEl.classList.add("active");
            numbers.classList.add("numbers");
            console.log(i);
        }
    },{ once: true });
}} );

function getRandomNumber(min , max){
    return Math.floor(Math.random() * (max - min + 1) + min);
}


function getRandomBomb(arraylength, min, max) {
    const arrayBomb = [];
    while (arrayBomb.length < arraylength ) {
        let randomNum = getRandomNumber(min, max);
        if (!arrayBomb.includes(randomNum)) {
            arrayBomb.push(randomNum);
        }
    }
    return arrayBomb;
}


const buttonEl = document.querySelector("header button");
console.log(buttonEl);
const containerEl = document.querySelector("section.container");
const selectEl = document.querySelector("header div select");
let grandezza = selectEl.value;
console.log(selectEl.value);
buttonEl.addEventListener("click"  , function() {
    containerEl.innerHTML = "";
    let grandezza = selectEl.value;
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
            divEl.classList.add("active");
            numbers.classList.add("numbers");
            console.log(i);
    },{ once: true });
}} );

const bomb = [];
function filledArray(array , number , max ){
    for (let i = 1 ; i <= 16 ; i++){
        number = getRandomNumber(1 , max);
        array.push(number)
    }
}

function getRandomNumber(min , max){
    return Math.floor(Math.random() * (max - min + 1) + min);
}

let randomNumb = getRandomNumber(1 , grandezza);
console.log(randomNumb)

function getRandomBomb(repeatedNumbers , min , max){
    if(max - min > repeatedNumbers.length){
        return false;
    }
    let randomNumber;
    let isBomb = false;
    while(!isBomb){
        randomNumber = getRandomNumber(min , max);
        if( repeatedNumbers.includes(randomNumber) !== false){
            isBomb = true;
        }
    }
    return randomNumber;
}
let randomBomb = getRandomBomb(bomb , 1 , grandezza)


console.log(randomBomb)

const filled = filledArray(bomb , randomBomb , grandezza)
console.log(bomb)
function toStartButtonOne() {
    let sectionTwo = document.getElementById('part__two__id');
    sectionTwo.style.display = 'block';
    let sectionOne = document.getElementById('part__one__id');
    sectionOne.style.display = 'none';
}

let arr = ['rock', 'scissors', 'papper'];
let runNum = Math.floor(Math.random() * 3);
console.log(runNum);
let computer = arr[runNum];
let result = '';
let formerFunc = whenClick = (value) => {
    if (value === 'rock') {
        let questionImg = document.getElementById('questionImg');
        questionImg.src = 'img/leadership.png';
        if (runNum === 1) {
            result = 'you won';
        }
        else if(runNum === 2){
            result = 'you lose';
        }
        else if(runNum === 0){
            result = 'Draw'
        }
    }
    else if (value === 'hand') {
        let questionImg = document.getElementById('questionImg');
        questionImg.src = 'img/hand.png';
        if (runNum === 1) {
            result = 'you lose';
        }
        else if(runNum == 0){
            result = 'you won';
        }
        else if(runNum === 2){
            result = 'Draw'
        }
    }
    else if (value === 'scissors') {
        let questionImg = document.getElementById('questionImg');
        questionImg.src = 'img/scissors.png';
        if (runNum === 0) {
            result = 'you lose';
        }
        else if(runNum === 2){
            result = 'you won';
        }
        else if(runNum === 1){
            result = 'Draw';
        }
    }
    if (value === undefined) {
        nextEvent();
        console.log(result);
        let final = document.getElementById('final-word');
        final.style.display = 'block';
        final.innerHTML = result;
    }
}   
function nextEvent() {
    let secondPlayere = document.getElementById('secondPlayere');
        if (runNum === 0) {
            secondPlayere.src = 'img/hand.png';
        }
        else if(runNum === 1){
            secondPlayere.src = 'img/scissors.png';
        }
        else{
            secondPlayere.src = 'img/leadership.png';
        }
}
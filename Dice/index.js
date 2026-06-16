// RANDOM NUMBER GENERATOR

const myButton = document.getElementById("myButton");
const label1 = document.getElementById("label1");
const label2 = document.getElementById("label2");
const label3 = document.getElementById("label3");

const min = 1;
const max = 6;
let randomNum;

myButton.onclick = function(){
    randomNum = Math.floor(Math.random() * max) + min;
    label1.textContent = randomNum;

    randomNum = Math.floor(Math.random() * max) + min;
    label2.textContent = randomNum;

    randomNum = Math.floor(Math.random() * max) + min;
    label3.textContent = randomNum;
}
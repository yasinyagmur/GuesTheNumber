//! ***************Varialbles
const input = document.querySelector('#input');
// console.log(input)

const check = document.querySelector('#check')
// console.log(check)

const remainder = document.querySelector('#remainder');

const won =document.querySelector('#won');

const reset = document.querySelector('#reset');

let randomNumber = () =>{
    return Math.floor(Math.random() * (max - min + 1) + min)
};
console.log(randomNumber)
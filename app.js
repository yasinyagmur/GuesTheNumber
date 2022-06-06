//! ***************Varialbles****************
const input = document.querySelector("#user-input");
console.log(input.innerText);

const check = document.querySelector("#check");
// console.log(check)

const life = document.querySelector("#life");

const won = document.querySelector("#won");

const reset = document.querySelector("#reset");
const first = document.querySelector(".first");
const last = document.querySelector(".last");

let randomNumber;
function getRndInteger(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
randomNumber = getRndInteger(1, 100);
console.log(randomNumber);
input.focus();

//! *******************Solution*******************

const guessTheNumber = () => {
  if (life.innerText > 1) {
    if (input.value == randomNumber) {
      won.innerText = "Congratulations You Won The Game!!!";
      life.innerText--;
      input.value = "";
      input.focus();
      check.style.display = "none";
      input.style.display = "none";
    } else if (input.value > randomNumber) {
      won.innerText = "Decrease the Number Entered";
      last.innerText = input.value;
      life.innerText--;
      input.focus();
      last.innerText = input.value;
    } else if (input.value < randomNumber) {
      won.innerText = "Increase the number entered";
      life.innerText--;
      input.focus();
      first.innerText = input.value;
    }
  } else {
    won.innerText = `Sorry You Lost The Game
    You Should Try Again.`;
    input.value = "";
    life.innerText = "";
    check.style.display = "none";
    input.style.display = "none";
  }
  input.value = "";
};
check.addEventListener("click", guessTheNumber);
//!Reset The Game

const repeat = () => {
  location.reload();
};

reset.addEventListener("click", repeat);

input.addEventListener("keydown", (e) => {
  if (e.keyCode === 13) {
    guessTheNumber();
  }
});

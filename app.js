//! ***************Varialbles
const input = document.querySelector("#user-input");
console.log(input.innerText);

const check = document.querySelector("#check");
// console.log(check)

const life = document.querySelector("#life");

const won = document.querySelector("#won");

const reset = document.querySelector("#reset");

let randomNumber;
function getRndInteger(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
randomNumber = getRndInteger(1, 100);
// console.log(randomNumber)
input.focus();

//! *******************Solution


const guessTheNumber = () => {
  if (life.innerText > 1) {
    if (input.value == randomNumber) {
      won.innerText = "Congratulations You Won The Game!!!";
      life.innerText--
      input.value = "";
      input.focus();
      document.querySelector('.container').style.backgroundImage = "url(./image/Brain-Wallpaper-HD-36697.png)";
      won.style.color = 'white'
      
    } else if (input.value > randomNumber) {
      won.innerText = "Decrease the Number Entered";
      life.innerText--;
      input.value = "";
      input.focus();
      

    } else if (input.value < randomNumber) {
      won.innerText = "Increase the number entered";
      life.innerText--;
      input.value = "";
      input.focus();
      
    }
  } else {
    life.innerText--;
    won.innerText = `Sorry You Lost The Game
    You Should Try Again.`;
    input.value = "";
  }
};

check.addEventListener("click", guessTheNumber);

const repeat = () => {
  location.reload();
};

reset.addEventListener("click", repeat);

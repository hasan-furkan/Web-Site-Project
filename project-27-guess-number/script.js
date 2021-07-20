// let randomNumber = Math.floor(Math.random()*100)+1;

let btn = document.getElementById("submit");
let restartbtn = document.getElementById("restart");
var inputUser = document.getElementById("userInput");
let count = 0;

let output = document.getElementById("text");

let number = Math.floor(Math.random() * 100);
// console.log(number);

btn.addEventListener("click", function () {
  let input = document.getElementById("userInput").value;
  if (input == number) {
    output.innerHTML = `You guessed right congratulations`;
    count++;
    document.getElementById("count").innerHTML = count;
    document.getElementById("won").innerHTML = `Congratulations! You won!`;
  } else if (input < number) {
    output.innerHTML = `You guessed too low!`;
    count++;
    document.getElementById("count").innerHTML = count;
  } else if (input > number) {
    output.innerHTML = `You guessed too high!`;
    count++;
    document.getElementById("count").innerHTML = count;
  }
});

restartbtn.addEventListener("click", function () {
  location.reload();
});
inputUser.addEventListener("keyup", function (event) {
  if (event.code === 'Enter') {
    event.preventDefault();
    document.getElementById("submit").click();
  }
});
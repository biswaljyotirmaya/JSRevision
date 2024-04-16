const random = Math.floor(Math.random() * 100 + 1);
console.log(random);

const guess = document.querySelector(".input");

const submit = document.querySelector(".submit");
const restart = document.querySelector(".restart");

const result = document.querySelector(".result");
const suggesion = document.querySelector(".suggestion");
let prevoiusNumber = 0;
const arr = [];

submit.addEventListener("click", () => {
  console.log(guess.value);
  console.log(arr);
  if (parseInt(guess.value) === random) {
    result.innerHTML = "You are winner";
    suggesion.innerHTML = "Waoo!! you just win";
  } else {
    if (arr.length < 9) {
      arr.push(guess.value);
      result.innerHTML = "Wrong guess";
      if (guess.value < random) {
        suggesion.innerHTML = "Try with a larger number";
      } else {
        suggesion.innerHTML = "Try with a smaller number";
      }
      prevoiusNumber = arr[arr.length - 1];
      guess.value = null;
      document.querySelector(
        ".previous"
      ).innerHTML = `Previous guess: ${prevoiusNumber}`;
      document.querySelector(".remaining").innerHTML = `Guess remaining: ${
        10 - arr.length
      }`;
    } else {
      result.innerHTML = "You lost the game!";
      suggesion.innerHTML = "Batter luck next time!";
      document.querySelector(
        ".remaining"
      ).innerHTML = `You have reached the limit.`;
      return;
    }
  }
});

restart.addEventListener("click", () => {
  arr.length = 0;
  result.innerHTML = "Guess a number!";
  suggesion.innerHTML = "All the best!";
  prevoiusNumber = 0;
  document.querySelector(
    ".previous"
  ).innerHTML = `Previous guess: ${prevoiusNumber}`;
  document.querySelector(".remaining").innerHTML = `Guess remaining: ${
    10 - arr.length
  }`;
});

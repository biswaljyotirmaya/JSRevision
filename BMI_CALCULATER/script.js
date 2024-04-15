const calaculateBMI = (height, weight) => {
  const result = (weight / (height * height)).toFixed(2);
  console.log(result);
  return result;
};

const reset = document.querySelector(".reset");
reset.addEventListener("click", (e) => {
  document.querySelector("#height").value = null;
  document.querySelector("#weight").value = null;
});

const form = document.querySelector(".container");
form.addEventListener("submit", (e) => {
  e.preventDefault();

  const height = parseFloat(document.querySelector("#height").value);
  console.log(height);
  const weight = parseFloat(document.querySelector("#weight").value);
  console.log(weight);

  const result = document.querySelector("#result");

  if (isNaN(height) || isNaN(weight) || weight <= 0 || height <= 0) {
    result.textContent = `Please enter a valid Height/Weight`;
    return;
  }

  let finalResult = parseFloat(calaculateBMI(height, weight));

  if (finalResult < 18.6) {
    result.textContent = `Result: You are Under Weight`;
  } else if (finalResult >= 18.6 && finalResult < 24.9) {
    result.textContent = `Result: You are Normal`;
  } else if (finalResult >= 24.9 && finalResult < 35) {
    result.textContent = `Result: You are Over Weight`;
  } else {
    result.textContent = `Result: You are Obesity`;
  }
});

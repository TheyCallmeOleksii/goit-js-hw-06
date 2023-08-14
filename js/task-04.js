const counter = document.querySelector("#counter");
const valueSpan = counter.querySelector("#value");
const minusButton = counter.querySelector('[data-action="decrement"]');
const plusButton = counter.querySelector('[data-action="increment"]');

let counterValue = 0;

function updateCounterUI() {
  valueSpan.textContent = counterValue;
}

minusButton.addEventListener("click", () => {
  counterValue -= 1;
  updateCounterUI();
});

plusButton.addEventListener("click", () => {
  counterValue += 1;
  updateCounterUI();
});

updateCounterUI();

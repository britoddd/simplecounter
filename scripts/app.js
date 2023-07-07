const countDisplay = document.querySelector(".number-count");
const decreaseButton = document.querySelector(".decrease");
const resetButton = document.querySelector(".reset");
const increaseButton = document.querySelector(".increase");

let count = JSON.parse(localStorage.getItem("count")) || 0;

document.addEventListener("DOMContentLoaded", () => {
  renderCount(count);
});

decreaseButton.addEventListener("click", () => {
  // if (count - 1 < 0) return;
  count--;
  renderCount(count);
});

increaseButton.addEventListener("click", () => {
  count++;
  renderCount(count);
});

function renderCount(number) {
  localStorage.setItem("count", JSON.stringify(number));
  colorScheme(number);
  countDisplay.innerHTML = number;
}

resetButton.addEventListener("click", () => {
  count = 0;
  renderCount(count);
});

function colorScheme(count) {
  if (count < 0) {
    countDisplay.style.color = "#ff0000";
  } else if (count == 0) {
    countDisplay.style.color = "#000";
  } else if (count > 0) {
    countDisplay.style.color = "#009900";
  }
}

document.addEventListener("keydown", (e) => {
  if (e.key === "ArrowLeft") {
    count--;
    renderCount(count);
  } else if (e.key === "ArrowRight") {
    count++;
    renderCount(count);
  } else if (e.key === "Escape") {
    count = 0;
    renderCount(count);
  }
});

// Part 2: Functions with parameters, return values, and scope
function square(num) {
  // local variable
  let result = num * num;
  return result;
}

function showSquare(value) {
  let squared = square(value); // call reusable function
  document.getElementById("calcResult").innerText = 
    `The square of ${value} is ${squared}`;
}

// Part 3: Using JS to trigger CSS animations
const triggerBtn = document.getElementById("triggerBtn");
const animateBox = document.getElementById("animateBox");

triggerBtn.addEventListener("click", () => {
  // Toggle the animate class
  animateBox.classList.toggle("animate");
});

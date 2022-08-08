


let cost = 0;
const placeForCost = document.getElementById("sum");
const range = document.getElementById("km");
const square = document.getElementById("m2");
let price = 6.5;
const posev = document.getElementById("posev");
const rulonnik = document.getElementById("rulonnik");

function typeOfLawn() {
  if (range.value >= 30 && range.value <= 200) {
    cost = 1.1 * square.value * price;
    console.log("here1");
  }
  if (range.value <= 30) {
    cost = 1.0 * square.value * price;
    console.log("here2");
  }
  if (range.value > 200) {
    cost = 2 * square.value * price;
    console.log("here3");
  }
  placeForCost.innerHTML = `Стоимость работ: ${Math.ceil(cost)} руб.`;
}

document.addEventListener("keyup", typeOfLawn);

posev.addEventListener("click", () => {
  posev.classList.add("choose");
  rulonnik.classList.remove("choose");
  price = 6.5;
  typeOfLawn(price);
});

rulonnik.addEventListener("click", () => {
  rulonnik.classList.add("choose");
  posev.classList.remove("choose");
  price = 10.5;
  typeOfLawn(price);
});

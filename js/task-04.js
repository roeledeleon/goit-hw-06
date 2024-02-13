let initialValue = 0;
let value = document.getElementById("value");
value.innerText = initialValue;

let btnInc = document.querySelector('[data-action="increment"]');
let btnDec = document.querySelector('[data-action="decrement"]');

// btnInc.onclick = () => {
//   initialValue += 1;
//   value.innerText = initialValue;
// };
// btnDec.onclick = () => {
//   initialValue -= 1;
//   value.innerText = initialValue;
// };

btnInc.addEventListener("click", () => {
  initialValue += 1;
  value.innerText = initialValue;
});

btnDec.addEventListener("click", () => {
  initialValue -= 1;
  value.innerText = initialValue;
});

const slider = document.querySelector("#font-size-control");
const taskText = document.querySelector("#text");

// slider.addEventListener("input", ({ target: { value } }) => {
//   taskText.style.fontSize = `${value}px`;
// });

slider.addEventListener("input", (e) => {
  taskText.style.fontSize = `${e.target.value}px`;
});

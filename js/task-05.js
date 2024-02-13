let nameInput = document.querySelector("#name-input");
let nameOutput = document.querySelector("#name-output");

nameInput.addEventListener("input", (e) => {
  nameOutput.textContent = e.target.value || "Anonymous";
});

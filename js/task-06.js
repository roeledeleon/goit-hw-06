const validationInput = document.querySelector("#validation-input");

validationInput.addEventListener(
  "blur",
  ({ target: { classList, value, dataset } }) => {
    if (value.length === Number(dataset.length)) {
      classList.remove("invalid");
      classList.add("valid");
    } else {
      classList.remove("valid");
      classList.add("invalid");
    }
  }
);

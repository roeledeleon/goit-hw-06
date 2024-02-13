const loginForm = document.querySelector(".login-form");

loginForm.addEventListener("submit", (e) => {
  e.preventDefault();

  const email = e.currentTarget.elements.email.value;
  const password = e.currentTarget.elements.password.value;

  if (email && password) {
    const formData = {
      email,
      password,
    };

    console.log(formData);

    e.currentTarget.reset();
  } else {
    alert("All the fields must be filled in!!!");
  }
});

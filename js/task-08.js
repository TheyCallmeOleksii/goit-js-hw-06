const loginForm = document.querySelector(".login-form");

loginForm.addEventListener("submit", function (event) {
  event.preventDefault();

  const formData = new FormData(event.currentTarget);
  const email = formData.get("email");
  const password = formData.get("password");

  if (!email || !password) {
    alert("All fields must be filled");
    return;
  }

  const user = {
    email,
    password,
  };

  console.log(user);

  loginForm.reset();
});

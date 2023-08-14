const validationInput = document.querySelector("#validation-input");

const requiredLength = Number(validationInput.dataset.length);

function validateInput() {
  const inputValue = validationInput.value;

  if (inputValue.length === requiredLength) {
    validationInput.classList.add("valid");
    validationInput.classList.remove("invalid");
  } else {
    validationInput.classList.add("invalid");
    validationInput.classList.remove("valid");
  }
}

validationInput.addEventListener("blur", validateInput);

let email = document.querySelector("#email");
let password = document.querySelector("#password");
let form = document.querySelector("form");

let emailError = document.querySelector("#emailError");
let passwordError = document.querySelector("#passwordError");
let resultMessage = document.querySelector("#resultMessage");

form.addEventListener("submit", function (dets) {
  dets.preventDefault();

  // Clear previous messages
  emailError.textContent = "";
  passwordError.textContent = "";
  resultMessage.textContent = "";
  resultMessage.style.color = "black";

  const emailRegex = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/;

  const passwordRegex =
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

  let emailans = emailRegex.test(email.value.trim());
  let passwordans = passwordRegex.test(password.value.trim());

  let isValid = true;

  if (!emailans) {
    emailError.textContent = "Email is incorrect";
    isValid = false;
  }

  if (!passwordans) {
    passwordError.textContent =
      "Password must contain uppercase, lowercase, number & special character (min 8)";
    isValid = false;
  }

  if (isValid) {
    resultMessage.textContent = "Everything is correct";
    resultMessage.style.color = "green";
  } else {
    resultMessage.textContent = "Error is there";
    resultMessage.style.color = "red";
  }
});

// Get form element
const form = document.getElementById("registerForm");

// Get input elements
const username = document.getElementById("username");
const email = document.getElementById("email");
const phone = document.getElementById("phone");
const password = document.getElementById("password");
const confirmPassword = document.getElementById("confirmPassword");
const termsCheckbox = document.getElementById("termsCheckbox");

// Get error message elements
const usernameError = document.getElementById("usernameError");
const emailError = document.getElementById("emailError");
const phoneError = document.getElementById("phoneError");
const passwordError = document.getElementById("passwordError");
const confirmPasswordError = document.getElementById("confirmPasswordError");
const termsCheckboxError = document.getElementById("termsCheckboxError");

// Add event listener to form submit event
form.addEventListener("submit", (e) => {
  e.preventDefault(); // Prevent form submission
  validateUsername(); // Validate username
  validateEmail(); // Validate email
  validatePhone(); // Validate phone number
  validatePassword(); // Validate password
  validateConfirmPassword(); // Validate confirm password
  validateTermsCheckbox(); // Validate terms checkbox

  // Check if all error messages are empty
  if (
    usernameError.textContent === "" &&
    emailError.textContent === "" &&
    phoneError.textContent === "" &&
    passwordError.textContent === "" &&
    confirmPasswordError.textContent === "" &&
    termsCheckboxError.textContent === ""
  ) {
    // Form is valid, submit the form
    form.submit();
    alert("Registered Successfully!");
  }
});

// Function to validate username
function validateUsername() {
  const usernameValue = username.value.trim();
  if (usernameValue === "") {
    usernameError.textContent = "Username is required";
  } else if (usernameValue.length < 6) {
    usernameError.textContent = "Username must be at least 6 characters long";
  } else {
    usernameError.textContent = "";
  }
}

// Function to validate email
function validateEmail() {
  const emailValue = email.value.trim();
  if (emailValue === "") {
    emailError.textContent = "Email is required";
  } else if (!emailValue.includes("@")) {
    emailError.textContent = "Email must contain @";
  } else {
    emailError.textContent = "";
  }
}

// Function to validate phone number
function validatePhone() {
  const phoneValue = phone.value.trim();
  if (phoneValue === "") {
    phoneError.textContent = "Phone number is required";
  } else if (Number.isNaN(phoneValue)) {
    phoneError.textContent = "Phone number must be a number";
  } else {
    phoneError.textContent = "";
  }
}

// Function to validate password
function validatePassword() {
  const passwordValue = password.value.trim();
  if (passwordValue === "") {
    passwordError.textContent = "Password is required";
  } else if (passwordValue.length < 8) {
    passwordError.textContent = "Password must be at least 8 characters long";
  } else {
    passwordError.textContent = "";
  }
}

// Function to validate confirm password
function validateConfirmPassword() {
  const confirmPasswordValue = confirmPassword.value.trim();
  if (confirmPasswordValue === "") {
    confirmPasswordError.textContent = "Confirm password is required";
  } else if (confirmPasswordValue !== password.value) {
    confirmPasswordError.textContent = "Passwords do not match";
  } else {
    confirmPasswordError.textContent = "";
  }
}

// Function to validate terms checkbox
function validateTermsCheckbox() {
  if (!termsCheckbox.checked) {
    termsCheckboxError.textContent = "You must agree to the terms and services";
  } else {
    termsCheckboxError.textContent = "";
  }
}

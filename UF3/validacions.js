// A continuació et mostro algunes idees per poder començar a organitzar el teu codi.

// Selecció dels inputs...
const nameInput = document.querySelector('input[name="name"]');

// Si no saps com utilitzar aquestes funcions, pots fer ús de missatges per consol o situar
// els errors allà on consideris lògic

// Funció per eliminar missatges d'error existents
function removeExistingError(input) {
  const existingError = input.nextElementSibling;
  if (existingError && existingError.classList.contains("error")) {
    existingError.remove();
  }
}

// Funció per crear i mostrar missatges d'error
function displayError(input, message) {
  const error = document.createElement("div");
  error.textContent = message;
  error.classList.add("error");
  //https://developer.mozilla.org/es/docs/Web/API/Element/insertAdjacentElement
  input.insertAdjacentElement("afterend", error);
}

// Cada validació...

function validateName() {
  removeExistingError(nameInput);
  // Validació del nom...
  if (name.length < 3) {
    isValid = false;
  } else {
    usernameError.textContent = "";
  }
  // Si no és vàlid...
  displayError(nameInput, "El nom no és vàlid");
}
function validEmail() {
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailPattern.test(email)) {
    emailError.textContent = "Possa un correu valid";
    isValid = false;
  } else {
    emailError.textContent = "";
  }
}
// addEventListeners...
registrationForm.addEventListener("submit", function (event) {
  event.preventDefault();

  const registrationForm = document.getElementById("");
  const nameInput = document.getElementById("name").value;
  const surnameInput = document.getElementById("surname").value;
  const emailInput = document.getElementById("email").value;
  const ageInput = document.getElementById("age").value;
  // const gender = characterItem.querySelector('strong:nth-of-type(3)').textContent.slice(8);
  const genderInput = document.getElementById("gender").value;
  const messageInput = document.getElementById("message").value;
  const passwordInput = document.getElementById("password").value;
  if (name.length < 3) {
    usernameError.textContent =
      "El nombre de usuario debe tener al menos 3 caracteres.";
    isValid = false;
  } else {
    usernameError.textContent = "";
  }

  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailPattern.test(email)) {
    emailError.textContent = "Possa un correu electronic";
    isValid = false;
  } else {
    emailError.textContent = "";
  }

});

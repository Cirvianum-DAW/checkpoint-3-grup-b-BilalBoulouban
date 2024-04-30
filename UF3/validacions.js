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

function validarNom(name) {
  let nameRegex = /^[a-zA-ZÀ-ÿ\s]{3,50}$/;
  return nameRegex.test(name);
}

function validarEmail(email) {
  let emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}
function validarCognom(surname) {
  let surnameRegex = /\b([A-ZÀ-ÿ][-,a-z. ']+[ ]*)+/;
  return surnameRegex.test(surname);
}
function edat(age) {
  let ageRegex = /(1[8-9]|2[0-9]|3[0-5])/;
  return ageRegex.test(age);
}
function missatge(message) {
  let ageRegex = /^[A-Z]{10,200}$/;
  return ageRegex.test(age);
}

// addEventListeners...
addEventListener("submit", function (event) {
  event.preventDefault();

  const registrationForm = document.getElementById("");
  const nameInput = document.getElementById("name").value;
  const surnameInput = document.getElementById("surname").value;
  const emailInput = document.getElementById("email").value;
  const ageInput = document.getElementById("age").value;
  // const gender = characterItem.querySelector('strong:nth-of-type(3)').textContent.slice(8);
  const genderInput = document.getElementById("gender").value;
  const messageInput = document.getElementById("message").value;
  // if (
  //   name == "" ||
  //   surname == "" ||
  //   age == "" ||
  //   message == "" ||
  //   genere == ""
  // ) {
  //   alert("Tots els camps són requerits!");
  //   return false;
  // }

  //check if name is valid
  // if (!validarNom(name)) {
  //   alert("Nom no és vàlid");
  //   return false;
  // }
  // check if surname is valid
  if (!validarCognom(surname)) {
    alert("Cognom no és vàlid");
    return false;
  }

  // check if email is valid
  if (!validarEmail(correu)) {
    alert("Email no és vàlid");
    return false;
  }
  if (!edat(edat)) {
    alert("edat es menor");
    return false;
  }
  if (!message(message)) {
    alert("Misatge invalid");
    return false;
  }
  //save the data in the sessionStorage
  sessionStorage.setItem("nom", name);
  sessionStorage.setItem("cognom", surname);
  sessionStorage.setItem("correu", email);
  sessionStorage.setItem("genere", genere);
  sessionStorage.setItem("genere", message);

  console.log("Usuari registrat correctament");
  console.log(sessionStorage);
  window.location.href = "meteo.html";
});

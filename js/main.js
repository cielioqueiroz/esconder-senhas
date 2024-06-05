document.getElementById("form").addEventListener("submit", function (event) {
  event.preventDefault();

  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  if (email && password) {
    Toastify({
      text: "Formulário enviado com sucesso!",
      duration: 3000,
      gravity: "top",
      position: "right",
      backgroundColor: "#4CAF50",
    }).showToast();

    document.getElementById("form").reset();
  } else {
    Toastify({
      text: "Por favor, preencha todos os campos.",
      duration: 3000,
      gravity: "top",
      position: "right",
      backgroundColor: "#f44336",
    }).showToast();
  }
});

const togglePassword = document.getElementById("togglePassword");
const passwordField = document.getElementById("password");

togglePassword.addEventListener("click", function () {
  const type = passwordField.getAttribute("type") === "password" ? "text" : "password";
  passwordField.setAttribute("type", type);
  this.classList.toggle("fa-eye-slash");
});

document.getElementById("year").textContent = new Date().getFullYear();

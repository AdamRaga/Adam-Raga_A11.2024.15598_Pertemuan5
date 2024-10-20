function kirim() {
  const inputs = document.querySelectorAll("input","select");

  alert("Data disimpan!");
  return true;
}

function togglePassword() {
  const passwordField = document.querySelector('input[name="password"]');
  passwordField.type = passwordField.type === "password" ? "text" : "password";
}
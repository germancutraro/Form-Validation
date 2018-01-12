function addEvent (id, func) {
  document.getElementById(id).addEventListener('blur', func);
}

// Events
addEvent('name', validateName);
addEvent('zip', validateZip);
addEvent('email', validateEmail);
addEvent('phone', validatePhone);

// Functions

function validateName() {
  const name = document.getElementById('name');
  const re = /^[a-zA-Z]{2,20}/;
  re.test(name.value) === false ? name.classList.add('is-invalid') : name.classList.remove('is-invalid');
}

function validateZip() {
  const zip = document.getElementById('zip');
  const re = /^[0-9]{4,5}(-[0-9]{4})?$/;
  re.test(zip.value) === false ? zip.classList.add('is-invalid') : zip.classList.remove('is-invalid');
}

function validateEmail() {
  const email = document.getElementById('email');
  const re = /^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$/;
  re.test(email.value) === false ? email.classList.add('is-invalid') : email.classList.remove('is-invalid');
}

function validatePhone() {
  const phone = document.getElementById('phone');
  const re = /^\(?\d{3}\)?[-. ]?\d{3,4}[-. ]?\d{3,4}$/;
  re.test(phone.value) === false ? phone.classList.add('is-invalid') : phone.classList.remove('is-invalid');
}
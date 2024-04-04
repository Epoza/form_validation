const form = document.querySelector("form");
const email = document.getElementById("mail");
const emailError = email.nextElementSibling;
const emailRegEx =
  /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

const country = document.getElementById("country");
const countryError = country.nextElementSibling;
const countryRegEx =
/^[a-zA-Z\s-]{2,}$/;

const zipcode = document.getElementById("zipcode");
const zipcodeError = zipcode.nextElementSibling;
const zipcodeRegEx =
/^\d{5}(?:[-\s]?\d{4})?$/;

const password = document.getElementById("password");
const passwordError = password.nextElementSibling;
const passwordRegex =
/^(?=.*[A-Z])(?=.*[#$%@])[A-Za-z\d#$%@]{6,22}$/;

const passwordcheck = document.getElementById("passwordcheck");
const passwordcheckError = passwordcheck.nextElementSibling;

// validate functions
function validateEmail(){

};

function validateCountry(){

};

function validateZipcode(){

};

function validatePassword(){

};

function validatePasswordCheck(){

};

// event listeners
email.addEventListener("input", validateEmail);

country.addEventListener("input", validateCountry);

zipcode.addEventListener("input", validateZipcode);

password.addEventListener("input", validatePassword);

passwordcheck.addEventListener("input", validatePasswordCheck);

// form submit
form.addEventListener("submit", (event) => {
  // check validity of each input again
});

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
const passwordRegEx =
/^(?=.*[A-Z])(?=.*[#$%@*^!])[A-Za-z\d#$%@*^!]{6,22}$/;

const passwordcheck = document.getElementById("passwordcheck");
const passwordcheckError = passwordcheck.nextElementSibling;

// validate functions
function validateEmail(){
  const emailInput = email.value.trim();

  if (emailInput === '') { 
      email.classList.add('invalid'); 
      emailError.textContent = 'Email is required';
      emailError.classList.add('error', 'active'); // Corrected line
      return false; // Return false to indicate validation failure
  } else if (!emailRegEx.test(emailInput)) {
      email.classList.add('invalid'); 
      emailError.textContent = 'Email must contain "@" symbol, ex: test@gmail.com'; 
      emailError.classList.add('error', 'active'); // Corrected line
      return false; // Return false to indicate validation failure
  } else {
      emailError.textContent = ''; // Clear any existing error message
      email.classList.remove('invalid'); // Remove the invalid state CSS class
      emailError.classList.remove('error', 'active'); // Corrected line
      email.classList.add('valid'); // Add the valid state CSS class
      return true; // Return true to indicate validation success
  }
};

function validateCountry(){
  const countryInput = country.value.trim();

  if (countryInput === '') { 
      country.classList.add('invalid'); 
      countryError.textContent = 'Country is required';
      countryError.classList.add('error', 'active'); // Corrected line
      return false; // Return false to indicate validation failure
  } else if (!countryRegEx.test(countryInput)) {
      country.classList.add('invalid'); 
      countryError.textContent = 'Enter acronym or spelled out country name'; 
      countryError.classList.add('error', 'active'); // Corrected line
      return false; // Return false to indicate validation failure
  } else if (countryInput.length > 30){
      country.classList.add('invalid'); 
      countryError.textContent = 'Country name is to long, please enter acronym instead'; 
      countryError.classList.add('error', 'active'); // Corrected line
      return false; // Return false to indicate validation failure
  } else {
      countryError.textContent = ''; // Clear any existing error message
      country.classList.remove('invalid'); // Remove the invalid state CSS class
      countryError.classList.remove('error', 'active'); // Corrected line
      country.classList.add('valid'); // Add the valid state CSS class
      return true; // Return true to indicate validation success
  }
};

function validateZipcode(){
  const zipcodeInput = zipcode.value.trim();
 
  if (zipcodeInput === '') { 
      zipcode.classList.add('invalid'); 
      zipcodeError.textContent = 'zipcode is required';
      zipcodeError.classList.add('error', 'active'); // Corrected line
      return false; // Return false to indicate validation failure
  } else if (!zipcodeRegEx.test(zipcodeInput)) {
      zipcode.classList.add('invalid'); 
      zipcodeError.textContent = 'Enter in this form ex: "12345" or "12345-1234"'; 
      zipcodeError.classList.add('error', 'active'); // Corrected line
      return false; // Return false to indicate validation failure
  } else if (zipcodeInput.length > '10'){
      zipcode.classList.add('invalid'); 
      zipcodeError.textContent = 'Zipcode is too long, enter in this form ex: "12345" or "12345-1234"'; 
      zipcodeError.classList.add('error', 'active'); // Corrected line
      return false; // Return false to indicate validation failure
  } else {
      zipcodeError.textContent = ''; // Clear any existing error message
      zipcode.classList.remove('invalid'); // Remove the invalid state CSS class
      zipcodeError.classList.remove('error', 'active'); // Corrected line
      zipcode.classList.add('valid'); // Add the valid state CSS class
      return true; // Return true to indicate validation success
  }

};

function validatePassword() {
  const passwordInput = password.value.trim();

  if (passwordInput === '') { 
      password.classList.add('invalid'); 
      passwordError.textContent = 'Password is required';
      passwordError.classList.add('error', 'active');
      return false; // Return false to indicate validation failure
  } else if (!passwordRegEx.test(passwordInput)) {
      if (passwordInput.length < 6) {
        password.classList.add('invalid'); 
        passwordError.textContent = 'Password is too short'; 
        passwordError.classList.add('error', 'active');
        return false; // Return false to indicate validation failure
      } else if (!/[A-Z]/.test(passwordInput)) {
          password.classList.add('invalid'); 
          passwordError.textContent = 'Password must contain at least one capital letter'; 
          passwordError.classList.add('error', 'active');
          return false; // Return false to indicate validation failure
      } else if (!/[$#@%*^!]/.test(passwordInput)) {
          password.classList.add('invalid'); 
          passwordError.textContent = 'Password must contain at least one special character ($#@%*^!)'; 
          passwordError.classList.add('error', 'active');
          return false; // Return false to indicate validation failure
      } else if (passwordInput.length > 22) {
          password.classList.add('invalid'); 
          passwordError.textContent = 'Password is too long'; 
          passwordError.classList.add('error', 'active');
          return false; // Return false to indicate validation failure
      }

      password.classList.add('invalid'); 
      passwordError.textContent = 'Password does not meet requirements, may contain invalid character'; 
      passwordError.classList.add('error', 'active');
      return false; // Return false to indicate validation failure
  } else {
      passwordError.textContent = ''; // Clear any existing error message
      password.classList.remove('invalid'); // Remove the invalid state CSS class
      passwordError.classList.remove('error', 'active'); // Remove the error state CSS class
      password.classList.add('valid'); // Add the valid state CSS class
      return true; // Return true to indicate validation success
  }
};

function validatePasswordCheck() {
  const passwordInput = password.value.trim();
  const passwordCheckInput = passwordcheck.value.trim();

  if (passwordCheckInput === '') {
    passwordcheck.classList.add('invalid'); 
    passwordcheckError.textContent = 'Please confirm your password';
    passwordcheckError.classList.add('error', 'active');
    return false; // Return false to indicate validation failure
  } else if (passwordInput !== passwordCheckInput) {
    passwordcheck.classList.add('invalid'); 
    passwordcheckError.textContent = 'Passwords do not match';
    passwordcheckError.classList.add('error', 'active');
    return false; // Return false to indicate validation failure
  } else {
    // If the passwords match, clear any existing error message and return true
    passwordcheckError.textContent = ''; 
    passwordcheck.classList.remove('invalid');
    passwordcheckError.classList.remove('error', 'active');
    passwordcheck.classList.add('valid');
    return true; // Return true to indicate validation success
  }
}
// event listeners
email.addEventListener("input", validateEmail);

country.addEventListener("input", validateCountry);

zipcode.addEventListener("input", validateZipcode);

password.addEventListener("input", validatePassword);

passwordcheck.addEventListener("input", validatePasswordCheck);

// form submit
form.addEventListener("submit", (event) => {
  event.preventDefault();

  // Validate all fields
  const isEmailValid = validateEmail();
  const isCountryValid = validateCountry();
  const isZipcodeValid = validateZipcode();
  const isPasswordValid = validatePassword();
  const isPasswordCheckValid = validatePasswordCheck();

  // If all fields are valid, allow form submission
  if (isEmailValid && isCountryValid && isZipcodeValid && isPasswordValid && isPasswordCheckValid) {
    form.submit();
  }
});

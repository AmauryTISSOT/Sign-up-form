const firstName = [
  "firstName",
  document.querySelector("#firstName"),
  "Please type in your first name",
];

const lastName = [
  "lastName",
  document.querySelector("#lastName"),
  "Please type in your last name",
];

const email = [
  "email",
  document.querySelector("#email"),
  "Please enter in a valid Email",
];

const phoneNumber = [
  "phoneNumber",
  document.querySelector("#phoneNumber"),
  "Please enter a valid phone number",
];

const password = ["password", document.querySelector("#password"), ""];
const passwordValidation = [
  "passwordValidation",
  document.querySelector("#passwordValidation"),
  "",
];

const formListListener = [firstName, lastName, email, phoneNumber];

// function to get error div.

const errorSelector = (idSelector) =>
  document.querySelector(`#${idSelector[0]}Error`);

// function to detect if input is invalid and show message error if not
const inputListener = (selectorConst) =>
  selectorConst[1].addEventListener("input", (event) => {
    if (!selectorConst[1].validity.valid) {
      errorSelector(selectorConst).textContent = selectorConst[2];
      console.log("empty");
      console.log(selectorConst.value);
    } else {
      errorSelector(selectorConst).textContent = "";
      console.log(selectorConst.value);
    }
  });

// main loop
const loopListener = () =>
  formListListener.forEach((element) => {
    inputListener(element);
  });

// password validation
password[1].addEventListener("input", function (event) {
  if (password[1].validity.patternMismatch) {
    const currentValue = password[1].value;
    const regExpCap = /[A-Z]/g;
    const regExpDig = /[0-9]/g;
    let result = "";
    if (regExpCap.test(currentValue)) {
      result += "";
    } else {
      result += `Missing at least 1 capital letter. `;
      result += "\n";
    }

    if (regExpDig.test(currentValue)) {
      result += "";
    } else {
      result += "Missing at least 1 number. ";
      result += "\n";
    }

    if (currentValue.length < 9) {
      result += "Password must be at least 8 characters. ";
      result += "\n";
    } else {
      result += "";
    }
    errorSelector(password).textContent = result;
  } else {
    errorSelector(password).textContent = "";
  }
});

// Inject message error if the password don't match
passwordValidation[1].addEventListener("input", (event) => {
  if (passwordValidation[1].value === password[1].value) {
    errorSelector(passwordValidation).textContent = "";
  } else {
    errorSelector(passwordValidation).textContent = "Passwords do not match";
  }
});

loopListener();

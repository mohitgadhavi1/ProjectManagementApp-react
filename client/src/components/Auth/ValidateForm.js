import { isEmail } from "validator";

const validateSignUpForm = (payload) => {
  const errors = {};
  let message = "";
  let isFormValid = true;

  if (
    !payload ||
    typeof payload.username !== "string" ||
    payload.username.trim().length === 0
  ) {
    isFormValid = false;
    errors.username = "Please provide a user name.";
  }

  if (
    !payload ||
    typeof payload.email !== "string" ||
    !isEmail(payload.email)
  ) {
    isFormValid = false;
    errors.email = "Please provide a correct email address.";
  }

  if (
    !payload ||
    typeof payload.password !== "string" ||
    payload.password.trim().length < 8
  ) {
    isFormValid = false;
    errors.password = "Password must have at least 8 characters.";
  }

  if (!payload || payload.pwconfirm !== payload.password) {
    isFormValid = false;
    errors.pwconfirm = "Password confirmation doesn't match.";
  }

  if (!isFormValid) {
    message = "Check the form for errors.";
  }

  return {
    success: isFormValid,
    message,
    errors,
  };
};

const validateLoginForm = (payload) => {
  const errors = {};
  let message = "";
  let isFormValid = true;

  if (
    !payload ||
    typeof payload.username !== "string" ||
    payload.username.trim().length === 0
  ) {
    isFormValid = false;
    errors.username = "Please provide your user name.";
  }

  if (
    !payload ||
    typeof payload.password !== "string" ||
    payload.password.trim().length === 0
  ) {
    isFormValid = false;
    errors.password = "Please provide your password.";
  }

  if (!isFormValid) {
    message = "Check the form for errors.";
  }

  return {
    success: isFormValid,
    message,
    errors,
  };
};

export const validateLoginForm = validateLoginForm;
export const validateSignUpForm = validateSignUpForm;

const inputs = document.querySelectorAll("input");

// regex patterns
const patterns = {
  telephone: /^\d{11}$/,
  username: /^[a-z\d]{5,12}$/i,
  password: /^[\d\w@-]{8,20}$/i,
  slug: /^[a-z\d-]{8,20}$/,
  email: /^([a-z\d\.-]+)@([a-z\d-]+)\.([a-z]{2,8})(\.[a-z]{2,8})?$/,
  //             yourname @ domain   .  com          ( .uk )
};

// validation function
function validate(field, regex) {
  if (regex.test(field.value)) {
    field.className = "valid";
  } else {
    field.className = "invalid";
  }
}

// attach keyup events to inputs
inputs.forEach((input) => {
  input.addEventListener("keyup", (e) => {
    // console.log(patterns[e.target.attributes.name.value]);
    validate(e.target, patterns[e.target.attributes.name.value]);
  });
});

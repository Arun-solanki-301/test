export function FormValidation(UserEmail, UserPassword) {
  if (UserEmail.length === 0 && UserPassword.length === 0) {
    return false;
  } else if (UserPassword.length < 6) {
    return false;
  } else return true;
}

export function PasswordValidate(UserPassword) {
  const Password = UserPassword.split("");
  return Password;
}

export function emailValidation() {
  let reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w\w+)+$/;
  const email = "arunsolanki@gmail.com";
  if (reg.test(email) === false) {
    return false;
  } else {
    return true;
  }
}

// export {FormValdation};
// export {PasswordValidate};

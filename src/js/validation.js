let checkAll = () => {
  /* Check empty */
  let checkValid =
    checkEmpty("name", "name__error") &
    checkEmpty("email", "email__error") &
    checkEmpty("message", "message__error");

  /* Check form email */
  checkValid &= checkEmail("email", "email__error");

  return checkValid;
};

const checkEmpty = (inputId, error) => {
  let input = document.getElementById(inputId);
  if (input.value.trim() === "") {
    document.getElementById(error).innerHTML = input.name + " can't be empty.";
    document.getElementById(error).style.display = "block";
    return false;
  } else {
    document.getElementById(error).innerHTML = "";
    document.getElementById(error).style.display = "none";
    return true;
  }
};

const checkEmail = (inputId, error) => {
  let input = document.getElementById(inputId);
  let regexEmail = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/;
  if (regexEmail.test(input.value)) {
    document.getElementById(error).innerHTML = "";
    document.getElementById(error).style.display = "none";
    return true;
  } else {
    document.getElementById(error).innerHTML = "Email is not true";
    document.getElementById(error).style.display = "block";
    return false;
  }
};

document.getElementById("name").onblur = () => {
  checkEmpty("name", "name__error");
};
document.getElementById("email").onblur = () => {
  checkEmpty("email", "email__error");
  checkEmail("email", "email__error");
};
document.getElementById("message").onblur = () => {
  checkEmpty("message", "message__error");
};
document.getElementById("send").onclick = () => {
  checkAll();
};

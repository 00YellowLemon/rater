let selectedRating = "";

function validate() {
  const inputs = document.querySelectorAll("input[name=rad]");
  let value = false;

  for (let i = 0; i < inputs.length; i++) {
    if (inputs[i].checked) {
      value = true;
      selectedRating = inputs[i].value;
      break;
    }
  }

  if (value) {
    return selectedRating;
  } else {
    return false;
  }
}

export { validate, selectedRating };



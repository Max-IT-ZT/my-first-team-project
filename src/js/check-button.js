var input1 = document.getElementById('users-name');
var input2 = document.getElementById('user-surname');
var input3 = document.getElementById('mail-id');
var input4 = document.getElementById('phone-id');
var input5 = document.getElementById('card-id');
var myButton = document.getElementById('mybutton');

function checkInputs() {
  if (
    input1.value !== '' &&
    input2.value !== '' &&
    input3.value !== '' &&
    input4.value !== '' &&
    input5.value !== ''
  ) {
    myButton.disabled = false;
  } else {
    myButton.disabled = true;
  }
}

input1.addEventListener('input', checkInputs);
input2.addEventListener('input', checkInputs);
input3.addEventListener('input', checkInputs);
input4.addEventListener('input', checkInputs);
input5.addEventListener('input', checkInputs);

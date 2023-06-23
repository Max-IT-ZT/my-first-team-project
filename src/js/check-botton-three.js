var input1 = document.getElementById('user-mail');
var myButtonthree = document.getElementById('mybuttonthree');

function checkInputs() {
  if (input1.value !== '') {
    myButtonthree.disabled = false;
  } else {
    myButtonthree.disabled = true;
  }
}

input1.addEventListener('input', checkInputs);

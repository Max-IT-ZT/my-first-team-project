var input1 = document.getElementById('userss-name');
var input2 = document.getElementById('mails-id');
var input3 = document.getElementById('phones-id');
var myButtontwo = document.getElementById('mybuttontwo');

function checkInputs() {
  if (input1.value !== '' && input2.value !== '' && input3.value !== '') {
    myButtontwo.disabled = false;
  } else {
    myButtontwo.disabled = true;
  }
}

input1.addEventListener('input', checkInputs);
input2.addEventListener('input', checkInputs);
input3.addEventListener('input', checkInputs);

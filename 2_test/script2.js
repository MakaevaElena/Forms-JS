const form1 = document.querySelector('#question1');
const form2 = document.querySelector('#question2');
const button1 = document.querySelector('#button_submit1');
const button2 = document.querySelector('#button_submit2');
const radio1 = document.querySelector('#radio1');
const radio3 = document.querySelector('#radio3');
const result = document.querySelector('.result');

let res = 0;
let sum = 0;

form1.addEventListener('submit', function (evt) {
    evt.preventDefault();
    form2.classList.remove('hidden');
    if (radio1.checked == true) {
        res += 1;
    }
    sum += 1;
    button1.setAttribute('disabled', true);
});

form2.addEventListener('submit', function (evt) {
    evt.preventDefault();
    if (radio3.checked == true) {
        res += 1;
    }
    sum += 1;
    button2.setAttribute('disabled', true);
    result.classList.remove('hidden');
    result.textContent = `Result: ${res} correct answers to ${sum} questions`
});



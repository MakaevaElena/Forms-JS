const form4 = document.querySelector('#form4');
const text = document.querySelector('#text');
const styledText = document.querySelector('.styledText');
const button = document.querySelector('.button_submit');
const bold = document.querySelector('#bold');
const underline = document.querySelector('#underline');
const italics = document.querySelector('#italics');
const left = document.querySelector('#left');
const right = document.querySelector('#right');
const justify = document.querySelector('#justify');
const result = document.querySelector('.result');

text.addEventListener('input', (evt) => {
    button.classList.remove('hidden');
});

form4.addEventListener('submit', (evt) => {
    evt.preventDefault();
    result.classList.remove('hidden');
    styledText.textContent = text.value;
});

bold.addEventListener('change', (evt) => {
    styledText.classList.toggle('bold');
});

underline.addEventListener('change', (evt) => {
    styledText.classList.toggle('underline');
});

italics.addEventListener('change', (evt) => {
    styledText.classList.toggle('italics');
});

left.addEventListener('change', (evt) => {
    styledText.classList.add('left');
    styledText.classList.remove('right', 'justify');
});

right.addEventListener('change', (evt) => {
    styledText.classList.add('right');
    styledText.classList.remove('left', 'justify');
});

justify.addEventListener('change', (evt) => {
    styledText.classList.add('justify');
    styledText.classList.remove('right', 'left');
});







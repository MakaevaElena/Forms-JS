const select1 = document.querySelector('.select1');
const select2 = document.querySelector('.select2');
const select3 = document.querySelector('.select3');
const bookName = document.querySelector('#bookName');
const quantity = document.querySelector('#quantity');
const byerName = document.querySelector('#name');
const address = document.querySelector('#address');
const date = document.querySelector('#date');
const comment = document.querySelector('#comment');
const book1 = document.querySelector('.book1 .title');
const book2 = document.querySelector('.book2 .title');
const book3 = document.querySelector('.book3 .title');
const form = document.querySelector('#form');
const bookshell = document.querySelector('.bookshell');

const resultTemplate = document.querySelector('#result').content.querySelector('.result');
const resultContainer = document.querySelector('.resultContainer');

select1.addEventListener('click', (evt) => {
    bookName.value = book1.textContent;
});

select2.addEventListener('click', (evt) => {
    bookName.value = book2.textContent;
});

select3.addEventListener('click', (evt) => {
    bookName.value = book3.textContent;
});

form.addEventListener('submit', (evt) => {
    evt.preventDefault();

    if (byerName.value && bookName.value && date.value && address.value) {
        bookshell.classList.add('hidden');

        const result = resultTemplate.cloneNode(true);

        result.querySelector('.textResult').textContent = `${byerName.value}, thanks for the order! 
        
        Book ${bookName.value} will be delivered on ${date.value} to ${address.value}`;

        resultContainer.appendChild(result);
    } else {
        alert('Заполните ВСЕ поля формы');
    }

});

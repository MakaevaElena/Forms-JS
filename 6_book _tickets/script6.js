const booking = document.querySelector('.booking');
const buttonSearch = document.querySelector('#search');
// const priceBlock = document.querySelector('.price');
const buttonBook = document.querySelector('#book');
const inputSeats = document.querySelectorAll('input');
const summPrice = document.querySelector('#summPrice');
const seats = document.querySelector('.seats');
const myTickets = document.querySelector('.myTickets');
const direction = document.querySelector('#direction');
const date = document.querySelector('#date');
const myTable = document.querySelector('#myTable');

const ticket = {
    direction: '',
    date: '',
    seat: ''
}

buttonSearch.addEventListener('click', () => {
    booking.classList.remove('hidden');

});

seats.addEventListener('click', () => {
    let summ = 0;
    for (i = 0; i < inputSeats.length; i++) {
        if (inputSeats[i].checked === true) {
            summ += 50;
        }
    }
    summPrice.innerHTML = summ + ' $';
});

buttonBook.addEventListener('click', () => {
    if (date) {
        myTickets.classList.remove('hidden');
        const checkedInputs = document.querySelectorAll('input[type=checkbox]:checked');
        for (i = 0; i < checkedInputs.length; i++) {
            let stroka = document.createElement("tr");
            let stolb1 = document.createElement('td');
            let stolb2 = document.createElement('td');
            let stolb3 = document.createElement('td');
            stroka.appendChild(stolb1);
            stroka.appendChild(stolb2);
            stroka.appendChild(stolb3);
            stolb1.innerHTML = direction.value;
            stolb2.innerHTML = date.value;
            stolb3.innerHTML = checkedInputs[i].value;
            document.getElementById("myTable").appendChild(stroka);

        }
    } else {
        alert('Выберите дату');
    }

});







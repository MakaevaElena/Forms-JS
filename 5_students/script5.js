const select = document.querySelector('#select');
const form1 = document.getElementById('form1');
const formContainer = document.querySelector('.form');
const result = document.querySelector('.result');
const topic = document.querySelector('#topic');
const resultTopic = document.querySelector('.resultTopic');

console.log(form1);

select.addEventListener('click', () => {
    formContainer.classList.remove('hidden');
})

form1.addEventListener('submit', function (evt) {
    evt.preventDefault();
    result.classList.remove('hidden');
    let topicText = document.createElement('h2');
    topicText.innerHTML = 'Topic:' + topic.value;

    let students = document.querySelector('.table').getElementsByTagName('tr');
    for (let i = 1; i < students.length; i++) {
        let stroka = document.createElement('tr');
        let stolb1 = document.createElement('td');
        let stolb2 = document.createElement('td');
        if (students[i].querySelector('input[type=checkbox]').checked === true) {
            stolb1.innerHTML = `Student ${i}`;
            stolb2.innerHTML = 'present';
        } else {
            stolb1.innerHTML = `Student ${i}`;
            stolb2.innerHTML = '';
        }
        resultTopic.appendChild(topicText);
        stroka.appendChild(stolb1);
        stroka.appendChild(stolb2);
        document.getElementById('resultTable').appendChild(stroka);

    }
})
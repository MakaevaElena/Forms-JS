const postTemplate = document.querySelector('#post').content.querySelector('.post');
const inputName = document.querySelector('#name');
const text = document.querySelector('#message');
const postList = document.querySelector('.post_list');
const button = document.querySelector('#button_submit');

function createPost() {
    const newPost = postTemplate.cloneNode(true);

    newPost.querySelector('.name').textContent = inputName.value;
    newPost.querySelector('.date').textContent = `${new Date().toLocaleTimeString()}  ${new Date().toLocaleDateString()} `;
    newPost.querySelector('.text_post').textContent = text.value;

    console.log(inputName.value);
    postList.appendChild(newPost);
}

button.addEventListener('click', function (evt) {
    if (inputName.value && text.value) {
        inputName.setCustomValidity('');
        createPost();
        inputName.value = "";
        text.value = "";
    } else if (!inputName.value) {
        alert('Введите имя');
    } else { alert('Введите текст'); }
})


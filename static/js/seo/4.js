'use strict';

const form = document.querySelector('.form-todo')
const ul = document.querySelector('.list-todo')

form.addEventListener('submit', (e) => {
    e.preventDefault()
    const li = document.createElement('li')
    const { text } = e.target
    li.innerHTML = `${text.value} <button>삭제</button>`
    ul.appendChild(li)
})
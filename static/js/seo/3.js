'use strict';

const form = document.querySelector('.message-form')
const btn = document.querySelector('#send')
const ul = document.querySelector('#get_message')

form.addEventListener('submit', (e) => {
    e.preventDefault()
    const li = document.createElement('li')
    const { name, text } = e.target
    li.innerHTML = `${name.value} : ${text.value}`
    ul.appendChild(li)
    form.reset()
})

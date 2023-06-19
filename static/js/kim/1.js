'use strict';

function add(e) {
    // e = this.parentNode 
    const fruit = e.children[0].innerText;
    const price = e.children[1].innerText;

    const list = document.getElementById('list'); // ul 태그 
    const item = document.createElement('li'); //li 태그 생성

    item.innerText = `${fruit} - ${price}`;
    list.appendChild(item); //ul 태그 안에 li 태그 추가
}

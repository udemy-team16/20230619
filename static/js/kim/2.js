'use strict';



const btn = document.getElementById('btn');
btn.addEventListener('click', () => {
    addDiv(0, 1, 'first');
    addDiv(0, 1, 'second');
})
const boxWrap = document.createElement('div');
boxWrap.className = 'box_wrap';
function addDiv(a, b, c) {
    const box = document.createElement('div');
    box.className = 'box';

    const newStrong = document.getElementById(c).children[a].innerText;
    const newDiv = document.getElementById(c).children[b].innerText;

    const strong = document.createElement('strong');
    strong.innerText = newStrong;

    const div = document.createElement('div');
    div.innerText = newDiv;


    const body = document.querySelector('body');
    boxWrap.appendChild(box).appendChild(strong);
    boxWrap.appendChild(box).appendChild(div);

    body.appendChild(boxWrap);
}

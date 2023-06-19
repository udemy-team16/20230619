'use strict';

const btn = document.getElementById("addText");
btn.addEventListener('click', () => {
    const textValue = window.prompt();
    const next_num = document.querySelectorAll(".text-box").length + 1;

    const newDiv = document.createElement("div");
    newDiv.classList.add('text-box');
    newDiv.id = `box_${next_num}`;
    newDiv.innerHTML = `
        <h3><span id="text-num">${next_num}</span>번 게시글</h3>
        <p>${textValue}</p>
    `

    const box_list = document.querySelector(".box-list");
    box_list.appendChild(newDiv);
});
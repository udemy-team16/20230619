'use strict';

window.onload = () => {
    loadWork();
}

let box_list = [];
function loadWork() {
    const listValue = JSON.parse(localStorage.getItem('box'));
    if (listValue) {
        listValue.forEach(item => {
            createDiv(item);
        });
    }
}

const btn = document.getElementById("addBtn");
btn.addEventListener('click', () => {
    const input_value = document.getElementById("textValue").value;
    createDiv(input_value);

    localStorage.setItem('box', JSON.stringify(box_list));
    document.getElementById("textValue").value = '';
});

// 삭제
function deleteBtn(parent, previous) {
    parent.remove();

    box_list = box_list.filter(e => e != previous.innerText);
    localStorage.setItem('box', JSON.stringify(box_list));
}

// 추가
function createDiv(val) {
    const work_list = document.querySelector(".workList");

    const newDiv = document.createElement("div");
    newDiv.classList.add("box");
    newDiv.id = `box_${work_list.children.length}`;
    newDiv.innerHTML = `
        <strong>${val}</strong>
        <button class="delete-btn" onclick="deleteBtn(this.parentNode, this.previousElementSibling)">삭제</button>
    `;

    work_list.appendChild(newDiv);
    box_list.push(val);
}

// 텍스트 입력 후 엔터키 눌렀을 시
document.getElementById("textValue").addEventListener('keyup', (e) => {
    if (e.key === 'Enter') {
        btn.click();
    }
});
'use strict';

// 렌더링 시 로컬스토리지 목록 가져오기.
window.onload = function () {
    for (let i = 0; i < localStorage.length; i++) {
        let key = localStorage.key(i);
        let value = localStorage.getItem(key);

        const li_tag = document.createElement("li");
        li_tag.innerHTML = `${key} : ${value}`;
        ul_tag.appendChild(li_tag);
    }
}
const btn = document.getElementById("send");
const ul_tag = document.getElementById('get_message');


// 로컬스토리지 변화 감지
window.addEventListener('storage', (event) => {
    const li_tag = document.createElement("li");
    li_tag.innerHTML = `
        ${event.key} : ${event.newValue}
    `;

    ul_tag.appendChild(li_tag);
});

// 전송 버튼 클릭 시
btn.addEventListener('click', () => {
    const name = document.getElementById("user-name");
    const text_value = document.getElementById("user-text");

    localStorage.setItem(`${name.value}`, `${text_value.value}`);
    const li_tag = document.createElement("li");
    li_tag.innerHTML = `
        ${name.value} : ${text_value.value}
    `;

    ul_tag.appendChild(li_tag);

    name.value = "";
    text_value.value = "";

    li_tag.addEventListener('click', function (e) {
        li_tag.remove();
        localStorage.removeItem(name.value);
    });
});

// 텍스트 입력 후 엔터키 눌렀을 시
document.getElementById("user-text").addEventListener('keyup', (e) => {
    if (e.key === 'Enter') {
        btn.click();
    }
});




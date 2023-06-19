'use strict';

const btn = document.getElementById('addBtn');

btn.addEventListener('click', function () {
    const text = document.getElementById('inputBox').value;

    const ListItem = document.createElement('div');
    ListItem.className = 'item';
    ListItem.innerText = text;

    const removeBtn = document.createElement('button');
    removeBtn.className = 'removeBtn';
    removeBtn.innerText = '삭제';

    const List = document.getElementById('List');
    List.appendChild(ListItem);
    List.appendChild(removeBtn);
});
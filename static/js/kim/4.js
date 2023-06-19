'use strict';

const btn = document.getElementById('addBtn');

btn.addEventListener('click', function () {
    const text = document.getElementById('inputBox').value;
    const ListWrap = document.getElementById('ListWrap');

    const List = document.createElement('div');
    List.id = 'List'

    ListWrap.appendChild(List);

    const ListItem = document.createElement('div');
    ListItem.className = 'item';
    ListItem.innerText = text;

    const removeBtn = document.createElement('button');
    removeBtn.className = 'removeBtn';
    removeBtn.innerText = '삭제';


    List.appendChild(ListItem);
    List.appendChild(removeBtn);

    removeBtn.addEventListener('click', function () {
        const List = this.parentNode;
        List.remove();
    });
});




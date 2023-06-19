'use strict';

function addList(val) {
    const name = val.children[0].innerText;
    const cost = val.children[1].innerText;

    const ul_tag = document.getElementById("ul_tag");
    const li_tag = document.createElement("li");
    li_tag.innerHTML = `${name} - ${cost}`;

    ul_tag.appendChild(li_tag);
}
'use strict';
function moveCart(list) {
    let frist = list.childNodes[1].innerHTML
    let cart2 = document.getElementById("cart");
    let cartItem = document.createElement("div");
    cartItem.innerHTML = `<div>${frist}<div>`;
    cart2.appendChild(cartItem);
}

















'use strict';
const buttons = document.querySelectorAll(".add-to-cart");
buttons.forEach((button) => {
    button.addEventListener("click", addCart);
});

function addCart(event) {
    const button = event.target;
    const productDiv = button.parentNode;
    const productName = productDiv.children[0].innerText;
    const productPrice =
        productDiv.children[1].innerText;
    const cartItems = document.querySelector(".cart-items");
    const listItem = document.createElement("li");

    listItem.innerText = `${productName} - ${productPrice}`;
    cartItems.appendChild(listItem);
}
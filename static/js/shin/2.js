'use strict';

let frist = document.getElementById("frist")
let second = document.getElementById("second")
let hello = document.createElement("p")
let smile = document.createElement("p")
hello.innerHTML = "안녕하세요"
smile.innerHTML = '반갑습니다.'
frist.appendChild(hello)
second.appendChild(smile)

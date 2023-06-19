'use strict';
const btn = document.querySelector('.btn-make-board')
const boardWrapper = document.querySelector('.board-wrapper')
let boardNum = document.querySelectorAll('.board').length
console.log(boardNum.length);
btn.addEventListener('click', makeBoard)

function makeBoard() {
    boardNum++
    const board = document.createElement('div')
    board.classList.add('board')
    boardWrapper.appendChild(board)
    const title = document.createElement('h1')
    const content = document.createElement('p')

    title.innerHTML = `자바스크립트로 만든 ㄴ${boardNum}번째 게시글`
    content.innerHTML = `자바스크립트로 만든 ${boardNum}번쨰 게시글입니다`

    board.appendChild(title)
    board.appendChild(content)
}

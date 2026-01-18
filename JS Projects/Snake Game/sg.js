const board = document.querySelector('.board')
const blockhieght = 30;
const blockwidth = 30;

const cols = Math.floor(board.clientWidth/blockwidth)
const rows = Math.floor(board.clientHeight/blockhieght)

for ( let i = 0 ; i < rows*cols; i++){
    const block = document.createElement('div')
    block.classList.add('block')
    board.appendChild(block)
}
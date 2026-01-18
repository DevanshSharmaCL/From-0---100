const board = document.querySelector('.board')
const blockhieght = 50;
const blockwidth = 50;

const cols = Math.floor(board.clientWidth / blockwidth)
const rows = Math.floor(board.clientHeight / blockhieght)

let intervalid = null;

let food = { x: Math.floor(Math.random() * rows), y: Math.floor(Math.random() * cols) }

const blocks = [];
const snake = [{
    x: 1, y: 1
}]

let direction = 'down'

// for ( let i = 0 ; i < rows*cols; i++){
//     const block = document.createElement('div')
//     block.classList.add('block')
//     board.appendChild(block)
// }

for (let row = 0; row < rows; row++) {
    for (let col = 0; col < cols; col++) {
        const block = document.createElement('div')
        block.classList.add('block')
        board.appendChild(block)
        block.innerText = `${row}-${col}`
        blocks[`${row}-${col}`] = block
    }
}

function renderSnake() {
    let head = null

    blocks[`${food.x}-${food.y}`].classList.add('food')

    if (direction === 'down') {
        head = { x: snake[0].x + 1, y: snake[0].y }
    } else if (direction === 'up') {
        head = { x: snake[0].x - 1, y: snake[0].y }
    } else if (direction === 'left') {
        head = { x: snake[0].x, y: snake[0].y - 1 }
    } else if (direction === 'right') {
        head = { x: snake[0].x, y: snake[0].y + 1 }
    }

    if (head.x < 0 || head >= rows || head.y < 0 || head.y >= cols) {
        alert("Game Over")
        clearInterval(intervalid)
    }

    if(head.x===food.x && head.y===food.y){
        blocks[`${food.x}-${food.y}`].classList.remove('food')
        food = { x: Math.floor(Math.random() * rows), y: Math.floor(Math.random() * cols) }
        blocks[`${food.x}-${food.y}`].classList.add('food')
        snake.unshift(head)
    }

    snake.forEach(segment => {
        blocks[`${segment.x}-${segment.y}`].classList.remove('fill')
    })
    snake.unshift(head)
    snake.pop()
    snake.forEach(segment => {
        // console.log(blocks[`${segment.x}-${segment.y}`]).classList.add('fill')
        blocks[`${segment.x}-${segment.y}`].classList.add('fill')
    })
}

intervalid = setInterval(() => {
    renderSnake()
}, 100)

// ArrowDown
// ArrowLeft
// ArrowUp
// ArrowRight

addEventListener("keydown", (e) => {
    if (e.key === "ArrowUp") {
        direction = 'up'
    }
    if (e.key === "ArrowDown") {
        direction = 'down'
    }
    if (e.key === "ArrowRight") {
        direction = 'right'
    }
    if (e.key === "ArrowLeft") {
        direction = 'left'
    }

})


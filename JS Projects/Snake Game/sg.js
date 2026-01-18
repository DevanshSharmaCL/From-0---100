const board = document.querySelector('.board')
const startbtn = document.querySelector('.btn-start')
const modal = document.querySelector('.modal')
const StartGameModal = document.querySelector('.start-game')
const GameOverModal = document.querySelector('.game-over')
const restartBtn = document.querySelector('.btn-restart')

const HighScoreEle = document.querySelector('#high-score')
const ScoreEle = document.querySelector('#score') 
const TimeEle = document.querySelector('#time')

const blockhieght = 50;
const blockwidth = 50;

let highScore = localStorage.getItem('highScore') || 0;
let score = 0;
let time = `00:00`;

HighScoreEle.innerText = highScore

const cols = Math.floor(board.clientWidth / blockwidth)
const rows = Math.floor(board.clientHeight / blockhieght)

let intervalid = null;
let timeIntervalid = null;

let food = { x: Math.floor(Math.random() * rows), y: Math.floor(Math.random() * cols) }

const blocks = [];
let snake = [{
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
        clearInterval(intervalid)

        modal.style.display = 'flex'
        StartGameModal.style.display = 'none'
        GameOverModal.style.display = 'flex'

        return
    }

    if(head.x===food.x && head.y===food.y){
        blocks[`${food.x}-${food.y}`].classList.remove('food')
        food = { x: Math.floor(Math.random() * rows), y: Math.floor(Math.random() * cols) }
        blocks[`${food.x}-${food.y}`].classList.add('food')
        snake.unshift(head)

        score += 10
        ScoreEle.innerText = score

        if(score > highScore){
            highScore = score
            localStorage.setItem('highScore',highScore)

        }
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

// intervalid = setInterval(() => {
//     renderSnake()
// }, 100)

startbtn.addEventListener('click',()=>{
    modal.style.display='none'
    intervalid = setInterval(()=>{
        renderSnake()
    },100)
    timeIntervalid = setInterval(()=>{
        let [mins,secs] = time.split(':').map(Number)
        if(secs === 59){
            mins += 1
            secs = 0
        }else{
            secs += 1
        }
        time = `${mins}:${secs}`
        TimeEle.innerText = time

    },1000)
})

restartBtn.addEventListener('click', restartGame)

function restartGame(){
    blocks[`${food.x}-${food.y}`].classList.remove('food')
    snake.forEach(segment => {
        blocks[`${segment.x}-${segment.y}`].classList.remove('fill')
    })

    score = 0
    time = `00:00`

    ScoreEle.innerText = score
    TimeEle.innerText = time
    HighScoreEle.innerText = highScore

    modal.style.display='none'
    snake = [{ x: 1, y: 1 }]
    food = { x: Math.floor(Math.random() * rows), y: Math.floor(Math.random() * cols) }
    intervalid = setInterval(()=>{
        renderSnake()
    },100)
}

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


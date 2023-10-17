const square = document.querySelectorAll('.square')
const mole = document.querySelectorAll('.mole')
const timeLeft = document.querySelectorAll('#time-left')
let score = document.querySelector('#score')

let result = 0
let hitPosition
let currentTime = 60
let timerId = null

function randomSquare() {
    square.forEach(className => {
        className.classList.remove('mole')
    })
    let randomPosition = square [Math.floor(Math.random()*9)]
    randomPosition.classList.add('mole')

    hitPosition = randomPosition.id
}

square.forEach (id => {
    id.addEventListener('mouseup', () => {
        if (if.id === hitPosition){
            result = result +1
            score.textContent = result
        }
    })
})


function moveMole(){
    let timerId = null
    timerId = setInterval (randomSquare, 1000)
}

function countDown() {
    currentTime --
    timeLeft.textContent = currentTime

    if (currentTime === 0) {
        clearInterval (timerId)
        alert ('GAME OVER! Your final score is' + result)
    }
}

let timerId = setInterval (countDown, 1000)
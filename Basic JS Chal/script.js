const grid = document.querySelector('.grid')
const startButton = document.getElementById('start')
const score = document.getElementById('score')
let squares = []
let currentSnake = [2,1,0]
let direction = 1
let width = 10
let appleIndex = 0

function createGrid (){
    
    for(let i =0; i < width*width; i++){
        const square = document.createElement('div')
        square.classList.add('square')
        grid.appendChild(square)
        squares.push(square)
    }
}
createGrid()

currentSnake.forEach(index => squares[index].classList.add('snake'))

function move() {
    if (
        (currentSnake[0] + width >= width*width && direction === width) || //if snake has hit bottom
        (currentSnake[0] % width === width-1 && direction === 1) || //if snake has hit right wall
        (currentSnake[0] % width === 0 && direction === -1) || //if snake has hit left wall
        (currentSnake[0] - width < 0 && direction === -width) || //if snake has hit top
        squares[currentSnake[0] + direction].classList.contains('snake')
    )
    return clearInterval(timerId)
    
   //remove last element from our currentSnake array
   const tail = currentSnake.pop()
   //remove styling from last element
   squares[tail].classList.remove('snake')
   //add square in direction we are heading
   currentSnake.unshift(currentSnake[0] + direction)
   //add styling so we can see it
   squares[currentSnake[0]].classList.add('snake')
}
move()

const timerId = setInterval(move, 1000)

function makeApples(){
    do {
        appleIndex =  Math.floor(Math.random()* squares.length)
    } while (squares[appleIndex].classList.contains('snake'))
        squares[appleIndex].classList.add('apple')
}
makeApples()

function control(e){
    if(e.keyCode === 39){
        console.log('right')
        direction = 1
    }else if(e.keyCode === 38){
        console.log('up')
        direction = -width
    }else if(e.keyCode === 37){
        console.log('left')
        direction = -1
    }else if(e.keyCode === 40){
        console.log('down')
        direction = +width
    }
}
//control()

document.addEventListener('keyup', control)




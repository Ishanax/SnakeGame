//References 
let player1Score = document.getElementById('player1Scoreboard');
let player2Score = document.getElementById('player2Scoreboard');
const player1Dice = document.getElementById('player1Dice');
const player2Dice = document.getElementById('player2Dice');
const message = document.getElementById('message');
//Btns 
const rollButton = document.getElementById('rollBtn');
const resetButton = document.getElementById('resetBtn');

//Game state
let score1 = 0;
let score2 = 0;
let player1Turn = true;

rollButton.addEventListener('click', function(){
    const randomNumber = Math.floor(Math.random() *6)+1;

    if (player1Turn){
        player1Dice.innerHTML = randomNumber;
        message.innerHTML = 'Player 1 Turn'
        player1Dice.classList.remove('active')
        player2Dice.classList.add('active')
        score1 += randomNumber
        player1Score.textContent = score1

    }else {
        player2Dice.innerHTML = randomNumber
        message.innerHTML = 'Player 2 Turn'
        player2Dice.classList.remove('active')
        player1Dice.classList.add('active')
        score2 += randomNumber
        player2Score.textContent = score2    
    }
    if(player1Turn){
        player1Turn = false
        
    }else {
        player1Turn = true  
    }

    if (score1 >= 20){
        message.innerHTML = "Player 1 has won!"
        rollButton.style.display = 'none'
        resetButton.style.display = 'block'
    }else if (score2 >=20){
        message.innerHTML = "Player 2 has won!"
        rollButton.style.display = 'none'
        resetButton.style.display = 'block'
    } 
       
})
 
resetButton.addEventListener('click', function(){
    player1Dice.innerHTML = '-'
    player2Dice.innerHTML = '-'
    score1 = 0
    score2 = 0
    player1Score.innerHTML = 0
    player2Score.innerHTML = 0
    message.innerHTML = "Let's play"
    rollButton.style.display = 'block'
    resetButton.style.display = 'none'
    player2Dice.classList.remove('active')
    player1Dice.classList.add('active')
})

'use strict';

// document.querySelector('.message').textContent = 'correct Number';
// document.querySelector('.number').textContent = 13;
// document.querySelector('.score').textContent = 10;
// document.querySelector('.guess').value =23;


let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highScore = 0; 
// document.querySelector('.number').textContent = secretNumber;

const displayMessage = function (message) {
    document.querySelector('.message').textContent = message;
  };
  
document.querySelector('.check').addEventListener('click',
    function () {
        const guess = Number(document.querySelector('.guess').value)
        console.log(guess, typeof guess);
           // when there is no number input
        if (!guess) {
            // document.querySelector('.message').textContent = 'No number';
            displayMessage('No Number')
            //when the players win 
        } else if (guess === secretNumber) {
            document.querySelector('.number').textContent = secretNumber;
            // document.querySelector('.message').textContent = 'correct Number';
            displayMessage('Correct Number')
            document.querySelector('body').style.backgroundColor = '#60b347'
            document.querySelector('.number').style.width = '30rem'
            if(score > highScore){
                highScore = score;
                document.querySelector('.highscore').textContent = highScore;

            }

        } else if( guess !== secretNumber){
          if(score >1){
            // document.querySelector('.message').textContent = guess > secretNumber ?'Too High':'Too Low';
            displayMessage(guess>secretNumber ? 'Too High': 'Too Low')
            score--;
            document.querySelector('.score').textContent = score;
          }
          else{
                
            document.querySelector('.message').textContent = 'You lost the Game';
            document.querySelector('.score').textContent = 0;
           }
        }
        
        // else if (guess > secretNumber) {
        //     if(score >1 ){
        //         // too high guess
        //         document.querySelector('.message').textContent = 'Too High';
        //         score--;
        //         document.querySelector('.score').textContent = score;
                
        //     }else{
                
        //         document.querySelector('.message').textContent = 'You lost the Game';
        //         document.querySelector('.score').textContent = 0;
        //     }
        // } else if (guess < secretNumber){
        //     if(score >1){
        //         // too low guess
                
        //         document.querySelector('.message').textContent = 'Too Low';
        //         // document.querySelector('.message').textContent = 'Too High';
        //         score--;
        //         document.querySelector('.score').textContent = score;
                
        //     }else{
                
        //         document.querySelector('.message').textContent = 'You lost the Game';
        //         document.querySelector('.score').textContent = 0;
        //     }
            
    });
document.querySelector('.again').addEventListener('click' ,
function(){
    console.log("rest set the game");
    score =20;
    console.log(score);
    secretNumber = Math.trunc(Math.random() * 20) + 1;
    document.querySelector('.message').textContent = 'Start Guessing....';
    document.querySelector('.number').textContent = '?';
    document.querySelector('.score').textContent = score;
    document.querySelector('.guess').value = '';
    document.querySelector('body').style.backgroundColor = '#222';
    document.querySelector('.number').style.width = '15rem';
})
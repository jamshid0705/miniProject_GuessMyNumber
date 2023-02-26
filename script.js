'use strict';
// console.log(document.querySelector('.message').textContent)

// const a={
//   a:'w',
//   b:function(){
//     return 2;
//   }
// }

// a.b
let secretNumber = Math.trunc(Math.random() * 20) + 1;

let score = 20;
document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  console.log(guess, typeof guess);
  // when guess is not
  if (!guess) {
    document.querySelector('.message').textContent = '⛔No number!';
    // when player wins
  } else if (guess === secretNumber) {
    document.querySelector('.number').textContent = secretNumber;
    document.querySelector('.message').textContent = '🎉Correct number!';
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width='30rem';
    // when guess is too high
  } else if (guess > secretNumber) {
    if (score > 1) {
      document.querySelector('.message').textContent = 'Too high!';
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent = 'You lost the game!';
      document.querySelector('.score').textContent = 0;
    }
    // when guess is too low
  } else if (guess < secretNumber) {
    if (score > 1) {
      document.querySelector('.message').textContent = 'Too low!';
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent = 'You lost the game!';
      document.querySelector('.score').textContent = 0;
    }
  }
});

// again 
document.querySelector('.again').addEventListener('click',function(){
  score=20
  document.querySelector('.score').textContent=score
  document.querySelector('.number').textContent='?'
  document.querySelector('.message').textContent='Start guessing...'
  document.querySelector('.guess').value=' '
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
  secretNumber = Math.trunc(Math.random() * 20) + 1;
});
console.log(typeof document);

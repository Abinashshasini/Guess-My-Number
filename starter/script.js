'use strict';

let SecretNumber = Math.trunc(Math.random() * 20) + 1;

let score = 20;
let highscore = 0;

const guessField = document.querySelector('.guess');
const button = document.querySelector('.check');

button.addEventListener('click', function () {
  const guess = Number(guessField.value);
  console.log(typeof guess, guess);
  //No input
  if (!guess) {
    document.querySelector('.message').textContent = 'Please Enter Some text';
    //When player wins
  } else if (guess === SecretNumber) {
    document.querySelector('.message').textContent = '🎉 Correct Number';
    document.querySelector('.number').textContent = SecretNumber;
    document.querySelector('body').style.backgroundColor = '#60b347';
    if (score > highscore) {
      highscore = score;
      document.querySelector('.highscore').textContent = highscore;
    }
    //Tooo high
  } else if (guess > SecretNumber) {
    if (score > 1) {
      document.querySelector('.message').textContent = '📈 Too High';
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent = 'You lost Bro';
      document.querySelector('.score').textContent = score;
    }
    //too low
  } else if (guess < SecretNumber) {
    if (score > 1) {
      document.querySelector('.message').textContent = '📉 Too Low';
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent = 'You lost Bro';
      document.querySelector('.score').textContent = score;
    }
  }
});
document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  SecretNumber = Math.trunc(Math.random() * 20) + 1;
  document.querySelector('.message').textContent = 'Start guessing...';
  document.querySelector('.score').textContent = score;
  document.querySelector('.number').textContent = '?';
  document.querySelector('.guess').value = '';
  document.querySelector('body').style.backgroundColor = '#222';
});

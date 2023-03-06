const timer = document.querySelector('.timer');
const timeLeft = document.querySelectorAll('.time-left span');
const timeRight = document.querySelectorAll('.time-right span');
const startButton = document.querySelector('#start');
const stopButton = document.querySelector('#stop');

let countdown;
let secondsLeft;

function displayTimeLeft(seconds) {
    const minutes = Math.floor(seconds / 60);
    const remainderSeconds = seconds % 60;
    timeLeft[0].textContent = minutes < 10 ? `0${minutes}` : minutes;
    timeLeft[1].textContent = remainderSeconds < 10 ? `0${remainderSeconds}` : remainderSeconds;
    timeRight[0].textContent = minutes < 10 ? `0${minutes}` : minutes;
    timeRight[1].textContent = remainderSeconds < 10 ? `0${remainderSeconds}` : remainderSeconds;
}

function timerCountdown() {
    const seconds = parseInt(this.dataset.time);
    secondsLeft = seconds;
    clearInterval(countdown);
    displayTimeLeft(seconds);
    countdown = setInterval(() => {
        secondsLeft--;
        if (secondsLeft < 0) {
            clearInterval(countdown);
            return;
        }
        displayTimeLeft(secondsLeft);
    }, 1000);
}

function stopTimer() {
    clearInterval(countdown);
    timeLeft[0].textContent = "00";
    timeLeft[1].textContent = "00";
    timeRight[0].textContent = "00";
    timeRight[1].textContent = "00";
}

startButton.addEventListener('click', timerCountdown);
stopButton.addEventListener('click', stopTimer);

const mario = document.querySelector('.mario');
const pipe = document.querySelector('.pipe');
const clouds = document.querySelector('.clouds');
const scoreDisplay = document.getElementById('score');
const restartBtn = document.getElementById('restartBtn');

let score = 0;
let isGameOver = false;

const jump = () => {
    if (!isGameOver) {
        mario.classList.add('jump');
        setTimeout(() => {
            mario.classList.remove('jump');
        }, 500);
    }
};

const loop = setInterval(() => {
    const pipePosition = pipe.offsetLeft;
    const marioPosition = +window.getComputedStyle(mario).bottom.replace('px', '');
    const cloudsPosition = +window.getComputedStyle(clouds).right.replace('px', '');

    if (pipePosition <= 120 && pipePosition > 0 && marioPosition < 80) {
        pipe.style.animation = 'none';
        pipe.style.left = `${pipePosition}px`;

        clouds.style.animation = 'none';
        clouds.style.right = `${cloudsPosition}px`;

        mario.style.animation = 'none';
        mario.style.bottom = `${marioPosition}px`;
        mario.src = './Images/game-over.png';
        mario.style.width = '75px';
        mario.style.marginLeft = '50px';

        isGameOver = true;
        restartBtn.style.display = 'block';
        clearInterval(loop);
    }

    if (!isGameOver) {
        score++;
        scoreDisplay.textContent = score;
    }

}, 10);


document.addEventListener("keydown", (event) => {
    if (event.code === 'Space') {
        jump();
    }
});

restartBtn.addEventListener('click', () => {
    location.reload();
});

const mario = document.querySelector('.mario');
const pipe = document.querySelector('.pipe');
const scoreDisplay = document.getElementById('score');
const restartBtn = document.getElementById('restartBtn');

let score = 0;

const jump = () => {
    mario.classList.add('jump');
    setTimeout(() => {
        mario.classList.remove('jump');
    }, 500);
};

const loop = setInterval(() => {
    const pipePosition = pipe.offsetLeft;
    const marioPosition = +window.getComputedStyle(mario).bottom.replace('px', '');

    score++;
    scoreDisplay.textContent = score;

    if (pipePosition <= 120 && pipePosition > 0 && marioPosition < 80) {
        pipe.style.animation = 'none';
        pipe.style.left = `${pipePosition}px`;

        mario.style.animation = 'none';
        mario.style.bottom = `${marioPosition}px`;
        mario.src = './Images/game-over.png';
        mario.style.width = '75px';
        mario.style.marginLeft = '50px';

        clearInterval(loop);
        restartBtn.style.display = 'block';
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

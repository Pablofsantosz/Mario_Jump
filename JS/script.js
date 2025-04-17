const mario = document.querySelector('.mario');
const pipe = document.querySelector('.pipe');

const jump = ()=>{
    mario.classList.add('jump'); 
    /* o set timeout funciona de forma que ele recebe 2 paremetros uma funçao e um tempo settimeout(funcao,tempo) */
    setTimeout(()=> {
        mario.classList.remove('jump');
  
    },500);    

}

const loop = setInterval(()=>{
    const pipePosition = pipe.offsetLeft;
    const marioPosition = +window.getComputedStyle(mario).bottom.replace('px','') ;
    
    if(pipePosition <= 120 && pipePosition > 0  && marioPosition < 80){//Se o tubo chegou e a altura do mario for menor que 80 px o jogo acaba 
        pipe.style.animation = 'none';
        pipe.style.left = `${pipePosition}px`;  
    

        mario.style.animation ='none';
        mario.style.bottom = `${marioPosition}px`};
     
},10);


document.addEventListener("keydown", (event) => {
    if (event.code === 'Space') {
        jump();
    } 
}); 
const mario = document.querySelector('.mario');

const jump = ()=>{
    mario.classList.add('jump'); 
    /* o set timeout funciona de forma que ele recebe 2 paremetros uma funçao e um tempo settimeout(funcao,tempo) */
    setTimeout(()=> {
        mario.classList.remove('jump');
  
    },500);    

}


document.addEventListener("keydown", (event) => {
    if (event.code === 'Space') {
        jump();
    } 
}); 
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
    console.log(pipePosition);

    if(pipePosition <= 120){
        pipe.style.animation = 'none';
        pipe.style.left = `${pipePosition}px`;
    }
     
},10);


document.addEventListener("keydown", (event) => {
    if (event.code === 'Space') {
        jump();
    } 
}); 
const mario = document.querySelector('.mario');
const pipe = document.querySelector('.pipe');
const clouds = document.querySelector('.clouds');

const jump = () => {
    mario.classList.add('jump');
    mario.src = './images/rayman-falling.gif'
    setTimeout(() => {

        mario.classList.remove('jump');
        mario.src = './images/rayman-running.gif'
    }, 800);
}



const loop = setInterval(() => {
    const pipePosition = pipe.offsetLeft;
    const cloudsPosition = clouds.offsetLeft;
    const marioPosition = +window.getComputedStyle(mario).bottom.replace('px', '');

    

        
    
    if (pipePosition <= 120 && pipePosition > 0 &&marioPosition < 80) {
        
        clouds.style.animation = 'none';
        clouds.style.left = `${cloudsPosition}px`;

        pipe.style.animation = 'none';
        pipe.style.left = `${pipePosition}px`;

        mario.style.animation = 'none';
        mario.style.bottom = `${marioPosition}px`;

        
        mario.src = './images/rayman-die.png';
        mario.style.width = '140px';
        mario.style.margin = '15px';
        mario.style.bottom = `${marioPosition}px`;

        setTimeout(() => {
            alert('try again!')

        }, 10);

        setTimeout(() => {
            document.location.reload(true);
        }, 10);

        
        
        clearInterval(loop)
        
    }

    
}, 10);

document.addEventListener('keydown', jump)
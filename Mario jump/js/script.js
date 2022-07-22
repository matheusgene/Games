const mario = document.querySelector(".mario");
const pipe = document.querySelector(".pipe");
const clouds = document.querySelector(".clouds");
const gameBoard = document.querySelector(".game-board");

let isJumping = false;

const play = () => {
  clouds.style.animation = "clouds-animation 10s infinite linear";
  pipe.style.animation = "pipe-animation 1s infinite linear";
  mario.style.display = "block";
};

const pause = () => {
  clouds.style.animation = "none";
  pipe.style.animation = "none";
  mario.style.display = "none";
};

const control = (key) => {
  // restart game
  if (key.key === "s") {
  }
  if (key.key === "r") {
    play();
    const loop = setInterval(() => {
      const pipePosition = pipe.offsetLeft;
      const cloudsPosition = clouds.offsetLeft;
      const marioPosition = +window
        .getComputedStyle(mario)
        .bottom.replace("px", "");

      if (pipePosition <= 120 && pipePosition > 0 && marioPosition < 80) {
        clouds.style.animation = "none";
        clouds.style.left = `${cloudsPosition}px`;

        pipe.style.animation = "none";
        pipe.style.left = `${pipePosition}px`;

        //mario.style.animation = "none";
        mario.style.bottom = `${marioPosition}px`;

        mario.src = "./images/game-over.png";
        mario.style.width = "75px";
        mario.style.margin = "50px";
        mario.style.bottom = "50px";

        const gameover = document.createElement("img");

        gameover.src = "./images/game-over.gif";
        gameover.className = "gameOver";
        gameBoard.appendChild(gameover);

        clearInterval(loop);
      }
    }, 10);
  }

  if (key.key === "w" && !isJumping) {
    isJumping = true;
    mario.classList.add("jump");

    setTimeout(() => {
      isJumping = false;
      mario.classList.remove("jump");
    }, 500);
  }
};

const jump = (x) => {
  if (x.key !== "w" || isJumping) return;

  isJumping = true;
  mario.classList.add("jump");

  setTimeout(() => {
    isJumping = false;
    mario.classList.remove("jump");
  }, 500);
};

document.addEventListener("keydown", control);

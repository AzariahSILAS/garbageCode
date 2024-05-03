const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');
const width = canvas.width;
const height = canvas.height;

let snake = [{x: 10, y: 10}];
let direction = 'right';
let score = 0;
let gamePaused = false;

let food = {x: Math.floor(Math.random() * (width/10)), y: Math.floor(Math.random() * (height/10))};

function drawSnake() {
    for(let i=0; i<snake.length; i++) {
      if(i === 0) {
        ctx.fillStyle = 'red'; // set head color
      } else {
        ctx.fillStyle = 'green'; // set body color
      }
      ctx.fillRect(snake[i].x*10, snake[i].y*10, 10, 10);
    }
  }
   

  // Retrieve high score from local storage
let highScore = localStorage.getItem('highScore');
if (highScore === null) {
  highScore = 0;
}
document.getElementById('highScore').innerHTML = highScore;

function updateScore() {
  score += 1;
  document.getElementById('score').innerHTML = score;
  if (score > highScore) {
    highScore = score;
    localStorage.setItem('highScore', highScore);
    document.getElementById('high-score').innerHTML = highScore;
  }
}


function moveSnake() {
    let head = {x: snake[0].x, y: snake[0].y};
    
    if(direction === 'right') {
        head.x++;
    } else if(direction === 'left') {
        head.x--;
    } else if(direction === 'up') {
        head.y--;
    } else if(direction === 'down') {
        head.y++;
    }
    
    snake.unshift(head);
    
    if(head.x === food.x && head.y === food.y) {
        snake.push({});
        food = {x: Math.floor(Math.random() * (width/10)), y: Math.floor(Math.random() * (height/10))};
        score ++;
        document.getElementById('score').innerHTML = score;
    } else {
        snake.pop();
    }
}

function drawFood() {
    ctx.fillRect(food.x*10, food.y*10, 10, 10);
}

function checkCollision() {
    let head = snake[0];
    
    // check collision with wall
    if(head.x < 0 || head.x >= width/10 || head.y < 0 || head.y >= height/10) {
        return true;
    }
    
    // check collision with self
    for(let i=1; i<snake.length; i++) {
        if(head.x === snake[i].x && head.y === snake[i].y) {
            return true;
        }
    }
    
    return false;
}


function gameLoop() {
    if (!gamePaused) {
        ctx.clearRect(0, 0, width, height); // clear canvas
        drawSnake();
        drawFood();
        moveSnake();
        if (checkCollision()) {
            alert('Game over!');
            clearInterval(gameInterval);
        }
    }
    
};

function pauseGame() {
    gamePaused = true;
    document.getElementById('pauseBtn').innerHTML = 'Play'
};
    
function playGame() {
    gamePaused = false;
    document.getElementById('pauseBtn').innerHTML = 'Pause'
};

document.getElementById('pauseBtn').addEventListener('click', function() {
    if(gamePaused) {
      playGame();
    } else {
      pauseGame();
    }
  });

  document.getElementById('reStartBtn').addEventListener('click', function() {
    // reset all variables to their initial values
    snake = [{x: 10, y: 10}];
    direction = 'right';
    score = 0;
    gamePaused = false;
    food = {x: Math.floor(Math.random() * (width/10)), y: Math.floor(Math.random() * (height/10))};
    
    // reset the score display
    document.getElementById('score').innerHTML = score;
    
    // restart the game loop
    clearInterval(gameInterval);
    gameInterval = setInterval(gameLoop, 100);
  });
  
  


document.addEventListener('keydown', function(event) {
    if(event.key === 'd' && direction !== 'left') {
        direction = 'right';
    } else if(event.key === 'a' && direction !== 'right') {
        direction = 'left';
    } else if(event.key === 'w' && direction !== 'down') {
        direction = 'up';
    } else if(event.key === 's' && direction !== 'up') {
        direction = 'down';
    } else if(event.key === 'Escape') {
        if(gamePaused) {
            playGame();
        } else {
            pauseGame();
        }
    } else if(event.code === 'Space') {
        if(gamePaused) {
            playGame();
        } else {
            pauseGame();
        }
    } else if(event.code === 'KeyR') {
        restartGame();
    }
});

document.addEventListener('keyup', function(event) {
    if (event.key === ' ') {
      gamePaused = !gamePaused;
      if (gamePaused) {
        document.getElementById('pauseBtn').innerHTML = 'Play';
      } else {
        document.getElementById('pauseBtn').innerHTML = 'Pause';
      }
    }
  });
  

function restartGame() {
    // reset the score
    score = 0;
    document.getElementById('score').innerHTML = score;
  
    // reset the snake and food
    snake = [{x: 10, y: 10}];
    direction = 'right';
    food = {x: Math.floor(Math.random() * (width/10)), y: Math.floor(Math.random() * (height/10))};
  
    // start the game loop again
    gamePaused = false;
    document.getElementById('pauseBtn').innerHTML = 'Pause';
    clearInterval(gameInterval);
    gameInterval = setInterval(gameLoop, 100);
  }

  document.getElementById('reStartBtn').addEventListener('click', function() {
    restartGame();
  });
  
  


  

let gameInterval = setInterval(gameLoop, 100); // call gameLoop() every 100ms

document.getElementById('highScore').innerHTML = highScore;

function updateScore() {
  score += 1;
  document.getElementById('score').innerHTML = score;
  if (score > highScore) {
    highScore = score;
    localStorage.setItem('highScore', highScore);
    document.getElementById('highScore').innerHTML = highScore;
  }
}
updateScore()


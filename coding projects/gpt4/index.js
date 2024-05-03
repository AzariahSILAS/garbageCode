const canvas = document.getElementById("gameCanvas");
const ctx = canvas.getContext("2d");
const boxSize = 20;
let score = 0;
let snake = [{ x: 10 * boxSize, y: 10 * boxSize }];
let food = {
    x: Math.floor(Math.random() * 20) * boxSize,
    y: Math.floor(Math.random() * 20) * boxSize
};
let d;
document.addEventListener("keydown", direction);

function direction(event) {
    if (event.keyCode == 37 && d != "RIGHT") d = "LEFT";
    if (event.keyCode == 38 && d != "DOWN") d = "UP";
    if (event.keyCode == 39 && d != "LEFT") d = "RIGHT";
    if (event.keyCode == 40 && d != "UP") d = "DOWN";
}

function draw() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    for (let i = 0; i < snake.length; i++) {
        ctx.fillStyle = (i === 0) ? "green" : "white";
        ctx.fillRect(snake[i].x, snake[i].y, boxSize, boxSize);
        ctx.strokeStyle = "black";
        ctx.strokeRect(snake[i].x, snake[i].y, boxSize, boxSize);
    }
    ctx.fillStyle = "red";
    ctx.fillRect(food.x, food.y, boxSize, boxSize);

    let snakeX = snake[0].x;
    let snakeY = snake[0].y;

    if (d == "LEFT") snakeX -= boxSize;
    if (d == "UP") snakeY -= boxSize;
    if (d == "RIGHT") snakeX += boxSize;
    if (d == "DOWN") snakeY += boxSize;

    if (snakeX == food.x && snakeY == food.y) {
        score++;
        food = {
            x: Math.floor(Math.random() * 20) * boxSize,
            y: Math.floor(Math.random() * 20) * boxSize
        };
    } else {
        snake.pop();
    }

    let newHead = {
        x: snakeX,
        y: snakeY
    };

    function collision(newHead, array) {
        for (let i = 0; i < array.length; i++) {
            if (newHead.x == array[i].x && newHead.y == array[i].y) {
                return true;
            }
        }
        return false;
    }

    if (snakeX < 0 || snakeY < 0 || snakeX >= canvas.width || snakeY >= canvas.height || collision(newHead, snake)) {
        clearInterval(game);
    }

    snake.unshift(newHead);
    ctx.fillStyle = "black";
    ctx.font = "20px Arial";
    ctx.fillText("Score: " + score, boxSize, boxSize);
}

let game = setInterval(draw, 100);

const canvas = document.getElementById('gameCanvas');
        const context = canvas.getContext('2d');

        const boxSize = 20;
        const canvasSize = canvas.width;
        const boxCount = canvasSize / boxSize;

        let snake = [];
        snake[0] = {x: boxCount / 2 * boxSize, y: boxCount / 2 * boxSize};

        let food = {
            x: Math.floor(Math.random() * boxCount) * boxSize,
            y: Math.floor(Math.random() * boxCount) * boxSize
        };

        let score = 0;
        let d;
        let isMoving = false;

        document.addEventListener('keydown', startMoving);
        document.addEventListener('keyup', stopMoving);

        function startMoving(event) {
            if (!isMoving) {
                if (event.keyCode == 37 && d != 'RIGHT') {
                    d = 'LEFT';
                    isMoving = true;
                } else if (event.keyCode == 38 && d != 'DOWN') {
                    d = 'UP';
                    isMoving = true;
                } else if (event.keyCode == 39 && d != 'LEFT') {
                    d = 'RIGHT';
                    isMoving = true;
                } else if (event.keyCode == 40 && d != 'UP') {
                    d = 'DOWN';
                    isMoving = true;
                }
            }
        }

        function stopMoving(event) {
            if (event.keyCode == 37 || event.keyCode == 38 || event.keyCode == 39 || event.keyCode == 40) {
                isMoving = false;
            }
        }

        function collision(head, array) {
            for (let i = 0; i < array.length; i++) {
                if (head.x == array[i].x && head.y == array[i].y) {
                    return true;
                }
            }
            return false;
        }

        function draw() {
            context.clearRect(0, 0, canvasSize, canvasSize);
            for (let i = 0; i < snake.length; i++) {
                context.fillStyle = (i == 0) ? 'green' : '#fff';
                context.fillRect(snake[i].x, snake[i].y, boxSize, boxSize);

                context.strokeStyle = 'black';
                context.strokeRect(snake[i].x, snake[i].y, boxSize, boxSize);
            }

            context.fillStyle = 'red';
            context.fillRect(food.x, food.y, boxSize, boxSize);

            if (isMoving) {
                let snakeX = snake[0].x;
                let snakeY = snake[0].y;

                if (d == 'LEFT') snakeX -= boxSize;
                if (d == 'UP') snakeY -= boxSize;
                if (d == 'RIGHT') snakeX += boxSize;
                if (d == 'DOWN') snakeY += boxSize;

                if (snakeX == food.x && snakeY == food.y) {
                    score++;
                    food = {
                        x: Math.floor(Math.random() * boxCount) * boxSize,
                        y: Math.floor(Math.random() * boxCount) * boxSize
                    };
                } else {
                    snake.pop();
                }

                let newHead = {
                    x: snakeX,
                    y: snakeY
                };

                if (snakeX < 0 || snakeY < 0 || snakeX >= canvasSize || snakeY >= canvasSize || collision(newHead, snake)) {
                    clearInterval(game);
                }

                snake.unshift(newHead);
            }

            context.fillStyle = 'black';
            context.font = '20px Arial';
            context.fillText('Score: ' + score, boxSize, boxSize);
        }

        let game = setInterval(draw, 100);
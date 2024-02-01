var curLifes = 3;
var curScore = 0;
var paddleX = 200;
var directionX = -5;
var directionY = -5;

function gameLogic() {
    if (leftPressed && paddle.offsetLeft > 0) {
        paddle.style.left = paddle.offsetLeft - 10 + 'px'
        paddleX = paddle.offsetLeft
    }
    if (rightPressed && paddle.offsetLeft <= 389) {
        paddle.style.left = paddle.offsetLeft + 10 + 'px'
        paddleX = paddle.offsetLeft
    }
    var ballX = parseFloat(ball.style.left = ball.offsetLeft + directionX + 'px') | 0,
        ballY = parseFloat(ball.style.top = ball.offsetTop + directionY + 'px') | 0;
    if (isCollide(paddle, ball)) {
        if (ballX >= paddleX + 39 && ballX <= paddleX + 41) {
            directionX = 0;
            directionY = -5;
        } else if (ballX < paddleX + 39) {
            directionX = -5;
            directionY = -5;
        } else if (ballX > paddleX + 41) {
            directionX = 5;
            directionY = -5;
        }
    }
    if (ballY >= 420) {
        if (curLifes > 1) {
            --curLifes;
            lifes.innerHTML = curLifes;
            waitingOnPaddle();
            pauseGame();
            return;
        } else {
            lifes.innerHTML = 0;
            gameStatus.innerHTML = "YOU LOSE, TRY AGAIN..."
            gameRestarter();
            return;
        }
    }
    if (ballX < 0 && directionX < 0 || ballX >= 480 && directionX > 0) directionX *= -1;
    if (ballY < 0) directionY *= -1;
    if (ballY >= 420) directionY *= -1;
    let bricks = document.querySelectorAll('.brick');
    if (Number(score.innerHTML >= 600)) {
        gameStatus.innerHTML = "YOU WIN, CONGRATULATIONS!!!"
        gameRestarter();
        return;
    }

    for (let tBrick of bricks) {
        if (isCollide(tBrick, ball)) {
            let splitter = tBrick.className.split(" ")
            if (ballY >= 0 && ballY <= 100 && (splitter[splitter.length - 1] != 'hidden')) {
                directionY *= -1, tBrick.className += ' hidden';
                curScore += 10
                score.innerHTML = curScore;
                if (directionX < 0 && (ballX % 32 < 10 || ballX % 32 > 22)) directionX *= -1;
                if (directionX > 0 && ((ballX + 12) % 32 < 10 || (ballX + 12) % 32 > 22)) directionX *= -1;
                break;
            }
        }
    }
    animation.stop = window.requestAnimationFrame(gameLogic)
}

function isCollide(a, b) {
    let aRect = a.getBoundingClientRect();
    let bRect = b.getBoundingClientRect();
    return !((aRect.right < bRect.left) || (aRect.left > bRect.right) || (aRect.bottom < bRect.top) || (aRect.top > bRect.bottom));
}

function gameRestarter() {
    isStopped = true;
    curLifes = 3;
    curScore = 0;
    timer.innerHTML = '00:00'
    beginningPaddlePos();
    waitingOnPaddle();
    resetBricks();
    window.cancelAnimationFrame(animation.stop)
}

function beginningPaddlePos() {
    paddle.style.left = 200 + 'px'
}

function waitingOnPaddle() {
    ball.style.top = (paddle.offsetTop - 22) + 'px';
    ball.style.left = (paddle.offsetLeft + 40) + 'px';
}
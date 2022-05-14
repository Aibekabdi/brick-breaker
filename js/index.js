var iconElem;
var gameStatus;
var timer;
var field;
var ball;
var paddle;
var score;
var lifes;
const animation = {};
const FieldWidth = 500;
const FieldHeight = 450;

var leftPressed = false;
var rightPressed = false;

window.onload = function() {
    init();
    drawTimes();
    drawBricks();
    allReady = true;
}

function init() {
    iconElem = document.querySelector("#game-pause-btn > .fa");
    gameStatus = document.getElementById("game-status");
    timer = document.getElementById("game-timer");
    field = document.getElementById("field");
    ball = document.getElementById("ball");
    paddle = document.getElementById("paddle");
    score = document.getElementById("game-points-num");
    lifes = document.getElementById("game-lives-num");
}

window.onkeydown = function(event) {
    if (!allReady) return;
    if (isStopped && event.keyCode == KEY_ENTER) {
        isStopped = false
        iconElem.classList.add("fa-pause");
        iconElem.classList.remove("fa-play");
        gameStatus.innerHTML = "RESUME!";
        startGame();
    } else if (!isStopped && event.keyCode == KEY_ENTER) {
        iconElem.classList.add("fa-play");
        iconElem.classList.remove("fa-pause");
        gameStatus.innerHTML = '~ PAUSE ~';
        pauseGame();
    }
    switch (event.keyCode) {
        case KEY_A:
        case KEY_LEFT:
            leftPressed = true;
            break;
        case KEY_D:
        case KEY_RIGHT:
            rightPressed = true;
            break;
    }
}

window.onkeyup = function(event) {
    switch (event.keyCode) {
        case KEY_A:
        case KEY_LEFT:
            leftPressed = false;
            break;
        case KEY_D:
        case KEY_RIGHT:
            rightPressed = false;
            break;
    }
}


function startGame() {
    lifes.innerHTML = curLifes;
    score.innerHTML = curScore;
    animation.stop = requestAnimationFrame(gameLogic)
}

function pauseGame() {
    isStopped = true;
    iconElem.classList.add("fa-play");
    iconElem.classList.remove("fa-pause");
    gameStatus.innerHTML = '~ PAUSE ~';
    window.cancelAnimationFrame(animation.stop);
}

function togglePause() {
    if (isStopped) {
        isStopped = false
        iconElem.classList.add("fa-pause");
        iconElem.classList.remove("fa-play");
        gameStatus.innerHTML = "RESUME!";
        startGame();
    } else {
        pauseGame();
    }
    blurBtn(this);
}

function btnRestartGame() {
    location.reload();
    blurBtn(this);
}

function blurBtn(elem) {
    if (!elem) return;
    setTimeout(function() {
        elem.blur();
    });
}

function resetBricks() {
    let bricks = document.querySelectorAll('.brick');
    for (let brick of bricks) { brick.remove(); }
    drawBricks();
}
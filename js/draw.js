function drawBricks() {
    for (var c = 0; c < 6; c++) {
        let columnDiv = document.createElement('div');
        columnDiv.className = "row";
        for (var r = 0; r < 10; r++) {
            let htmlBrick = document.createElement('div')
            htmlBrick.className = "brick"
            columnDiv.appendChild(htmlBrick)
        }
        field.appendChild(columnDiv);
    }
}

function drawTimes() {
    setInterval(function() {
        if (isStopped) return;
        let curtime = String(timer.innerText)
        if (timer == null) {
            timer = '00:00'
        }
        let min = Number(curtime.slice(0, 2))
        let sec = Number(curtime.slice(3))
        sec += 1
        if (sec == 60) {
            min += 1
            sec = 0
        }
        if (sec < 10) {
            sec = '0' + sec
        }
        if (min < 10) {
            min = '0' + min
        }
        curtime = `${min}:${sec}`
        timer.innerHTML = curtime
    }, 1000);
}
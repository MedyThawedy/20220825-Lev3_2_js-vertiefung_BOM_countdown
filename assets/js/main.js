/*

Schreibe eine Funktion, die einen Countdown in Minuten anzeigt und sich pausieren und neu starten lässt.
Der HTML und CSS Code befindet sich im Kommentar.
Nutze unter anderem
setInterval()
clearInterval()
if

*/

let varMinutes;
const inputMinutes = document.getElementById('minutes');
let divTime = document.getElementById('time');


// https://stackoverflow.com/questions/20618355/how-to-write-a-countdown-timer-in-javascript

function startTimer(duration, display) {
    let timer = duration, minutes, seconds;
    setInterval(function () {

        minutes = parseInt(timer / 60, 10);
        seconds = parseInt(timer % 60, 10);

        minutes = minutes < 10 ? "0" + minutes : minutes;
        seconds = seconds < 10 ? "0" + seconds : seconds;

        display.textContent = minutes + ":" + seconds;

        if (--timer < 0) {
            timer = duration;
        }
    }, 1000);
}

https://stackoverflow.com/questions/20618355/how-to-write-a-countdown-timer-in-javascript
function startMinCountdown() {

    pauseMinCountdown();
    // Minutes input
    varMinutes = inputMinutes.value;

    // window.onload = function () {
    let numberOfMinutes = 60 * varMinutes,
        display = document.querySelector('#time');
    startTimer(numberOfMinutes, display);
    // };
}

https://stackoverflow.com/questions/8635502/how-do-i-clear-all-intervals
function pauseMinCountdown() {
    // Get a reference to the last interval + 1
    const interval_id = window.setInterval(function () { }, Number.MAX_SAFE_INTEGER);

    // Clear any timeout/interval up to that id
    for (let i = 1; i < interval_id; i++) {

        window.clearInterval(i);
    }

}

function restartMinCountdown() {
    // Minutes input
    let divElementMinutes = document.getElementById('time').innerHTML;

    let vMinutes = Number(divElementMinutes[1]);

    let vSeconds = document.getElementById('time').innerHTML;

    let vSeconds1 = divElementMinutes[3];
    let vSeconds2 = divElementMinutes[4];
    let vSeconds1and2 = vSeconds1 + vSeconds2;
    vSeconds1and2 = Number(vSeconds1and2);

    // window.onload = function () {
    let numberOfMinutes = (60 * vMinutes) + vSeconds1and2;

    let display = document.querySelector('#time');
    startTimer(numberOfMinutes, display);
    // };
}










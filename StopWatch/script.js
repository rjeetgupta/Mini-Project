const displayTime = document.getElementById("displayTime");

const stop = document.getElementById("stop");
const start = document.getElementById("start");
const reset = document.getElementById("reset");

let timer = null;

let sec = 0;
let min = 0;
let hour = 0;


start.addEventListener('click', function () {
    if (timer !== null) {
        clearInterval(timer);
    }
    timer = setInterval(startTimer, 1000);
});

stop.addEventListener('click', function () {
    clearInterval(timer);
});


reset.addEventListener('click', function () {
    clearInterval(timer);
    displayTime.innerText = ` 00 : 00 : 00 `;
    sec = min = hour = 0;
});

function startTimer() {
    sec++;
    if (sec == 60) {
        sec = 0;
        min++;
        if (min == 60) {
            min = 0;
            hour++;
        }
    }
    let secString = sec < 10 ? `0${sec}` : sec; 
    let minString = min < 10 ? `0${min}` : min;
    let hourString = hour < 10 ? `0${hour}` : hour;

    displayTime.innerHTML = `${hourString} : ${minString} : ${secString}`;
}

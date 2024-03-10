let start = document.querySelector(".start");
let stop = document.querySelector(".stop");
let reset = document.querySelector(".reset");
let hours = document.querySelector(".hour");
let mins = document.querySelector(".min");
let secs = document.querySelector(".sec");
let tens = document.querySelector(".tens");

let hour = 0;
let min = 0;
let sec = 0;
let ten = 0;

let interval;

stop.style.pointerEvents = "none";
reset.style.pointerEvents = "none";

start.addEventListener("click", function () {
    clearInterval(interval);
    interval = setInterval(start_timer, 10);
    start.style.pointerEvents = "none";
    stop.style.pointerEvents = "visible";
    reset.style.pointerEvents = "visible";
});

stop.addEventListener("click", function () {
    clearInterval(interval);
    start.style.pointerEvents = "visible";
    stop.style.pointerEvents = "none";
    
});

reset.addEventListener("click", function () {
    clearInterval(interval);
    hour = 00;
    min = 00;
    sec = 00;
    ten = 00;
    hours.innerHTML = hour+"0 :";
    mins.innerHTML = min+"0 :";
    secs.innerHTML = sec+"0 :";
    tens.innerHTML = ten+"0";
    start.style.pointerEvents = "visible";
    reset.style.pointerEvents = "none";
    stop.style.pointerEvents = "none";
});

function start_timer() {
    if (ten < 99) {
        ten++;
        tens.innerHTML = ten < 10 ? "0" + ten : ten;
    }
    else {
        ten = 0;
        tens.innerHTML = "00"
        if (sec < 59) {
            sec += 1;
            secs.innerHTML = sec < 10 ? " 0" + sec + " :" : sec + " :";
        }
        else {
            sec = 0;
            secs.innerHTML = " 00 :";
            if (min < 59) {
                min += 1;
                mins.innerHTML = min < 10 ? " 0" + min + " :" : min + " :";
            }
            else {
                min = 0;
                mins.innerHTML = " 00 :";
                hour += 1;
                hours.innerHTML = hour < 10 ? "0" + hour + " :" : hour + " :";
            }
        }
    }
}
'use strict';

let hour = new Date().getHours(),
    min = new Date().getMinutes(),
    sec = new Date().getSeconds(),
    hourValue = document.getElementsByClassName("hour-value")[0],
    minValue = document.getElementsByClassName("min-value")[0],
    secValue = document.getElementsByClassName("sec-value")[0];

    hourValue.textContent = hour;
    minValue.textContent = min;
    secValue.textContent = sec;

setInterval(timeNow, 1000);

function timeNow() {
    sec++;
    secValue.textContent = sec;
    if (sec < 10) {
        secValue.textContent = "0" + sec;
    }
    if (sec == 60) {
        sec = 0;
        min++;
        minValue.textContent = min;
    }
    if (min < 10) {
        minValue.textContent = "0" + min;
    }
    if (min == 60) {
        min = 0;
        hour++;
        hourValue.textContent = hour;
    }
    if (hour < 10) {
        hourValue.textContent = "0" + hour;
    }
    if (hour == 24) {
        hour = 0;
    }
}
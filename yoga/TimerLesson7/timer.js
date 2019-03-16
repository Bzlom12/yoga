'use strict';

let hour = new Date().getHours(),
    min = new Date().getMinutes(),
    sec = new Date().getSeconds(),
    hourValue = document.getElementsByClassName("hour-value")[0],
    minValue = document.getElementsByClassName("min-value")[0],
    secValue = document.getElementsByClassName("sec-value")[0];

setInterval(timeNow, 1000);

let zer = (a) => {
    return (a < 10)? "0" + a : a;
};
function timeNow() {
    sec++;
    secValue.textContent = zer(sec);
    if (sec == 60) {
        sec = 0;
        min++;
        minValue.textContent = zer(min);
    }
    if (min == 60) {
        min = 0;
        hour++;
        hourValue.textContent = zer(hour);
    }
    if (hour == 24) {
        hour = 0;
    }
}
hourValue.textContent = hour;
minValue.textContent = min;
secValue.textContent = sec;
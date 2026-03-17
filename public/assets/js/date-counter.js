/* ------------------ Auto Gap Countdown ------------------ */

const __days = document.querySelector("#days");
const __hours = document.querySelector("#hours");
const __minutes = document.querySelector("#minutes");
const __seconds = document.querySelector("#seconds");

/* -----------------------------------------
   CONFIGURATION → CHANGE ONLY THIS
------------------------------------------ */

let endDate = new Date("January 01 2026 00:00:00");

const gap = {
    years: 1,
    months: 0,
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
};


function addGap(date) {
    let newDate = new Date(date);

    if (gap.years) newDate.setFullYear(newDate.getFullYear() + gap.years);
    if (gap.months) newDate.setMonth(newDate.getMonth() + gap.months);
    if (gap.days) newDate.setDate(newDate.getDate() + gap.days);
    if (gap.hours) newDate.setHours(newDate.getHours() + gap.hours);
    if (gap.minutes) newDate.setMinutes(newDate.getMinutes() + gap.minutes);
    if (gap.seconds) newDate.setSeconds(newDate.getSeconds() + gap.seconds);

    return newDate;
}

function countdown() {
    const now = new Date();
    const totalSeconds = (endDate - now) / 1000;

    if (totalSeconds <= 0) {
        endDate = addGap(endDate);
        return;
    }

    const days = Math.floor(totalSeconds / 3600 / 24);
    const hours = Math.floor(totalSeconds / 3600) % 24;
    const minutes = Math.floor(totalSeconds / 60) % 60;
    const seconds = Math.floor(totalSeconds % 60);

    __days.innerHTML = formatTime(days);
    __hours.innerHTML = formatTime(hours);
    __minutes.innerHTML = formatTime(minutes);
    __seconds.innerHTML = formatTime(seconds);
}

function formatTime(t) {
    return t < 10 ? "0" + t : t;
}

countdown();
setInterval(countdown, 10);

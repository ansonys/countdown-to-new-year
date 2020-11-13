const daysEl = document.getElementById("days");
const hoursEl = document.getElementById("hours");          
const minsEl = document.getElementById("mins");
const secondsEl = document.getElementById("seconds");

// 大みそか
const newYears = '1 Jan 2021';
// 大みそかまで何日、何時間、何分、何秒
function countdown() {
    const newYearsDate = new Date(newYears);
    const currentDate = new Date();

    const totalSeconds = (newYearsDate -currentDate) / 1000;

    const days = Math.floor(totalSeconds / 3600 / 24);
    const hours = Math.floor(totalSeconds / 3600) % 24;
    const minutes = Math.floor(totalSeconds / 60) % 60;
    const seconds = Math.floor(totalSeconds % 60);

    daysEl.innerHTML = formatTime(days);
    hoursEl.innerHTML = formatTime(hours);
    minsEl.innerHTML = formatTime(minutes);
    secondsEl.innerHTML = formatTime(seconds);
}

// 条件式 ? IfTrue : IfFalse
function formatTime(time) {
    return time < 10 ? `0${time}` : time;
}

countdown();
// setInterval(関数function, 一定時間の指定ミリ秒[, 引数1, 引数2, …])
// 1秒ごとにfunctionを繰り返す
setInterval(countdown,1000);
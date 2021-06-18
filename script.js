const daysEl = document.getElementById('days');
const hoursEl = document.getElementById('hours');
const minutesEl = document.getElementById('minutes');
const secondsEl = document.getElementById('seconds');



const newbeginnings="1 jan 2022";

function countdowncontainer(){
    const newbeginningsdate = new Date(newbeginnings);
    const currentDate = new Date();

    const totalseconds = (newbeginningsdate - currentDate) / 1000;

    const days = math.floor(totalseconds / 3600 / 24);
    const hours = math.floor(totalseconds / 3600)% 24;
    const minutes = math.floor(totalseconds / 60)% 60;
    const seconds = math.floor(totalseconds) % 60;

    daysEl.innerHTML = days;
    hoursEl.innerHTML = formatTime(hours);
    minutesEl.innerHTML = formatTime(minutes);
    secondsEl.innerHTML = formatTime(seconds);
}
funtionformatTime(time); {
    return time < 10 ? `0${time}` : time;
}
countdown-container();
setInterval(countdown-container,1000);
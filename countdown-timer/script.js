const daysE1=document.getElementById("days")
const hoursE1=document.getElementById("hours")
const minsE1=document.getElementById("mins")
const secondsE1=document.getElementById("seconds")

const newYears='20 Jul 2021';
function countdown(){
    const newYearsDate=new Date(newYears);
    const currentDate=new Date();
    const totalSeconds=(newYearsDate-currentDate)/1000
    const days=Math.floor(totalSeconds/3600/24);
    const hours=Math.floor(totalSeconds/3600)%24;
    const minutes=Math.floor(totalSeconds/60)%60;
    const seconds=Math.floor(totalSeconds)%60;
    //console.log(newYearsDate-currentDate)
    console.log(days,hours,minutes,seconds)
    daysE1.innerHTML=formatTime(days);
    hoursE1.innerHTML=formatTime(hours);
    minsE1.innerHTML=formatTime(minutes);
    secondsE1.innerHTML=formatTime(seconds);
}
countdown();
setInterval(countdown,1000);

function formatTime(time) {
    return time<10?(`0${time}`):time;
}
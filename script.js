function clock() {
    let date = new Date();
    let hours = date.getHours(); // 0 - 23
    let minutes = date.getMinutes(); // 0 - 59
    let seconds = date.getSeconds(); // 0 - 59
    let flag = "AM";
    

    console.log(hours);

    if(hours == 0) { // نهارا
        hours = 12

    } else if(hours > 12 ){ // الظهر
        hours = hours - 12;
        flag = "PM";

    } else if (hours = 12) {
        hours = 12;
        flag = "PM";
    }
    
    // 01:02:09
    if(hours < 10) hours = "0" + hours;

    if(minutes < 10) mintutes = "0" + minutes;

    if(seconds < 10) seconds = "0" + seconds;


    document.querySelector('.clock').innerHTML = `${hours}: ${minutes}: ${seconds}: ${flag}`;

    setTimeout(function(){
        clock();
    },1000)
}
clock();
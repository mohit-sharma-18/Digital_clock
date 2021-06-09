let month = new Array();
month[0] = "January";
month[1] = "February";
month[2] = "March";
month[3] = "April";
month[4] = "May";
month[5] = "June";
month[6] = "July";
month[7] = "August";
month[8] = "September";
month[9] = "October";
month[10] = "November";
month[11] = "December";


let day = new Array();
day[0] = "Sunday";
day[1] = "Monday";
day[2] = "Tuesday";
day[3] = "Wednesday";
day[4] = "Thursday";
day[5] = "Friday";
day[6] = "Saturday";


function digitalClock() {
    let time = new Date();
    let currentHours = time.getHours();
    let currentMinutes = time.getMinutes();
    let currentSeconds = time.getSeconds();
    let currentDay = day[time.getDay()];
    let currentDate = time.getDate();
    let currentMonth = month[time.getMonth()];
    let currentYear = time.getFullYear();


    // Setting AM/PM 
    let timeNow = (currentHours > 12 ? "PM" : 'AM');

    //Show zero before single digit
    currentHours = (currentHours < 10 ? "0" : '') + currentHours;
    currentMinutes = (currentMinutes < 10 ? "0" : '') + currentMinutes;
    currentSeconds = (currentSeconds < 10 ? "0" : '') + currentSeconds;
    currentDate = (currentDate < 10 ? "0" : '') + currentDate;

    // 12 Hour Format
    currentHours = (currentHours > 12 ? currentHours - 12 : currentHours);
    currentHours = (currentHours == 0) ? 12 : currentHours;


    // Creating string for DOM
    let timeString = currentHours + ' : ' + currentMinutes + ' : ' + currentSeconds + ' : ' + '' + timeNow
    let dateString = currentDay + " , " + currentDate + " / " + currentMonth + " / " + currentYear


    // Insert time into DOM
    document.getElementById('clock').innerHTML = timeString;
    document.getElementById('date').innerHTML = dateString;


}
// using setInterval to run clock after one second
setInterval(digitalClock, 1000);



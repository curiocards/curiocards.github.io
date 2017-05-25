// From: http://www.codingforums.com/showthread.php?t=187335  jmrker corrected by Philip M
var cday;
var timeInSecs;
var ticker;
function getSeconds() {
  var now = new Date();
  var dy = 2 ; // Tuesday (day 2) - change for other days 0-6  as required
  var countdowntime = new Date(now.getFullYear(),now.getMonth(),now.getDate(),12,0,0); //  12 hrs = 12 pm
  // countdowntime - change time hh,mm,ss to whatever time required, e.g. 7,50,0 (0750)
  var nowtime= now.getTime();  // time now in milliseconds
  var atime = countdowntime.getTime();  // countdown time in milliseconds
  var diff = parseInt((atime - nowtime)/1000);  // positive if countdowntime is in future
  if (diff > 0) { cday = dy - now.getDay() }
  else { cday =  dy - now.getDay() -1 }  //  already passed countdown time
  if (cday < 0) { cday += 7; }   // aleady passed countdown time, so go for next week
  if (diff <= 0) { diff += (86400 * 7) }  // move on one week
  startTimer (diff);
}
function startTimer(secs) {
  timeInSecs = parseInt(secs);
  ticker = setInterval("tick()",1000);
  tick(); // to start counter display right away
}
function tick() {
  var secs = timeInSecs;
  if (secs>0)   {
    timeInSecs--;
  }
  else {
    clearInterval(ticker); // stop counting at zero
    getSeconds();  // and start all over again!
  }

  var days = Math.floor(secs/86400);  // redundant
  secs %= 86400;
  var hours= Math.floor(secs/3600);
  secs %= 3600;
  var mins = Math.floor(secs/60);
  secs %= 60;

  document.getElementById("count_days").innerHTML =  cday;
  document.getElementById("count_hours").innerHTML =  ((hours < 10 ) ? "0" : "" ) + hours;
  document.getElementById("count_minutes").innerHTML =  ((mins < 10) ? "0" : "" ) + mins;
  document.getElementById("count_seconds").innerHTML =  ((secs < 10) ? "0" : "" ) + secs;
}

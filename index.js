// // Your code here
// var intervalID = window.setInterval(getDate,1000);
// function getDate(){
//   var time = new Date();
//   var hours = time.getHours();
//     if (hours > 12) {
//       hours -= 12;
//       var post = " PM";
//     } else {
//       var post = " AM";
//     }
//   var minutes = time.getMinutes()
//     if (minutes < 10) {
//       minutes = "0" + minutes;
//     }
//   var seconds = time.getSeconds()
//     if (seconds < 10) {
//       seconds = "0" + seconds
//     }
//   var clock = document.getElementById("clock");
//   clock.innerHTML = hours+":"+minutes+":"+seconds+post;
// }


var mountain = "America/Denver";
var pacific = 'America/Los_Angeles';
var eastern = 'America/Detroit';
var central = 'America/Chicago';

var intervalID = window.setInterval(displayTime,1000);
function displayTime (zone) {
  var clock = document.getElementById("clock");
  var content = getTime(zone);
  clock.innerHTML = content;
};

var getTime = function (zone) {
  var time = new Date();
  var options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric', hour:'2-digit', minute:'2-digit', second:'2-digit', hours12: true, timeZone: zone };
  var timeString = time.toLocaleDateString('en-US', options);
  return timeString;
};

displayTime(mountain);

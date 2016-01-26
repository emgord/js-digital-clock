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


var pacific = 'America/Los_Angeles';
var mountain = 'America/Denver';
var central = 'America/Chicago';
var eastern = 'America/Detroit';

var intervalID = window.setInterval(displayTime,1000);
function displayTime() {
  var clock = document.getElementById("clock");
  var zones = [pacific, mountain, central, eastern];
  for (i=0; i< zones.length; i++) {
    var content = getTime(zones[i]);
    clock.children[i].children[1].innerHTML = content;
  }
}

var getTime = function (zone) {
  var time = new Date();
  var options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric', hour:'2-digit', minute:'2-digit', second:'2-digit', hours12: true, timeZone: zone };
  var timeString = time.toLocaleDateString('en-US', options);
  return timeString;
};

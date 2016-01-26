// Your code here
var intervalID = window.setInterval(getDate,1000);
function getDate(){
  var time = new Date();
  var hours = time.getHours();
    if (hours > 12) {
      hours -= 12;
      var post = " PM";
    } else {
      var post = " AM";
    }
  var minutes = time.getMinutes()
    if (minutes < 10) {
      minutes = "0" + minutes;
    }
  var seconds = time.getSeconds()
    if (seconds < 10) {
      seconds = "0" + seconds
    }
  var clock = document.getElementById("clock");
  clock.innerHTML = hours+":"+minutes+":"+seconds+post;
}

$(document).ready(function () {
  //1st feature 😊😊
  function showDate(date) {
    let hours = date.getHours();
    if (hours < 10) {
      hours = `0${hours}`;
    }
    let minutes = date.getMinutes();
    if (minutes < 10) {
      minutes = `0${minutes}`;
    }
    let seconds = date.getSeconds();
    if (seconds < 10) {
      seconds = `0${seconds}`;
    }
    let weekDays = date.getDay();
    let days = [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednsday",
      "Thursday",
      "Friday",
      "Saturday",
    ];
    let day = days[weekDays];

    return `${day} ${hours}:${minutes}:${seconds}`;
  }

  let dateElement = document.querySelector("#date");
  let currentTime = new Date();
  dateElement.innerHTML = showDate(currentTime);
$("button").click(function (e) { 
        e.preventDefault();
        input = document.getElementById("input").value;
        sene = document.getElementById("name");
        sene.innerHTML = input;
        
});

});

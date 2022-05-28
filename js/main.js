

// Time clock function
var clock;
$(document).ready(function () {
  var myDate = new Date();
  var year = 2022, month = 7, day = 15;
  // <!--var	year=myDate.getFullYear()+1,month=10,day=12;-->
  var currentDate = new Date();
  var futureDate = new Date(year, month - 1, day, 8.5);
  var diff = futureDate.getTime() / 1000 - currentDate.getTime() / 1000;
  clock = $('.clock').FlipClock(diff, {
    clockFace: 'DailyCounter',
    countdown: true
  });
});

// hitokoto API
const interval = function () {
  fetch('https://v1.hitokoto.cn?max_length=25')
    .then(response => response.json())
    .then(data => {
      const hitokoto = document.getElementById('hitokoto_text')
      hitokoto.href = 'https://hitokoto.cn/?uuid=' + data.uuid
      hitokoto.innerText = data.hitokoto
      document.getElementsByClassName('Author')[0].children[0].innerText = data.from
    })
    .catch(console.error)
  return interval;
}
setInterval(interval(), 5000);